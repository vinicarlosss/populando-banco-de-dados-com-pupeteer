const puppeteer = require('puppeteer');

console.log("Bem vindo ao conversor");
async function rolarFim(page){
    await page.evaluate(() => {
        return window.scrollTo(0,9000)
      });
}

function transformarNumero(valor){
    numero = "";
    for(let i = 0; i<valor.length;i++){
        if(valor[i] != " " || valor[i]!="M" || valor[i] != "B"){
            numero+= valor[i]
        };
    };
    numero = numero.replace(",", ".");
    return parseFloat(numero)
}

async function webScraping(){
    const browser = await puppeteer.launch({headless:false});
    const page = await browser.newPage();
    await page.goto('https://statusinvest.com.br/acoes/cgra4');
    await rolarFim(page)
    await page.waitForSelector('.level-0.value.text-right.DATA.timeType-1');
    const RESULTADO =  await page.evaluate(()=>{
        return {
            ebit:document.querySelectorAll('.level-0.value.text-right.DATA.timeType-1')[6].children[0].innerHTML,
            valor: 2,
            divida: 3
        }
    });
    
    //await browser.close();
   console.log(transformarNumero(RESULTADO.ebit))
}

webScraping();
