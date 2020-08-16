import * as puppeteer from "puppeteer";
import * as fs from "fs";

interface ImgElement {
  src: string;
}

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
  });
  const page = await browser.newPage();
  await page.goto("https://instagram.com/rocketseat_oficial");

  const data = await page.evaluate(() => {
    const nodeList = document.querySelectorAll("article img");

    const imgArray = (Array.from(nodeList) as unknown) as ImgElement[];

    const list = imgArray.map(({ src }) => ({
      src,
    }));

    return list;
  });

  fs.writeFile("instagram.json", JSON.stringify(data, null, 2), (error) => {
    if (error) throw new Error("Something went wrong.");
    console.log("Finished");
  });

  await browser.close();
})();
