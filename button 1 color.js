<html>
    <body>
        <button id="mybutton"> Click </button>
        <p id="messageText">  Waiting For Your Click </p>
        <script>
const button=document.getElementById("mybutton");
const textMessage=document.getElementById("messageText");
function handleButtonClick(){
    textMessage.textContent="Button was successfully clicked";
    textMessage.style.color="green";
}
button.addEventListener("click",handleButtonClick);

</script>
</body>
</html>
