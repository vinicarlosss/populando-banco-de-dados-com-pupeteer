const puppeteer = require('puppeteer');

console.log("Bem vindo ao conversor");


async function web(){
    const browser = await puppeteer.launch({headless:false});
    const page = await browser.newPage();
    await page.goto('https://statusinvest.com.br/acoes/cgra4');
    const RESULTADO = await page.evaluate(() => {
        return {
            ebit: document.querySelector(".value").innerHTML
        };
      });
    //await browser.close();
    console.log(RESULTADO);
}

web();