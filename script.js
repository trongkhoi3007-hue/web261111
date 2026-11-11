// script.js : 내 영화 평점 통계(콘솔판)
// 작성자 : 전소영  /  이용자 : 짠청코이(2594067)

const titles = ["극장판 치이카와: 인어 섬의 비밀", "암살자(들)", "실낙원", "타짜: 벨제붑의 노래", "클레이페이스"];
const ratings = [7.4, 7.2, 8.0, 7.0, 7.5];
const years = [2026, 2026, 2026, 2026, 2026];

for (let index in tittles) {
    console.log("영화 $(index);$(titles[index]")
}
let sum = 0;
for (let i = 0; i < ratings.length; i++) {
    sum += ratings[i];
}
console.log("합계:", sum);

const average = sum / ratings.length;
console.log("평균:", average);

let max = ratings[0];
let maxindex = 0;
let count = 0;
for (let i = 1; i < ratings.length; i++) {
    if (ratings[i] > max) {
        max = ratings[i];
        maxindex = i;
    }
    if (ratings[i] >= 8) {
        count++;
    }
}
// console.log("최고:", titles[maxindex], max);
// console.log("8점 이상:", count + "편");
console.log(`최고: ${titles[maxindex]} ${max}`);
console.log(`8점 이상: ${count} 편`);

for (let i = 0; i < titles.length; i++) {
    let label;

    if (ratings[i] >= 8.5) {
        label = "명작";
    } else if (ratings[i] >= 7.5) {
        label = "추천";
    } else {
        label = "보통";
    }

    console.log(titles[i] + " (" + years[i] + ") : " + ratings[i] + " " + label);
}

const avgText = average.toFixed(1);
const best = titles[maxIndex];
alert(`내 영화 ${titles.length}편, 평균 ${avgText}점, 최고는 ${best}`);









































// // document.write("외부 스크립트 방법");

// console.log("콘솔창에 나와야 하는 내용");

// var num = 10 + 20;

// console.log(num);

// let sum = 80 + 1234;

// console.log(sum);

// let string1 = "Hello World";
// let string2 = "시네마 웹사이트 'Cinema Website'에 오신 것을 환영합니다.";

// console.log(string1, string2);

// let dan = 3;
// let gugu = 8;
// let string = `${dan} 곱하기 ${gugu}은/는 ${dan * gugu}입니다.`;
// console.log(string);

// let studentScore = [50, 60, 70, 80];
// console.log(studentScore);
// console.log(studentScore[2]);

// let stdScore = {
//     koreanScore: 80,
//     englishScore: 70,
//     mathScore: 90,
//     scieneScore: 60,
// };

// console.log(stdScore);
// console.log(stdScore.koreanScore);



// for (let j = 2; j <= 9; j++) {
//     for (let i = 1; i < 10; i++) {
//         console.log(`${j} x ${i} = ${j * i}`);
//     }
//     conslole.log("---------------");
// }