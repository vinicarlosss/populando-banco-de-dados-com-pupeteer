const puppeteer = require('puppeteer');
const db = require("./db");
const empresas = [["CGRA4", "grazziotin"],
["ENAT3", "enauta"],
['VIIA3', 'VIA S.A'],
["FESA4","FERBASA"],
["LVTC3", "LIVETECH DA BAHIA INDUSTRIA E COMERCIO S.A"],
["LEVE3", "MAHLE-METAL LEVE"],
["JHSF3", "jhsf participacoes"],
["ODPV3", "odontoprev"],
 ["SAPR4", "sanepar"],
 ["TAEE4", "taesa"],
 ["TRPL4", "transmissão paulista"],
["WIZS3", "Wiz"]
,["LAME3", "lojas americanas"]
,["MGLU3", "Magazine luiza"],
["WEGE3", "weg"],
["SLCE3", "Slc agricola"],
["SBSP3", "CIA Saneamento de São Paulo"],
["ASAI3", "assai atacadista"], 
["CPLE3", "Copel"],
["PCAR3", "Grupo pão de açucar"],
["HYPE3", "Hypera"],
["B3SA3", "B3 Sa"],
["VALE3", "Vale"], 
["ELET3", "Eletrobras"], 
["PETR4", "petrobras"],
["KLBN4", "Klabin"], 
["ENBR3", "EDP Brasil"], 
["QUAL3", "Qualicorp"], 
["NTCO3", "Natura"],
["STBP3", "Santos Brasil"], 
["ARZZ3", "Arezzo"], 
["VIVT3", "Vivo"], 
["ABEV3", "Ambev"],
["EPAR3", "Embpar"], 
["CTNM4", "Tecidos Norte de Minas"], 
["USIM3", "Usiminas"], 
["TASA3", "Taurus Armas"], 
["PSSA3", "Porto seguro"], 
["PTBL3", "Portobello"], 
["MRVE3", "MRV engenharia"],
["LAVV3", "Lavvi"], 
["TGMA3", "Tegma"], 
["HBSA3", "Hidrovias do Brasil"], 
["SEQL3", "Sequoia"],
["GFSA3", "Gafisa"],  
["SQIA3", "Sinqia"],  
["DASA3", "Dasa"],  
["RCSL4", "recrusul"],  
["LWSA3", "Locaweb"],  
["DMVF3", "Varejo Farma"], 
["CMIN3", "csn mineração"],
["ALUP3", "Alupar"], 
["MRFG3", "Marfrig"], 
["MNPR3", "Minupar"], 
["DMMO3", "Dommo Energia"],
["UNIP3", "Unipar"], 
["LIGT3", "Light SA"], 
["GRND3", "Grendene"], 
["SEER3", "Ser Educacional"],
["ANIM3", "Anima Holding"], 
["LREN3", "Lojas Renner"], 
["SHUL4", "Schulz"], 
["MILS3", "Mills"],
["RENT3", "Localiza"], 
["LCAM3", "Locamerica"], 
["MOVI3", "Movida"], 
["LJQQ3", "Lojas quero quero"],
["PETZ3", "Petz"], 
["ESPA3", "MPM"], 
["CAMB3", "Cambucci"], 
["VULC3", "Vulcabras"], 
["TECN3", "technos"],
["VIVA3", "Vivara"], 
["CEDO4", "Cedo Textil"], 
["PTNT4", "Petenatti"],
["SGPS3", "Springs"], 
["HGTX3", "Hering"], 
["TFCO4", "Track & Field"], 
["UCAS3", "Unicasa"], 
["SOJA3", "Boa Safra"], 
["AGRO3", "brasilagro"], 
["TESA3", "Terra santa"], 
["JALL3", "Jalles Machado"], 
["SMTO3", "São martinho"], 
["CAML3", "Camil"], 
["MDIA3", "M.Dias Branco"], 
["BRFS3", "brf"], 
["JBSS3", "JBS"], 
["BEEF3", "Minerva"],
["CRFB3", "Atacadão"], 
["GMAT3", "Grupo Matheus"], 
["BOBR4", "Bombril"],
["ALSO3", "Aliansce"], 
["BRPR3", "Br Properties"], 
["CYRE3", "Cyrela"], 
["HBRE3", "Realty empreendimentos"],
["IGTA3", "iguatemi"], 
["IGTI3", "Jereissati"], 
["LOGG3", "log comercial"], 
["MULT3", "Multiplan"],
["SCAR3", "São Carlos"], 
["SIMH3", "Simpar"], 
["EUCA4", "EUCATEX"],
["RANI4", "IRANI"], 
["SUZB3", "Suzano"], 
["BRAP3", "Bradespar"],
["CSNA3", "siderurgica nacional"], 
["BRKM3", "BRASKEM"], 
["MGEL4", "Mangels"], 
["GOAU3", "Metarlugia gerdau"],
["GGBR3", "Gerdau"], 
["ATOM3", "Atom empreendimentos"], 
["OPCT3", "Oceanpact"], 
["CSAN3", "Cosan"], 
["PRIO3", "Petro Rio"], 
["RECV3", "Petroreconcavo"], 
["UGPA3", "Ultrapar"], 
["BLAU3", "Blau Farmaceutica"], 
["PNVL3", "Dimed"], 
["PGMN3", "Pague menos"], 
["OFSA3", "Ouro fino"],
["PFRM3", "Profarma"],
["RADL3", "Raia Drogasil"], 
["AALR3", "Alar"], 
["FLRY3", "Fleury"], 
["HAPV3", "Hapvida"], 
["MATD3", "Hospital mat dei"], 
["PARD3", "Hermes Pardini"], 
["GNDI3", "Notre Dame"], 
["RDOR3", "Rede dor"], 
["BMOB3", "Bemobi"], 
["CASH3", "Méliuz"], 
["MOSI3", "Mosaico tecnologia"],
["NGRD3", "Neogrid"], 
["TOTS3", "Totvs"], 
["POSI3", "Positivo"], 
["INTB3", "Intelbras"],
["AMBP3", "Ambipar"], 
["CSMG3", "Copasa"], 
["ORVR3", "Orizon"], 
["TIET3", "AES Tietê"],
["CMIG4", "Cemig"], 
["CLSC4", "Celesc"], 
["CEEB3", "Eletricidade Bahia"], 
["CPFE3", "cpfl"],
["KEPL3", "kepler weber"], 
["EMAE4", "Empresa Metrop"], 
["ENGI4", "Energisa"], 
["ENEV3", "Eneva"],
["EGIE3", "Engie"], 
["EQTL3", "Equatorial"], 
["POWE3", "Power"], 
["NEOE3", "Neoenergia"],
["OMGE3", "Omega"]];
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
async function webScraping(ticker,nome_empresa){
    const browser = await puppeteer.launch({headless:false});
    const page = await browser.newPage();
    await page.goto(`https://statusinvest.com.br/acoes/${ticker}`);
    await rolarFim(page)
    await page.waitForSelector('.level-0.value.text-right.DATA.timeType-1');
    const PERIODO = await page.evaluate(()=>{
        return document.querySelector(".table-info-body.small").children[0].children[0].children[0].children[1].children[0].innerHTML
    })
    if(PERIODO == "4T2021 - 3T2022"){
        const RESULTADO =  await page.evaluate(()=>{
            return {
                ebit:document.querySelectorAll('.level-0.value.text-right.DATA.timeType-1')[6].children[0].innerHTML,
                valor: document.querySelectorAll('.top-info.info-3.sm.d-flex.justify-between.mb-3')[0].children[6].children[0].children[0].children[2].innerHTML,
                divida: document.querySelector(".top-info.info-3.sm.d-flex.justify-between.mb-3").children[5].children[0].children[0].children[2].innerHTML
            }
        });
        await browser.close();
        let ebit = parseFloat(tratarNumero(RESULTADO.ebit));
        let valor = parseFloat((tratarNumero(RESULTADO.valor)/1000000).toFixed(2));
        let divida = parseFloat((tratarNumero(RESULTADO.divida)/1000000).toFixed(2));
        db.insertEmpresa(ticker,nome_empresa,ebit,valor,divida);
    }else{
        console.log("Não há dados do período.");
        await browser.close();
    }

}

async function webScrapingUpdate(ticker,nome_empresa){
    const browser = await puppeteer.launch({headless:false});
    const page = await browser.newPage();
    await page.goto(`https://statusinvest.com.br/acoes/${ticker}`);
    await rolarFim(page)
    await page.waitForSelector('.level-0.value.text-right.DATA.timeType-1');
    const PERIODO = await page.evaluate(()=>{
        return document.querySelector(".table-info-body.small").children[0].children[0].children[0].children[1].children[0].innerHTML
    })
    if(PERIODO == "4T2021 - 3T2022"){
        const RESULTADO =  await page.evaluate(()=>{
            return {
                ebit:document.querySelectorAll('.level-0.value.text-right.DATA.timeType-1')[6].children[0].innerHTML,
                valor: document.querySelectorAll('.top-info.info-3.sm.d-flex.justify-between.mb-3')[0].children[6].children[0].children[0].children[2].innerHTML,
                divida: document.querySelector(".top-info.info-3.sm.d-flex.justify-between.mb-3").children[5].children[0].children[0].children[2].innerHTML
            }
        });
        await browser.close();
        let ebit = parseFloat(tratarNumero(RESULTADO.ebit));
        let valor = parseFloat((tratarNumero(RESULTADO.valor)/1000000).toFixed(2));
        let divida = parseFloat((tratarNumero(RESULTADO.divida)/1000000).toFixed(2));
        db.updateEmpresa(ticker,nome_empresa,ebit,valor,divida);
    }else{
        console.log("Não há dados do período.");
        await browser.close();
    }

}

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })
  readline.question(`O que você deseja fazer?`, e => {
    let escolha = e;
    if(escolha == 1){
        (async()=>{
            let counter = 0;
            for(let i = 0; i<empresas.length;i++){
                await webScraping(empresas[i][0],empresas[i][1]);
                ++counter;
                console.log(counter+` empresa: ${empresas[i][0]}`)
            }
        })();
    }else if(escolha==2){
        (async()=>{
            let counter = 0;
            for(let i = 0; i<empresas.length;i++){
                await webScrapingUpdate(empresas[i][0],empresas[i][1]);
                ++counter;
                console.log(counter+` empresa:${empresas[i][0]}`)
            }
        })();
    }else{
        console.log("Opção inválida")
    }
    readline.close()
  });
