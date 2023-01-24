const inputFlied = document.getElementsByTagName('input')
const label_text = document.getElementsByTagName('label')

if (inputFlied.hasFocus()){
    label_text.style.top = "30px";
}