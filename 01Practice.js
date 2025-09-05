console.log("The Age is " , Age)
var Age = 21;
console.log("The Age is ", Age)

// outputs -->
// The Age is  undefined
// The Age is  21

// yha Hoisting ka concept aaya hai ---->
// javascript mai kuch bhi code chalane per sabse pahle global execution box bnta hai is box ke do part hote hai ak mai code ki memory (code memory ) hoti hai dusri mai actual code hota hai 
// toh jabh code chlate hai to code mai jitne bhi varibles hote hai wo memory mai chle jaate hai only varible unki values nhi
//  jaise var name = "pratik" toh ye sabse pahle memory mai var name jaayga ,  uske baad code  jaayga actual code waale field ke ander wha jabh code upr se niche ki traf chlega to pahli line dekhega 
// yha per pahli line ye hai -->console.log("The age is " Age)  iske baad memory mai compiler dekhega koi variable hai( age) naam ka jaise yha per hai but us varible mai value nhi hai to output hoga -->the age is undefined  fir next line mai jaayga or dekhege ki varible ki value  hai ye update krdega memory mai fir jabh compiler aage chlega to console.log("the age is" Age) pe chlega to output hoga the age is 21 kyuki abh compiler value bhi milgei hai