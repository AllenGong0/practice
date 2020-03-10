// function validPassword(str){
//     if(str.length<8) return 'NG';
//     let count = 0;
//     let reg = [
//         /[A-Z]/,/[a-z]/,/[0-9]/,/[^a-zA-Z0-9]/
//     ]
//     reg.forEach(item=>{
//         if(item.test(str)) count++;
//     })
//     if(count<3) return 'NG'
//     for(let i=0; i<str.length-3; i++){
//         let tmp = str.substr(i,3);
//         if(str.lastIndexOf(tmp)>i){
//             return 'NG'
//         }
//     }
//     return 'OK'
// }
// console.log(validPassword('021$bc9000'))

// let str = '$bo*y gi!r#l #'
// let newStr = str.replace(/[^a-zA-Z]/g," ");

// console.log(newStr.split(" ").reverse().join(" ").trim())
let str = `dsuehgfqxzrnkmtmiwyt
shrerjfybxirufrsobkjeghiunftxyqqc
yoreevvktxgvjjqzvcujsynsrlgllebyukyxgugrvkesovfhzdznstvtbblmjcngwsdrmfczsihiblqhkfvhzylwopepfmnixeesvugyifdxvpcknpqunolpgjehoxgylnzoggqpbdkhrngchidhfdktblrifjvppttemmplzrsbjhltvwprhkigkvfkxcxfsgyiyuuziqurgcmddqshenindtrfzlrqpfpekfosmugpwjgydtbwexcwrvdedposftffjrfeojsqpxtoguroojsgrwpyiyhurprcfsgnnykjtrjjzdswfqfwuohpcssgjzyikruvomeggqzyslmfurgnmhyvnksktvdcidvutrrxzixbxiypbvozgnmopfjiljggqrronwkfqvlpdwhtzfpsokfbvftyxdinknsrjlxbzyfmsinegprbnuezqlikgsbbixfdjtsjxojqwxdrvwfflrwjsnpcxqvfpmbidyvvlcnvvvvbglhhmkpuzhosfitgzclicpzsvozsbtvtlmjffqieosliqysgyxmceytmezfbtkcprfomftlkyortyfmykslfdmxzfeetmzxbuvoorpwmkerujcjcuuyvmpqidrrksrtmxhqoqdyvjgvcftbhywmbdfoixecfgorpxoxbqlhbnynwflbodsdqvwwoizdfyczefvonoczocvtbixehcvpmimyxgzddvomklofuthtytqougojqwmxvhzpmvtfsjwrgmxuoeizmnfptssolqbmnrhfjitoqxizflyoddgjlxknumclfmpmrzpomrqqogvmwgclpquhuqbkriyjkwcusetkyxozomcrsuyfmsddwubkiyyjoeqlzjsfnwkhdpgxkeicbivlwbdvcbvdqbyxuwdolmtxzgpogtzctlcjemoxdrbrmmtkuuidtiebckmqluiszgichpmgbsxdiurxdgkvvufyihcjejgwwepswxmjducltnxngtylgiqcvxldeebykysdgwokcupxmjnbiqlzovnocuesodotqivceqhimuhtromxxullejgzhzevzvtdhbfhcwbdivgslkfmudzofbmeeqixuprbsyrelcgvvkbtkgckezrrisnnkwwchcfwlqdoucccqinjplgwlqcylqojstlvdjmcjyqjsqwrvxjmujcuzirinocnnwszxjnyszncytltbusmcsxustpxeuxgmwlixnjnigsxnollfbpqrwohbshbohhnpsvenvgreqfwqypkkibenvgjcwmumwcgehehiyediindvppefciihjkcnzvelorusllpbexivekbflpyqpefpjlumctorwejnefenhrlfugnkywvwuvrdrxsxjksgowxholmpjfyjcksmhwpcpjcodwzmolzgkcjxmiqxdpewlyjilcbbwyxmxhqvsxkepiwdvmfxdceiswscupzpmhvmyciyosxuwnmjxnkdhhnquxsmekmcwgcklxzhhqxkebqcvxpsqzuoxikverbskrwvewomemysgcmrdnzgufysnoxuerrqcufevwwumrvbowvvkjuediygphwgwgdrpbgreytkmgcmzonbyxwkolywjcigvyqqhwsjmtkvvhbtuhctcigvfnkkffvsjrjiumlowlwvsbuopmsfcqrxlpprtmswlkdmkoxewhtfkzzoohdbutqccmzsscjdozeeecdqmugcrqqfjingovwfmvnltdfcmrofcftnoozquguyyzdxqqgwbdpotbquhokorykpurvwbvcwdnmzgimuzjipikdtvhstsgeykmunxvbszjmbgwhiymumfmlhennthtjwspxvqrelkhwqxjrzbkqbobfetlejvdhzpmwreqfhnupgovixdemmngzorgfooiruhjbjmvwgmzrvjgrwouxugmysbrdtdujjeffomribgqkhjohitgonqevcweedmleexqjgtywpwbwmoltxbdkiyvgrykhbesgckhvecyvcjryqbhstwrcloqmoivrmkkimzwbywumxfrzyterxmwpqcullcvebkflwmbbexqifohjrrgsnbsqhlxkwkuhwocmjfrhyfkqpqlbvxokbvbufqffclzlnlszcimzucrsrohldxeohdiktubdrvkzvgvhnrkeenmhcvujlxlpcyhohumnuxmswwfwyhuyqhurvcrvmnkgsyygunrvpbvdmpetuixhwtnswhmg
tuunzybkyosezpzttrzcdukbtmxxesch
lkjgqgrnhvixqbcusimvwdceedhhbbbrxefvztdcfdtzglhmzfthlmc`
let res = 0,res1 = 0,max = -Infinity;

for(let i=0; i<str.length; i++){
    let k = i-1;
    let q = i+1;
    let count = 0;
    while(str.charAt(k)===str.charAt(q) && k>=0 && q<str.length){
        count += 2;
        k--;
        q++;
    }
    max = Math.max(max,count+1)
}

for(let i=0; i<str.length; i++){
    let k = i;
    let q = i+1;
    let count = 0;
    while(str.charAt(k)===str.charAt(q) && k>=0 && q<str.length){
        count += 2;
        k--;
        q++;
    }
    max = Math.max(max,count)
}
console.log(max)