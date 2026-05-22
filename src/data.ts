export interface Episode {
  id: string;
  season: number;
  episode: number;
  title: string;
  imdb: string;
  summary: string;
  downloadUrl: string;
  imageUrl?: string;
}

export const episodesData: Episode[] = [
  // Season 1
  { id: "s1e1", season: 1, episode: 1, title: "Qish yaqinlashmoqda", imdb: "8.9", summary: "Eddard 'Ned' Stark Qirolning o'ng qo'li bo'lishga rozi bo'ladi.", downloadUrl: "#" },
  { id: "s1e2", season: 1, episode: 2, title: "Qirolning yo'li", imdb: "8.6", summary: "Ned va uning qizlari Qirol yeriga yo'l olishadi. Jon Snou devorga boradi.", downloadUrl: "#" },
  { id: "s1e3", season: 1, episode: 3, title: "Lord Snou", imdb: "8.5", summary: "Jon Qora Qorovullar safida mashg'ulotni boshlaydi. Ned Qirol yeriga yetib keladi.", downloadUrl: "#" },
  { id: "s1e4", season: 1, episode: 4, title: "Nogironlar, haromilar va singan narsalar", imdb: "8.6", summary: "Ned Jon Arrin qanday o'lganini tekshiradi. Tiron Jon bilan vidolashadi.", downloadUrl: "#" },
  { id: "s1e5", season: 1, episode: 5, title: "Bo'ri va Arslon", imdb: "9.0", summary: "Ned va Jeymi Lannister o'rtasida to'qnashuv yuz beradi.", downloadUrl: "#" },
  { id: "s1e6", season: 1, episode: 6, title: "Oltin toj", imdb: "9.1", summary: "Vizeris Targaryen oxir-oqibat o'z 'toj'iga ega bo'ladi.", downloadUrl: "#" },
  { id: "s1e7", season: 1, episode: 7, title: "Yutasan yoki O'lasan", imdb: "9.1", summary: "Ned Robertning merosxo'ri haqidagi haqiqatni bilib oladi.", downloadUrl: "#" },
  { id: "s1e8", season: 1, episode: 8, title: "Uchi o'tkir uchi", imdb: "8.9", summary: "Starklar uyiga hujum qilinadi. Robb Stark urushga otlanadi.", downloadUrl: "#" },
  { id: "s1e9", season: 1, episode: 9, title: "Beylor", imdb: "9.6", summary: "Ned Starkning taqdiri hal bo'ladi. Robb muhim asir oladi.", downloadUrl: "#" },
  { id: "s1e10", season: 1, episode: 10, title: "Olov va Qon", imdb: "9.4", summary: "Ajdaholar qayta tug'iladi. Shimol o'zining yangi qirolini e'lon qiladi.", downloadUrl: "#" },

  // Season 2
  { id: "s2e1", season: 2, episode: 1, title: "Shimol yodda saqlaydi", imdb: "8.6", summary: "Tirion Qirol yeriga qaytadi. Stannis Barateon taxtga da'vo qiladi.", downloadUrl: "#" },
  { id: "s2e2", season: 2, episode: 2, title: "Tungi yerlar", imdb: "8.4", summary: "Ariya devor tomon ketayotgan guruh bilan yo'lga tushadi.", downloadUrl: "#" },
  { id: "s2e3", season: 2, episode: 3, title: "O'lgan narsa hech qachon o'lmaydi", imdb: "8.7", summary: "Tirion Kichik Kengashdagi xoinni aniqlash uchun ajoyib reja tuzadi.", downloadUrl: "#" },
  { id: "s2e4", season: 2, episode: 4, title: "Suyak bog'lari", imdb: "8.7", summary: "Deyneris Qart (Qarth) shahriga yetib keladi. Mellisandra o'z kuchini ko'rsatadi.", downloadUrl: "#" },
  { id: "s2e5", season: 2, episode: 5, title: "Xarrenxal sharpasi", imdb: "8.7", summary: "Ariya Tayvin Lannisterga xizmat qiladi. Renli qotilligi yuz beradi.", downloadUrl: "#" },
  { id: "s2e6", season: 2, episode: 6, title: "Qadimgi xudolar va yangilari", imdb: "8.9", summary: "Tion Greyjoy Vinterfelni egallaydi. Kichik Jon ochiq dengizga boradi.", downloadUrl: "#" },
  { id: "s2e7", season: 2, episode: 7, title: "Sharaf bo'lmagan inson", imdb: "8.8", summary: "Xayme Lannister qochishga urinadi. Jon Snov Yigritte bilan qoladi.", downloadUrl: "#" },
  { id: "s2e8", season: 2, episode: 8, title: "Vinterfel shahzodasi", imdb: "8.7", summary: "Tion Vinterfelni ushlab qolish uchun kuch topishga harakat qiladi.", downloadUrl: "#" },
  { id: "s2e9", season: 2, episode: 9, title: "Qora suv", imdb: "9.7", summary: "Stannis Barateon floti Qirol yeriga hujum qiladi. Tirion shaharni himoya qiladi.", downloadUrl: "#" },
  { id: "s2e10", season: 2, episode: 10, title: "Valar Morgulis", imdb: "9.3", summary: "Deyneris O'lmaslar uyiga kirib boradi. Oq sayyohlar devorga yaqinlashadi.", downloadUrl: "#" },

  // Season 3
  { id: "s3e1", season: 3, episode: 1, title: "Valar Doxaeris", imdb: "8.7", summary: "Jon Snou Mance Rayder bilan uchrashadi. Tirion mukofot talab qiladi.", downloadUrl: "#" },
  { id: "s3e2", season: 3, episode: 2, title: "Qorong'i qanotlar, qorong'i so'zlar", imdb: "8.5", summary: "Bran Stark o'zining qobiliyatlari haqida ko'proq bilib oladi.", downloadUrl: "#" },
  { id: "s3e3", season: 3, episode: 3, title: "Jazolash sayri", imdb: "8.7", summary: "Deyneris Unsullied (Lekasizlar) armiyasini sotib olish haqida o'ylaydi.", downloadUrl: "#" },
  { id: "s3e4", season: 3, episode: 4, title: "Va endi uning soat tugadi", imdb: "9.5", summary: "Deyneris Lekasizlarni qo'lga kiritadi va Astaporni yondiradi.", downloadUrl: "#" },
  { id: "s3e5", season: 3, episode: 5, title: "Olov bilan o'pilgan", imdb: "8.9", summary: "Jon va Yigritte g'orda birga bo'lishadi. Robb muhim dushmanni qatl qiladi.", downloadUrl: "#" },
  { id: "s3e6", season: 3, episode: 6, title: "Toqqa chiqish", imdb: "8.7", summary: "Jon va yovvoyilar devorga ko'tarilishadi.", downloadUrl: "#" },
  { id: "s3e7", season: 3, episode: 7, title: "Ayiq va nozik qiz", imdb: "8.6", summary: "Jeyme Briennani ayiq changalidan qutqaradi.", downloadUrl: "#" },
  { id: "s3e8", season: 3, episode: 8, title: "Ikkinchi o'g'illar", imdb: "8.9", summary: "Tirion va Sansa turmush qurishadi. Sem xavfga duch keladi.", downloadUrl: "#" },
  { id: "s3e9", season: 3, episode: 9, title: "Kastamer yomg'irlari", imdb: "9.9", summary: "Qizil to'y... Starklar uchun eng fojiali va halokatli kecha.", downloadUrl: "#" },
  { id: "s3e10", season: 3, episode: 10, title: "Mhysa (Ona)", imdb: "9.1", summary: "Yunkai qullari Deynerisni 'Mhysa' deb atashadi. Bran shimolga yo'l oladi.", downloadUrl: "#" },

  // Season 4
  { id: "s4e1", season: 4, episode: 1, title: "Ikki qilich", imdb: "9.0", summary: "Oberin Martell Qirol yeriga keladi. Ariya Igna qilichini qaytarib oladi.", downloadUrl: "#" },
  { id: "s4e2", season: 4, episode: 2, title: "Arslon va atirgul", imdb: "9.7", summary: "Joffri va Margaerining to'yi kutilmagan o'lim bilan yakunlanadi.", downloadUrl: "#" },
  { id: "s4e3", season: 4, episode: 3, title: "Kishanlarni uzish", imdb: "8.8", summary: "Tirion qamoqqa olinadi. Deyneris Meereen shahriga keladi.", downloadUrl: "#" },
  { id: "s4e4", season: 4, episode: 4, title: "Qasamyod saqlovchi", imdb: "8.7", summary: "Jeyme Briennaga missiya beradi. Oq sayyohlarni ko'payishi ko'rsatiladi.", downloadUrl: "#" },
  { id: "s4e5", season: 4, episode: 5, title: "Ismning birinchisi", imdb: "8.6", summary: "Tommen toj kiydiriladi. Jon Kaster qasriga hujum qiladi.", downloadUrl: "#" },
  { id: "s4e6", season: 4, episode: 6, title: "Xudolar va odamlar qonunlari", imdb: "9.7", summary: "Tirionning sudi bo'lib o'tadi va u jang orqali hukm qilishni talab qiladi.", downloadUrl: "#" },
  { id: "s4e7", season: 4, episode: 7, title: "Bulbul qushi", imdb: "9.0", summary: "Petyr Baelish Eyri (Eyrie) dagi hoqimiyatni o'zgartiradi.", downloadUrl: "#" },
  { id: "s4e8", season: 4, episode: 8, title: "Tog' va ilon", imdb: "9.7", summary: "Oberin Martell va Tog' Tirionning taqdiri uchun jang qiladi.", downloadUrl: "#" },
  { id: "s4e9", season: 4, episode: 9, title: "Devordagi qo'riqchilar", imdb: "9.6", summary: "Yovvoyilar armiyasi Devorga hujum qiladi. Yigritte o'ladi.", downloadUrl: "#" },
  { id: "s4e10", season: 4, episode: 10, title: "Bolalar", imdb: "9.6", summary: "Tirion otasini o'ldiradi. Bran Uch Ko'zli Qarg'ani topadi.", downloadUrl: "#" },

  // Season 5
  { id: "s5e1", season: 5, episode: 1, title: "Kutilayotgan urushlar", imdb: "8.4", summary: "Mance Rayder yoqib yuboriladi. Tirion Pentosga keladi.", downloadUrl: "#" },
  { id: "s5e2", season: 5, episode: 2, title: "Qora va Oq uy", imdb: "8.5", summary: "Ariya Braavosga yetib keladi. Jon Qorovullar sardori etib saylanadi.", downloadUrl: "#" },
  { id: "s5e3", season: 5, episode: 3, title: "Keng ism", imdb: "8.5", summary: "Jon Snov Yanos Slintni qatl qiladi.", downloadUrl: "#" },
  { id: "s5e4", season: 5, episode: 4, title: "Garpiya bolalari", imdb: "8.6", summary: "Ser Barristan Garpiya o'g'illari bilan jangda halok bo'ladi.", downloadUrl: "#" },
  { id: "s5e5", season: 5, episode: 5, title: "Bolani o'ldir", imdb: "8.6", summary: "Jon yovvoyilar bilan muzokara qilib, ularni himoya qilishga qaror qiladi.", downloadUrl: "#" },
  { id: "s5e6", season: 5, episode: 6, title: "Bo'ysunmagan, egilmagan, sinmagan", imdb: "8.0", summary: "Sansa Ramziy Bolton bilan turmush quradi.", downloadUrl: "#" },
  { id: "s5e7", season: 5, episode: 7, title: "Sovg'a", imdb: "8.9", summary: "Serseya qamoqqa olinadi. Jorax Deynerisga Tirionni olib keladi.", downloadUrl: "#" },
  { id: "s5e8", season: 5, episode: 8, title: "Hardhome", imdb: "9.8", summary: "Oq sayyohlar va ularning o'liklar armiyasi Hardhome'ga katta hujum uyushtiradi.", downloadUrl: "#" },
  { id: "s5e9", season: 5, episode: 9, title: "Ajdaho raqsi", imdb: "9.4", summary: "Stannis o'z qizi Shirinni qurbon qiladi. Deyneris Drogonda uchib ketadi.", downloadUrl: "#" },
  { id: "s5e10", season: 5, episode: 10, title: "Onaning rahm-shafqati", imdb: "9.1", summary: "Serseyaning gunoh uchun yurishi. Jon Snov o'z birodarlari tomonidan xiyonatga uchraydi.", downloadUrl: "#" },

  // Season 6
  { id: "s6e1", season: 6, episode: 1, title: "Qizil ayol", imdb: "8.5", summary: "Qora Qorovullar Jon Snov jasadini himoya qiladi. Mellisandraning siri ochiladi.", downloadUrl: "#" },
  { id: "s6e2", season: 6, episode: 2, title: "Uy", imdb: "9.3", summary: "Mellisandra sehr yordamida Jon Snovni tiriltiradi.", downloadUrl: "#" },
  { id: "s6e3", season: 6, episode: 3, title: "Qasamyod buzuvchi", imdb: "8.7", summary: "Jon Snov Qora Qorovullarni tark etadi. Bran o'tmishni ko'radi.", downloadUrl: "#" },
  { id: "s6e4", season: 6, episode: 4, title: "Begona kitob", imdb: "9.1", summary: "Jon va Sansa uchrashishadi. Deyneris Dothraki xalqini o'ziga og'diradi.", downloadUrl: "#" },
  { id: "s6e5", season: 6, episode: 5, title: "Eshik (The Door)", imdb: "9.7", summary: "Hodorning fojiasi ko'rsatiladi. Oq sayyohlar Branning g'origa hujum qiladi.", downloadUrl: "#" },
  { id: "s6e6", season: 6, episode: 6, title: "Qonimning qoni", imdb: "8.4", summary: "Benjen Stark qaytadi. Deyneris Dosh Khaleen dan qo'shin tortadi.", downloadUrl: "#" },
  { id: "s6e7", season: 6, episode: 7, title: "Singan inson", imdb: "8.6", summary: "Sandor Kligan (The Hound) tirik ekani ma'lum bo'ladi.", downloadUrl: "#" },
  { id: "s6e8", season: 6, episode: 8, title: "Hech kim", imdb: "8.3", summary: "Ariya 'Hech kim' bo'lishni rad etadi va Vesterosga qaytishga qaror qiladi.", downloadUrl: "#" },
  { id: "s6e9", season: 6, episode: 9, title: "Xaromiylar jangi", imdb: "9.9", summary: "Jon Snov va Ramziy Bolton Vinterfel uchun eposik darajadagi jangga kirishadi.", downloadUrl: "#" },
  { id: "s6e10", season: 6, episode: 10, title: "Qish shamollari", imdb: "9.9", summary: "Serseya Buyuk Septni portlatib yuboradi. Jon Shimol Qiroli bo'ladi.", downloadUrl: "#" },

  // Season 7
  { id: "s7e1", season: 7, episode: 1, title: "Ajdaho toshi (Dragonstone)", imdb: "8.6", summary: "Deyneris Vesterosga yetib keladi. Ariya Frey xonadonini qirib tashlaydi.", downloadUrl: "#" },
  { id: "s7e2", season: 7, episode: 2, title: "Bo'rondan tug'ilgan", imdb: "8.9", summary: "Jon Deyneris bilan uchrashishga qaror qiladi. Euron Greyjoy Yara flotiga hujum qiladi.", downloadUrl: "#" },
  { id: "s7e3", season: 7, episode: 3, title: "Qirolicha adolati", imdb: "9.2", summary: "Jon va Deyneris ilk bor uchrashishadi. Olenna Tirel fojiasi.", downloadUrl: "#" },
  { id: "s7e4", season: 7, episode: 4, title: "Urush o'ljasi", imdb: "9.7", summary: "Deyneris ajdahosi yordamida Lannisterlar qo'shiniga kuchli zarba beradi.", downloadUrl: "#" },
  { id: "s7e5", season: 7, episode: 5, title: "Sharq posti (Eastwatch)", imdb: "8.8", summary: "Jon Snov tirik o'likni ushlab kelish xavfli missiyasiga rozi bo'ladi.", downloadUrl: "#" },
  { id: "s7e6", season: 7, episode: 6, title: "Devor ortida", imdb: "9.0", summary: "Jon va uning jamoasi o'liklar bilan to'qnashadi. Tungi Qirol Viserion ajdahosini o'ldiradi.", downloadUrl: "#" },
  { id: "s7e7", season: 7, episode: 7, title: "Ajdaho va Bo'ri", imdb: "9.4", summary: "Jon va Deynerisning siri oshkor bo'ladi. Tungi Qirol devorni qulatadi.", downloadUrl: "#" },

  // Season 8
  { id: "s8e1", season: 8, episode: 1, title: "Vinterfel", imdb: "7.5", summary: "Deyneris va Jon Vinterfelga kelishadi. Jon o'zining asl nasli haqida bilib oladi.", downloadUrl: "#" },
  { id: "s8e2", season: 8, episode: 2, title: "Yetti qirollik ritsari", imdb: "7.8", summary: "Vinterfel himoyachilari o'liklar armiyasi hujumidan oldingi so'nggi tunni o'tkazishadi.", downloadUrl: "#" },
  { id: "s8e3", season: 8, episode: 3, title: "Uzoq tun", imdb: "7.4", summary: "Tiriklar o'liklar armiyasiga qarshi Vinterfelda katta jangga kirishadi. Ariya Tungi Qirolni o'ldiradi.", downloadUrl: "#" },
  { id: "s8e4", season: 8, episode: 4, title: "Starklarning oxirgi avlodi", imdb: "5.4", summary: "Deyneris qirol yeriga yo'l oladi, lekin yo'lda Reygal ajdahosini yo'qotadi.", downloadUrl: "#" },
  { id: "s8e5", season: 8, episode: 5, title: "Qo'ng'iroqlar", imdb: "5.9", summary: "Deyneris Qirol yerini va butun shaharni yoqib yuboradi. Serseya va Jeyme halok bo'ladi.", downloadUrl: "#" },
  { id: "s8e6", season: 8, episode: 6, title: "Temir Taxt", imdb: "4.0", summary: "Jon Snov Deynerisni o'ldirishga majbur bo'ladi. Bran Singan Vesteros qiroli etib saylanadi.", downloadUrl: "#" }
];
