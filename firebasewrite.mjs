import{initializeApp} from 'firebase/app';
import { getFirestore, collection,doc, getDocs, setDoc, addDoc, updateDoc } from 'firebase/firestore/lite';
import * as puppeteer from 'puppeteer';
const test= async()=>{
 const firebaseConfig = {
                apiKey: "AIzaSyD3w-uYg91oDoL00plKAgd651p_3MyyVYM",
                authDomain: "sales-hunt.firebaseapp.com",
                projectId: "sales-hunt",
                storageBucket: "sales-hunt.appspot.com",
                messagingSenderId: "746467262897",
                appId: "1:746467262897:web:d95baacb3b6b3ec0157d90",
                measurementId: "G-7X7RR23S9Z"
            };
    const firebaseApp =initializeApp(firebaseConfig);
    const db =getFirestore(firebaseApp);
    const store = await getDocs(collection(db,"stores"));
 // flipkart add data to firestore

     console.log("nhfedghfdfhgdh");
    const browser=await puppeteer.launch({  
      //    headless:true,
      // args:['--no-sandbox','--disable-setuid-sandbox']
    });
   //  headless:false;
       console.log("browser");
    let page=await browser.newPage();
       console.log("page   flipkart");
   let status= await page.goto('https://www.flipkart.com/',{timeout:0});
   status=status.status();
   if(status!=404){
      console.log(status);
   let images= await page.evaluate(()=>{
   return Array.from(document.querySelectorAll(".aA9eLq")).map(x=>x.src);  
   });
   await setDoc(doc(db,"stores","flipkart"),{
      links:images
   });
   console.log(images+" flipkart") 
   }
 
// add amazon data to firestore
  const page1=await browser.newPage();
    console.log("page  amazon");
   let stats= await page1.goto('https://amazon.in',{timeout:0});
   stats=stats.status();
       if(stats!=404){
      console.log(stats);
   let image= await pag.evaluate(()=>{
     return Array.from(document.querySelectorAll("._cropped-image-link_style_fluidImage__iJ3aE")).map(x=>x.src);
   });
   await setDoc(doc(db,"stores","amazon"),{
      links:image
   });
// _cropped-image-link_style_fluidLandscapeImage__3eTVC _cropped-image-link_style_fluidImage__iJ3aE
  console.log(image +" amazon") ;
 }    
   // add  nykaa data t0 firestore
    let page3=await browser.newPage();
    console.log("page  nykaa");
    let stat= await page3.goto('https://www.nykaa.com/',{timeout:0});
   
    stat=stat.status();
    if(stat!=404){
    console.log(stat);
   const image= await pag.evaluate(async()=>{
    return Array.from(document.querySelectorAll(".en1fyme0>div>div>div>div.ean6s9n1>div.img-wrap>img")).map(x=>x.src)
    } );
     await setDoc(doc(db,"stores","nykaa"),{
      links:image
   },{merge:true});
    image.forEach(link=> { 
      console.log(link+" this is link")
   
   })
    console.log(image+" nykaa") 
  }

//  //  tanishq add data to firestore
    let page4=await browser.newPage();
    console.log("page  tanishq");
     await pag.setExtraHTTPHeaders({
       'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.97 Safari/537.36'
    });
    let status4= await page4.goto('https://www.tanishq.co.in/',{timeout:0});
   
    status4=status4.status();
    if(status4!=404){
    console.log(stat);
   const image= await pag.evaluate(async()=>{
    return Array.from(document.querySelectorAll("div.slick-track > div > div > div > div > a > img.img-responsive")).map(x=>x.src)
    } );
     await setDoc(doc(db,"stores","tanishq"),{
      links:image
   },{merge:true});
     console.log(image+" tanishq")
   }

      await browser.close(); 

    return "done";
 } 
module.exports=test;


