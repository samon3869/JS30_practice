const bands = document.querySelector("#bands");

const titles = [
    "바람과 함께 사라지다", "올드보이", "킹덤", "오 나의 귀신님", "브레이킹 배드", "루시퍼", "왕좌의게임", "해리포터" 
];

const textCode = sortedTitles.map(title => {
    return `
        <li>${title}</li>
    `
}).join("");

bands.innerHTML = textCode;
