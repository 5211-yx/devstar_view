import path from "node:path";
import fs from "node:fs";

const DIR_PATH = path.resolve("docs");
const WHITE_LIST = ["index.md", ".vitepress", "node_modules", ".idea", "assets", "public"];

const isDirectory = (path) => fs.lstatSync(path).isDirectory();
const intersections = (arr1, arr2) =>
  Array.from(new Set(arr1.filter((item) => !new Set(arr2).has(item))));

// 新增：按文件系统原始顺序排序
const keepOriginalOrder = (files, dirPath) => {
  return files
    .map(file => ({
      name: file,
      time: fs.statSync(path.join(dirPath, file)).birthtimeMs // 获取创建时间戳
    }))
    .sort((a, b) => a.time - b.time) // 按创建时间排序
    .map(item => item.name);
};

function getList(params, path1, pathname) {
  const res = [];

  // 修改点1：使用 keepOriginalOrder 保持原始顺序
  const orderedParams = keepOriginalOrder(params, path1);

  for (let file of orderedParams) {  // 修改点2：改用 for...of 遍历
    const dir = path.join(path1, file);
    const isDir = isDirectory(dir);

    if (isDir) {
      const files = fs.readdirSync(dir);
      res.push({
        text: file,
        collapsible: true,
        items: getList(files, dir, `${pathname}/${file}`),
      });
    } else {
      const suffix = path.extname(file);
      if (suffix !== ".md") continue;

      const name = path.basename(file, '.md');
      res.push({
        text: name,
        link: `${pathname}/${name}`,
      });
    }
  }

  // 修改点3：完全移除 sort() 调用
  return res;
}

export const set_sidebar = (pathname) => {
  try {
    const dirPath = path.join(DIR_PATH, pathname);
    const files = fs.readdirSync(dirPath);
    const items = intersections(files, WHITE_LIST);
    return getList(items, dirPath, pathname);
  } catch (error) {
    console.error(`Error generating sidebar for ${pathname}:`, error);
    return [];
  }
};