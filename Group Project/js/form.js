window.onload = () => {
    document.getElementById("subscribe_action").addEventListener("click", (e) => {
        let subscriber_name = document.getElementById("subscriber_name").value;
        let subscriber_email = document.getElementById("subscriber_email").value;

        let re_name = /^[A-Z][a-z]+\s[A-Z][a-z]+$/;
        let re_email = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;


        e.preventDefault();

        let name_valid = re_name.test(subscriber_name);
        let email_valid = re_email.test(subscriber_email);

        if(!name_valid){
            alert("This Name is invalid - Please try again");
        }
        else{
            if(!email_valid){
                alert("This email is invalid - Please try again");
            }
            else{
                const url = "http://mudfoot.doc.stu.mmu.ac.uk/node/api/mailinglist"
                const data = {
                    "name" : subscriber_name,
                    "email" : subscriber_email
                };
            
        

        fetch(url, {
            method: "post",
            headers: {
                "content-Type": "application/json"
            },
            body: JSON.stringify(data)
            })
            .then((response) => {
                if(response.status === 200) {
                    return "OK";
                } else if (response.status === 400) {
                    throw "Email Provided is Invalid";
                } else {
                    throw "Something went wrong";
                }
            })
            .then((resJson) => {
                alert("THANKS FOR SUBSCRIBING - SWEDISH HOUSE MAFIA")
            })
            .catch((error) => {
                alert(error)
            })
        }
    }
}
)};