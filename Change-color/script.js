// Function For Hexa Color Code
const getColor = () => {
    // Hex Code
    const randomNumber = (Math.floor(Math.random() * 16777215));
    const randomCode = "#" + randomNumber.toString(16);
    document.body.style.backgroundColor = randomCode;
    document.getElementById("color-code").innerText = randomCode;
}

document.getElementById("btn").addEventListener("click", getColor);

getColor();


// Function For RGB Color Code
const getColor2 = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    const rgbcol = `rgb(${r}, ${g}, ${b})`;
    document.body.style.backgroundColor = rgbcol;
    document.getElementById("color-code").innerText = rgbcol;
}

document.getElementById("btn2").addEventListener("click", getColor2);


// Function For copy Color code....
const copyCode = () => {
    const copyText = document.getElementById("color-code").innerText;

    navigator.clipboard.writeText(copyText);

    const msg = document.getElementById("copied");
    msg.innerText = "Copied!";

    setTimeout(() => {
        msg.innerText = "";
    }, 1500);
}

document.getElementById("Col-btn").addEventListener("click", copyCode);

