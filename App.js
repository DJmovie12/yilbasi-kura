new Vue({
    el: "#app",
    data: {
        inputText: "",
        names: [],
        people: [], // Bu veriye ihtiyacınız olan diğer veriyi ekleyin
        givers: [] // Bu veriye ihtiyacınız olan diğer veriyi ekleyin
    },
    methods: {
        addName() {
            if (this.inputText.trim() !== "") {
                const name = this.inputText.trim();
                if (name !== "") {
                    if (name.length < 15) {
                        this.names.push(name);
                        this.people.push({ name: name }); // İsimleri people listesine ekleyin
                    } else {
                        alert("Maximum 15 Karakter Girebilirsiniz!!");
                    }
                }
                this.inputText = "";
            }
        },
        closeDialog() {
            window.dialog.close();
            this.clearGivers();
        },
        clearGivers() {
            this.givers = []; // Eşleştirilen kişileri temizleyin
        },
        pairNames() {
            if (this.names.length == 0){
                alert("Lütfen Kişilerin İsimlerini Yazdıktan Sonra Entere Basınız.");
                return;
            }

            if (this.names.length % 2 !== 0) {
                alert("Çift sayıda isim eklemelisiniz.");
                return;
            }
            
            this.generateGiftList(); 

        },
        generateGiftList() {
            const availableReceivers = [...this.people]; 
            this.people.forEach(giver => {
                let receiverIndex;
                do {
                    receiverIndex = Math.floor(Math.random() * availableReceivers.length);
                } while (availableReceivers[receiverIndex].name === giver.name);
                const receiver = availableReceivers[receiverIndex];
                availableReceivers.splice(receiverIndex, 1);
                this.givers.push({ name: giver.name, receiver });
            });
            window.dialog.showModal();
            
        }
    },
});

function karYagdir() {
	var karYagdir = document.createElement('i');
	var taban = document.getElementById("karAlani");
	var sayfa = document.getElementsByTagName("BODY")[0];
	var sayfaYukseklik = sayfa.clientHeight;
	taban.style.height = sayfaYukseklik + "px";
	karYagdir.classList.add('fa','fa-snowflake-o');
	karYagdir.style.left = Math.random() * sayfa.clientWidth + 'px';
	karYagdir.style.opacity = Math.random();
	karYagdir.style.animationDuration = Math.random() * 3 + 2 + 's';
	taban.appendChild(karYagdir);
	setTimeout(() => { karYagdir.remove(); }, 7000);
}
setInterval(karYagdir, 100); 
