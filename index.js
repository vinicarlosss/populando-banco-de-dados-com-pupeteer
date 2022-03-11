const puppeteer = require('puppeteer');

console.log("Bem vindo ao conversor");
async function rolarFim(page){
    await page.evaluate(() => {
        return window.scrollTo(0,9500)
      });
}
function tratarNumero(valor){
    valor = valor.replaceAll(".","");
    valor = valor.replaceAll(",",".")
    return valor
}
async function webScraping(){
    const browser = await puppeteer.launch({headless:false});
    const page = await browser.newPage();
    await page.goto('https://statusinvest.com.br/acoes/petr4');
    await rolarFim(page)
    await page.waitForSelector('.level-0.value.text-right.DATA.timeType-1');
    const RESULTADO =  await page.evaluate(()=>{
        return {
            ebit:document.querySelectorAll('.level-0.value.text-right.DATA.timeType-1')[6].children[0].innerHTML,
            valor: document.querySelectorAll('.top-info.info-3.sm.d-flex.justify-between.mb-3')[0].children[6].children[0].children[0].children[2].innerHTML,
            divida: document.querySelector(".top-info.info-3.sm.d-flex.justify-between.mb-3").children[5].children[0].children[0].children[2].innerHTML
        }
    });
    
    await browser.close();
    console.log(parseFloat(tratarNumero(RESULTADO.ebit)));
    console.log(tratarNumero(RESULTADO.valor));
    console.log(tratarNumero(RESULTADO.divida));
}

webScraping();
