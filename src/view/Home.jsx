import { useEffect, useState } from 'react'
import { Display } from '../components/Display';
import { CopyToClipboard } from 'react-copy-to-clipboard';


export const Home = () => {

    const [filter, setFilter] = useState("all");

    const content = [
        { color: '#FBFF45', title: 'Happy' },
        { color: '#45BCFF', title: 'Sad' },
        { color: '#F12424', title: 'Angry' },
        { color: '#F37D2C', title: 'Anxiety' },
        { color: '#FF45E1', title: 'Desiring' },
        { color: '#886fdf', title: 'Dunia' },
        { color: '#32cd77', title: 'Jannah' }
    ];

    const papers = [
        // Happy (Adding more short ayats)
        {
            arabic: "فَبِذَٰلِكَ فَلْيَفْرَحُوا۟ ۚ هُوَ خَيْرٌۭ مِّمَّا يَجْمَعُونَ",
            translation: "So in that let them rejoice; it is better than what they accumulate.",
            transliteration: "Fabi dhalika falyafrahoo huwa khayrun mimma yajmaoon",
            urdu: "پس چاہیے کہ اس پر خوش ہوں، یہ اس سے بہتر ہے جو وہ جمع کرتے ہیں۔",
            from: "Surah Yunus, 10:58",
            title: content[0].title,
            color: content[0].color
        },
        {
            arabic: "وَجُوهٌ يَوْمَئِذٍۢ نَّاضِرَةٌ",
            translation: "Some faces, that Day, will be radiant.",
            transliteration: "Wujoohun yawmaithin naadirah",
            urdu: "اور اس دن کچھ چہرے شاداب ہوں گے۔",
            from: "Surah Al-Qiyamah, 75:22",
            title: content[0].title,
            color: content[0].color
        },
        {
            arabic: "فِي جَنَّاتٍۢ نَعِيمٍ",
            translation: "In Gardens of Pleasure.",
            transliteration: "Fi jannatin na'eem",
            urdu: "نعمتوں کے باغات میں۔",
            from: "Surah Al-Waqi'ah, 56:12",
            title: content[0].title,
            color: content[0].color
        },
        {
            arabic: "لِإِيلَٰفِ قُرَيْشٍ",
            translation: "For the accustomed security of the Quraysh.",
            transliteration: "Li eelaafi quraish",
            urdu: "قریش کے مانوس ہونے کے لئے۔",
            from: "Surah Quraysh, 106:1",
            title: content[0].title,
            color: content[0].color
        },
        {
            arabic: "إِنَّا أَعْطَيْنَاكَ ٱلْكَوْثَرَ",
            translation: "Indeed, We have granted you, [O Muhammad], al-Kawthar.",
            transliteration: "Inna a'taynaka al-kawthar",
            urdu: "بے شک ہم نے آپ کو کوثر عطا کی۔",
            from: "Surah Al-Kawthar, 108:1",
            title: content[0].title,
            color: content[0].color
        },
        {
            arabic: "وَجَنَّاتٍ أَلْفَافًا",
            translation: "And gardens of dense shrubbery.",
            transliteration: "Wa jannatin al-faafa",
            urdu: "اور گھنے باغات۔",
            from: "Surah An-Naba, 78:16",
            title: content[0].title,
            color: content[0].color
        },
        {
            arabic: "وُجُوهٌ يَوْمَئِذٍۢ نَّاعِمَةٌۭ",
            translation: "Faces, that Day, will be joyful.",
            transliteration: "Wujoohun yawma-ithin na'ima",
            urdu: "اور اس دن چہرے خوش ہوں گے۔",
            from: "Surah Al-Ghashiyah, 88:8",
            title: content[0].title,
            color: content[0].color
        },
        {
            arabic: "فِي جَنَّةٍ عَالِيَةٍ",
            translation: "In an elevated garden.",
            transliteration: "Fi jannatin 'aaliyah",
            urdu: "بلند باغ میں۔",
            from: "Surah Al-Ghashiyah, 88:10",
            title: content[0].title,
            color: content[0].color
        },
        {
            arabic: "عَيْنًا يَشْرَبُ بِهَا عِبَادُ اللَّهِ يُفَجِّرُونَهَا تَفْجِيرًا",
            translation: "A spring from which the servants of Allah will drink; they will make it gush forth in force.",
            transliteration: "Aynan yashrabu biha 'ibadullah yufajiroonaha tafjeera",
            urdu: "ایک چشمہ جس سے اللہ کے بندے پیئیں گے، اور اسے زور سے بہائیں گے۔",
            from: "Surah Al-Insan, 76:6",
            title: content[0].title,
            color: content[0].color
        },
        {
            arabic: "إِنَّ هَٰذَا لَهُوَ الْفَوْزُ الْعَظِيمُ",
            translation: "Indeed, this is the great attainment.",
            transliteration: "Inna hatha lahuwa al-fawz al-'azeem",
            urdu: "بے شک یہ بہت بڑی کامیابی ہے۔",
            from: "Surah As-Saffat, 37:60",
            title: content[0].title,
            color: content[0].color
        },
        {
            arabic: "فِي جَنَّاتٍۢ وَنَعِيمٍ",
            translation: "In Gardens and Pleasure.",
            transliteration: "Fi jannatin wa na'eem",
            urdu: "باغات اور خوشی میں۔",
            from: "Surah At-Tur, 52:17",
            title: content[0].title,
            color: content[0].color
        },
        {
            arabic: "إِنَّ الْمُتَّقِينَ فِي مَقَامٍ أَمِينٍ",
            translation: "Indeed, the righteous will be in a secure place.",
            transliteration: "Innal muttaqeena fi maqamin ameen",
            urdu: "بے شک پرہیزگار امن والی جگہ پر ہوں گے۔",
            from: "Surah Ad-Dukhan, 44:51",
            title: content[0].title,
            color: content[0].color
        },
        {
            arabic: "إِنَّ الْأَبْرَارَ لَفِي نَعِيمٍ",
            translation: "Indeed, the righteous will be in pleasure.",
            transliteration: "Innal abrara lafee na'eem",
            urdu: "بے شک نیک لوگ نعمت میں ہوں گے۔",
            from: "Surah Al-Infitar, 82:13",
            title: content[0].title,
            color: content[0].color
        },
        {
            arabic: "فِي مَقْعَدِ صِدْقٍ عِندَ مَلِيكٍ مُّقْتَدِرٍ",
            translation: "In a seat of honor near a Sovereign, Perfect in Ability.",
            transliteration: "Fi maq'adi sidqin 'inda maleekin muqtadir",
            urdu: "سچائی کی جگہ پر، بادشاہ جو کامل قدرت رکھتا ہے۔",
            from: "Surah Al-Qamar, 54:55",
            title: content[0].title,
            color: content[0].color
        },
        {
            arabic: "هَلْ جَزَاءُ الْإِحْسَانِ إِلَّا الْإِحْسَانُ",
            translation: "Is the reward for good [anything] but good?",
            transliteration: "Hal jaza'u al-ihsan illa al-ihsan",
            urdu: "کیا احسان کا بدلہ احسان کے سوا کچھ اور ہے؟",
            from: "Surah Ar-Rahman, 55:60",
            title: content[0].title,
            color: content[0].color
        },
        {
            arabic: "فِيهِمَا عَيْنَانِ نَضَّاخَتَانِ",
            translation: "In both of them are two springs, spouting.",
            transliteration: "Fihima 'aynani naddaakhatani",
            urdu: "ان دونوں میں دو چشمے ہیں جو بہہ رہے ہیں۔",
            from: "Surah Ar-Rahman, 55:66",
            title: content[0].title,
            color: content[0].color
        },
        {
            arabic: "مُتَّكِـِٔينَ عَلَىٰ سُرُرٍۢ مَّصْفُوفَةٍۢ",
            translation: "Reclining on lined up couches.",
            transliteration: "Mutake'een 'ala sururin masfoofa",
            urdu: "صفوں میں جمی ہوئی مسندوں پر تکیہ لگائے۔",
            from: "Surah At-Tur, 52:20",
            title: content[0].title,
            color: content[0].color
        },
        {
            arabic: "إِنَّ الْأَبْرَارَ يَشْرَبُونَ مِن كَأْسٍۢ كَانَ مِزَاجُهَا كَافُورًا",
            translation: "Indeed, the righteous will drink from a cup [of wine] whose mixture is of Kafur.",
            transliteration: "Innal abrara yashraboon min kaasin kana mizaajuha kafura",
            urdu: "بے شک نیک لوگ ایک پیالے سے پئیں گے جس میں کافور ملی ہوگی۔",
            from: "Surah Al-Insan, 76:5",
            title: content[0].title,
            color: content[0].color
        },
    ];


    // Sad (Adding more short ayats)
    papers.push(
        {
            arabic: "فَإِنَّ مَعَ الْعُسْرِ يُسْرًا",
            translation: "For indeed, with hardship [will be] ease.",
            urdu: "یقیناً سختی کے ساتھ آسانی بھی ہے۔",
            transliteration: "Fa inna ma’al usri yusra",
            from: "Surah Ash-Sharh, 94:6",
            title: content[1].title,
            color: content[1].color
        },
        {
            arabic: "وَلَا تَهِنُوا وَلَا تَحْزَنُوا وَأَنتُمُ الْأَعْلَوْنَ إِن كُنتُم مُّؤْمِنِينَ",
            translation: "So do not weaken and do not grieve, and you will be superior if you are [true] believers.",
            urdu: "تو تم کمزوری نہ دکھاؤ اور نہ غمگین ہو، تم ہی غالب رہو گے اگر تم سچے ایمان والے ہو۔",
            transliteration: "Wala tahinoo wala tahzanoo waantumul a’lawna in kuntum mumineen",
            from: "Surah Al-Imran, 3:139",
            title: content[1].title,
            color: content[1].color
        },
        {
            arabic: "إِنَّ مَعَ الْعُسْرِ يُسْرًا",
            translation: "Indeed, with hardship [will be] ease.",
            urdu: "یقیناً سختی کے ساتھ آسانی بھی ہے۔",
            transliteration: "Inna ma'al usri yusra",
            from: "Surah Ash-Sharh, 94:6",
            title: content[1].title,
            color: content[1].color
        },
        {
            arabic: "وَإِنَّ إِلَىٰ رَبِّكَ ٱلرُّجْعَىٰ",
            translation: "And indeed, to your Lord is the return.",
            urdu: "اور یقیناً تمہارا لوٹنا تمہارے رب کی طرف ہے۔",
            transliteration: "Wa inna ila rabbika al-ruj'aa",
            from: "Surah Al-Alaq, 96:8",
            title: content[1].title,
            color: content[1].color
        },
        {
            arabic: "وَجَاءَ رَبُّكَ وَٱلْمَلَكُ صَفًّۭا صَفًّۭا",
            translation: "And your Lord has come and the angels, rank upon rank.",
            urdu: "اور تمہارا رب آ جائے گا اور فرشتے صف در صف ہوں گے۔",
            transliteration: "Wa jaa'a rabbuka wal-malak saffan saffaa",
            from: "Surah Al-Fajr, 89:22",
            title: content[1].title,
            color: content[1].color
        },
        {
            arabic: "فَإِنَّ مَعَ الْعُسْرِ يُسْرًا",
            translation: "For indeed, with hardship [will be] ease.",
            urdu: "یقیناً سختی کے ساتھ آسانی بھی ہے۔",
            transliteration: "Fa-inna ma'al 'usri yusra",
            from: "Surah Ash-Sharh, 94:6",
            title: content[1].title,
            color: content[1].color
        },
        {
            arabic: "إِنَّ مَعَ الْعُسْرِ يُسْرًا",
            translation: "Indeed, with hardship [will be] ease.",
            urdu: "یقیناً سختی کے ساتھ آسانی بھی ہے۔",
            transliteration: "Inna ma'al 'usri yusra",
            from: "Surah Ash-Sharh, 94:7",
            title: content[1].title,
            color: content[1].color
        },
        {
            arabic: "فَصَبْرٌ جَمِيلٌ",
            translation: "So patience is most fitting.",
            urdu: "تو صبر بہترین ہے۔",
            transliteration: "Fasabrun jameel",
            from: "Surah Yusuf, 12:18",
            title: content[1].title,
            color: content[1].color
        },
        {
            arabic: "وَلَا تَهِنُوا وَلَا تَحْزَنُوا وَأَنتُمُ الْأَعْلَوْنَ إِن كُنتُم مُّؤْمِنِينَ",
            translation: "So do not weaken and do not grieve, and you will be superior if you are [true] believers.",
            urdu: "تو تم کمزوری نہ دکھاؤ اور نہ غمگین ہو، تم ہی غالب رہو گے اگر تم سچے ایمان والے ہو۔",
            transliteration: "Wala tahinu wala tahzanu wa-antumu al-a'lawna in kuntum mu'mineen",
            from: "Surah Al-Imran, 3:139",
            title: content[1].title,
            color: content[1].color
        },
        {
            arabic: "وَاصْبِرْ عَلَىٰ مَا أَصَابَكَ",
            translation: "And be patient over what befalls you.",
            urdu: "اور جو تم پر گزرے اس پر صبر کرو۔",
            transliteration: "Wasbir 'ala ma asabak",
            from: "Surah Luqman, 31:17",
            title: content[1].title,
            color: content[1].color
        },
        {
            arabic: "إِنَّ رَبَّكَ وَاسِعُ ٱلْمَغْفِرَةِ",
            translation: "Indeed, your Lord is vast in forgiveness.",
            urdu: "یقیناً تمہارا رب وسیع مغفرت والا ہے۔",
            transliteration: "Inna rabbaka wasi'u al-maghfirah",
            from: "Surah An-Najm, 53:32",
            title: content[1].title,
            color: content[1].color
        },
        {
            arabic: "فَصَبْرٌ جَمِيلٌ وَاللَّهُ الْمُسْتَعَانُ",
            translation: "So patience is most fitting. And Allah is the one sought for help.",
            urdu: "تو صبر بہترین ہے اور اللہ ہی سے مدد مانگی جاتی ہے۔",
            transliteration: "Fasabrun jameel wallahu al-musta'an",
            from: "Surah Yusuf, 12:18",
            title: content[1].title,
            color: content[1].color
        },
        {
            arabic: "وَٱسْتَعِينُوا۟ بِٱلصَّبْرِ وَٱلصَّلَوٰةِ",
            translation: "And seek help through patience and prayer.",
            urdu: "اور صبر اور نماز سے مدد طلب کرو۔",
            transliteration: "Wasta'eenoo bis-sabri wassalat",
            from: "Surah Al-Baqarah, 2:45",
            title: content[1].title,
            color: content[1].color
        },
        {
            arabic: "إِنَّ ٱللَّهَ مَعَ ٱلصَّـٰبِرِينَ",
            translation: "Indeed, Allah is with the patient.",
            urdu: "یقیناً اللہ صابر لوگوں کے ساتھ ہے۔",
            transliteration: "Inna Allaha ma'a as-sabireen",
            from: "Surah Al-Baqarah, 2:153",
            title: content[1].title,
            color: content[1].color
        },
        {
            arabic: "فَإِنَّ ٱللَّهَ هُوَ مَوْلَىٰهُۥ",
            translation: "For indeed, Allah is his protector.",
            urdu: "یقیناً اللہ اس کا مددگار ہے۔",
            transliteration: "Fa-inna Allaha huwa mawlahu",
            from: "Surah At-Tahrim, 66:4",
            title: content[1].title,
            color: content[1].color
        },
        {
            arabic: "لَا تَحْزَنْ إِنَّ اللَّهَ مَعَنَا",
            translation: "Do not grieve; indeed Allah is with us.",
            urdu: "غم نہ کرو، اللہ ہمارے ساتھ ہے۔",
            transliteration: "La tahzan inna Allaha ma'ana",
            from: "Surah At-Tawbah, 9:40",
            title: content[1].title,
            color: content[1].color
        },
        {
            arabic: "وَمَا تَوْفِيقِىٓ إِلَّا بِٱللَّهِ ۚ",
            translation: "And my success is not but through Allah.",
            urdu: "اور میری کامیابی صرف اللہ کی مدد سے ہے۔",
            transliteration: "Wa ma tawfeeqi illa billah",
            from: "Surah Al-Imran, 3:126",
            title: content[1].title,
            color: content[1].color
        },
        {
            arabic: "وَمَآ أَصَابَكُم مِّن مُّصِيبَةٍ فِى مَا كَسَبَتْ أَيْدِيكُمْ",
            translation: "And whatever strikes you of disaster is from what your hands have earned.",
            urdu: "اور جو تمہیں مصیبت پہنچتی ہے وہ تمہارے اپنے ہاتھوں کا کیا دھرا ہے۔",
            transliteration: "Wa ma asabakum min musibatin fima kasabat aydeekum",
            from: "Surah Ash-Shura, 42:30",
            title: content[1].title,
            color: content[1].color
        }
    );


    // Angry (Adding more short ayats)
    papers.push(
        {
            arabic: "وَالْكَاظِمِينَ الْغَيْظَ وَالْعَافِينَ عَنِ النَّاسِ",
            translation: "And those who restrain anger and pardon all men.",
            urdu: "اور جو غصے کو روکیں اور لوگوں کو معاف کریں۔",
            transliteration: "Wal-kazimeenal-ghayza wal-‘aafeena ‘anin-naas",
            from: "Surah Al-Imran, 3:134",
            title: content[2].title,
            color: content[2].color
        },
        {
            arabic: "وَإِذَا مَا غَضِبُوا هُمْ يَغْفِرُونَ",
            translation: "And when they are angry, they forgive.",
            urdu: "اور جب وہ غصے میں ہوں تو وہ معاف کردیتے ہیں۔",
            transliteration: "Waitha ma ghadiboo hum yaghfiroon",
            from: "Surah Ash-Shura, 42:37",
            title: content[2].title,
            color: content[2].color
        },
        {
            arabic: "وَٱصْبِرْ عَلَىٰ مَا يَقُولُونَ",
            translation: "And be patient over what they say.",
            urdu: "اور جو وہ کہتے ہیں اس پر صبر کرو۔",
            transliteration: "Wasbir 'ala ma yaqooloon",
            from: "Surah Sad, 38:17",
            title: content[2].title,
            color: content[2].color
        },
        {
            arabic: "إِنَّهُۥ كَانَ لَا يُؤْمِنُ بِٱللَّهِ ٱلْعَظِيمِ",
            translation: "Indeed, he did not used to believe in Allah, the Most Great.",
            urdu: "یقیناً وہ اللہ عظیم پر ایمان نہیں لاتا تھا۔",
            transliteration: "Innahu kana la yu'minu billahi al-azeem",
            from: "Surah Al-Haaqqa, 69:33",
            title: content[2].title,
            color: content[2].color
        },
        {
            arabic: "وَإِذَا ٱلصُّحُفُ نُشِرَتْ",
            translation: "And when the pages are spread.",
            urdu: "اور جب صفحات پھیلائے جائیں گے۔",
            transliteration: "Wa ithassuhufo nushirat",
            from: "Surah At-Takwir, 81:10",
            title: content[2].title,
            color: content[2].color
        },
        {
            arabic: "وَالْكَاظِمِينَ الْغَيْظَ وَالْعَافِينَ عَنِ النَّاسِ",
            translation: "And those who restrain anger and pardon the people.",
            urdu: "اور جو غصے کو روکیں اور لوگوں کو معاف کریں۔",
            transliteration: "Wal-kazimeena al-ghayza wal-aafeena 'anin-naas",
            from: "Surah Al-Imran, 3:134",
            title: content[2].title,
            color: content[2].color
        },
        {
            arabic: "وَإِذَا مَا غَضِبُوا هُمْ يَغْفِرُونَ",
            translation: "And when they are angry, they forgive.",
            urdu: "اور جب وہ غصے میں ہوں تو وہ معاف کردیتے ہیں۔",
            transliteration: "Wa-itha ma ghadiboo hum yaghfiroon",
            from: "Surah Ash-Shura, 42:37",
            title: content[2].title,
            color: content[2].color
        },
        {
            arabic: "وَلَا تَسْتَوِي الْحَسَنَةُ وَلَا السَّيِّئَةُ",
            translation: "And not equal are the good deed and the bad.",
            urdu: "اور اچھے عمل اور برے عمل برابر نہیں ہیں۔",
            transliteration: "Wala tastawi al-hasanatu wala as-sayyi-ah",
            from: "Surah Fussilat, 41:34",
            title: content[2].title,
            color: content[2].color
        },
        {
            arabic: "ادْفَعْ بِالَّتِي هِيَ أَحْسَنُ السَّيِّئَةَ",
            translation: "Repel [evil] by that [deed] which is better.",
            urdu: "بدی کو اچھے عمل سے روکو۔",
            transliteration: "Idfa' billatee hiya ahsanu as-sayyi-ata",
            from: "Surah Al-Mu’minun, 23:96",
            title: content[2].title,
            color: content[2].color
        },
        {
            arabic: "فَاعْفُ عَنْهُمْ وَاسْتَغْفِرْ لَهُمْ",
            translation: "So pardon them and ask forgiveness for them.",
            urdu: "تو انہیں معاف کردو اور ان کے لیے مغفرت طلب کرو۔",
            transliteration: "Fa'fu 'anhum wastaghfir lahum",
            from: "Surah Al-Imran, 3:159",
            title: content[2].title,
            color: content[2].color
        },
        {
            arabic: "خُذِ الْعَفْوَ وَأْمُرْ بِالْعُرْفِ وَأَعْرِضْ عَنِ الْجَاهِلِينَ",
            translation: "Show forgiveness, enjoin what is good, and turn away from the ignorant.",
            urdu: "معافی دکھاؤ، اچھے کاموں کا حکم دو اور جاہلوں سے دور رہو۔",
            transliteration: "Khudh al-'afwa wa'mur bil-'urfi wa a'ridh 'anil-jahileen",
            from: "Surah Al-A'raf, 7:199",
            title: content[2].title,
            color: content[2].color
        },
        {
            arabic: "وَأَحْسِنُوا إِنَّ اللَّهَ يُحِبُّ الْمُحْسِنِينَ",
            translation: "And do good; indeed, Allah loves the doers of good.",
            urdu: "اور اچھے کام کرو؛ بے شک اللہ اچھے کام کرنے والوں کو پسند کرتا ہے۔",
            transliteration: "Wa ahsinoo inna Allaha yuhibbul-muhsineen",
            from: "Surah Al-Baqarah, 2:195",
            title: content[2].title,
            color: content[2].color
        },
        {
            arabic: "لَا تَغْضَبْ",
            translation: "Do not get angry.",
            urdu: "غصہ نہ کرو۔",
            transliteration: "La taghdab",
            from: "Hadith (Bukhari)",
            title: content[2].title,
            color: content[2].color
        },
        {
            arabic: "فَاعْفُ عَنْهُمْ وَاصْفَحْ إِنَّ اللَّهَ يُحِبُّ الْمُحْسِنِينَ",
            translation: "So pardon them and overlook [their faults]. Indeed, Allah loves the doers of good.",
            urdu: "تو انہیں معاف کردو اور ان کی غلطیوں کو نظرانداز کردو۔ بے شک اللہ اچھے کام کرنے والوں کو پسند کرتا ہے۔",
            transliteration: "Fa'fu 'anhum wasfah inna Allaha yuhibbul-muhsineen",
            from: "Surah Al-Ma’idah, 5:13",
            title: content[2].title,
            color: content[2].color
        },
        {
            arabic: "وَالَّذِينَ يَصِلُونَ مَا أَمَرَ اللَّهُ بِهِ أَن يُوصَلَ وَيَخْشَوْنَ رَبَّهُمْ وَيَخَافُونَ سُوءَ الْحِسَابِ",
            translation: "And those who join that which Allah has ordered to be joined and fear their Lord and are afraid of the evil of [their] account.",
            urdu: "اور جو وہ چیزیں جو اللہ نے جوڑنے کا حکم دیا ہے جوڑتے ہیں اور اپنے رب سے ڈرتے ہیں اور اپنے حساب کے برے انجام سے خوفزدہ ہوتے ہیں۔",
            transliteration: "Wallatheena yasiloona ma amara Allahu bihi an yoosala wayakhshawna rabbahum wayakhawfoona soo-a al-hisab",
            from: "Surah Ar-Ra’d, 13:21",
            title: content[2].title,
            color: content[2].color
        },
        {
            arabic: "وَلَا تَسْتَوِي الْحَسَنَةُ وَالَّسَيِّئَةُ",
            translation: "And not equal are the good deed and the bad.",
            urdu: "اور اچھے اور برے عمل برابر نہیں ہیں۔",
            transliteration: "Wala tastawi al-hasanatu wal-sayy-i-at",
            from: "Surah Fussilat, 41:34",
            title: content[2].title,
            color: content[2].color
        },
        {
            arabic: "وَقُلْ رَبُّ أَعُوذُ بِكَ مِنْ هَمَزَاتِ الشَّيَاطِينِ",
            translation: "And say, 'My Lord, I seek refuge in You from the whisperings of the devils.'",
            urdu: "اور کہو، 'اے میرے رب، میں شیطانوں کی سرگوشیوں سے تیری پناہ مانگتا ہوں۔'",
            transliteration: "Wa qul rabbu a'udhu bika min hamazatis-shayateen",
            from: "Surah Al-Mu’minun, 23:97",
            title: content[2].title,
            color: content[2].color
        },
        {
            arabic: "إِنَّ رَحْمَتَ اللَّهِ قَرِيبٌ مِّنَ ٱلْمُحْسِنِينَ",
            translation: "Indeed, the mercy of Allah is near to the doers of good.",
            urdu: "یقیناً اللہ کی رحمت اچھے کام کرنے والوں کے قریب ہے۔",
            transliteration: "Inna rahmat Allahi qareebun minal-muhsineen",
            from: "Surah Al-A'raf, 7:56",
            title: content[2].title,
            color: content[2].color
        }
    );


    // Anxiety (Adding more short ayats)
    papers.push(
        {
            arabic: "الَّذِينَ آمَنُوا وَتَطْمَئِنُّ قُلُوبُهُم بِذِكْرِ اللَّهِ ۗ أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ",
            translation: "Those who have believed and whose hearts are assured by the remembrance of Allah. Unquestionably, by the remembrance of Allah hearts are assured.",
            urdu: "وہ لوگ جو ایمان لائے اور جن کے دل اللہ کی یاد سے سکون پاتے ہیں۔ بلا شک اللہ کی یاد سے دل سکون پاتے ہیں۔",
            transliteration: "Allatheena amanoo watatmainnu quloobuhum bithikri Allahi ala bithikri Allahi tatmainnu alquloobu",
            from: "Surah Ar-Ra’d, 13:28",
            title: content[3].title,
            color: content[3].color
        },
        {
            arabic: "لَا تَحْزَنْ إِنَّ اللَّهَ مَعَنَا",
            translation: "Do not grieve; indeed Allah is with us.",
            urdu: "غم نہ کرو؛ بے شک اللہ ہمارے ساتھ ہے۔",
            transliteration: "La tahzan innallaha ma'ana",
            from: "Surah At-Tawbah, 9:40",
            title: content[3].title,
            color: content[3].color
        },
        {
            arabic: "قُل لَّن يُصِيبَنَا إِلَّا مَا كَتَبَ ٱللَّهُ لَنَا",
            translation: "Say, 'Never will we be struck except by what Allah has decreed for us.'",
            urdu: "کہو، 'ہمیں کبھی بھی وہ نہیں پہنچے گا جو اللہ نے ہمارے لیے لکھا ہے۔'",
            transliteration: "Qul lan yusibana illa ma kataba Allahu lana",
            from: "Surah At-Tawbah, 9:51",
            title: content[3].title,
            color: content[3].color
        },
        {
            arabic: "إِنَّ رَبَّكَ لَبِٱلْمِرْصَادِ",
            translation: "Indeed, your Lord is in observation.",
            urdu: "بیشک، تمہارا رب نگرانی کر رہا ہے۔",
            transliteration: "Inna rabbaka labilmirsaad",
            from: "Surah Al-Fajr, 89:14",
            title: content[3].title,
            color: content[3].color
        },
        {
            arabic: "إِنَّ ٱللَّهَ كَانَ عَلَيْكُمْ رَقِيبًۭا",
            translation: "Indeed, Allah is ever, over you, an Observer.",
            urdu: "بیشک اللہ تم پر ہمیشہ نگرانی کرنے والا ہے۔",
            transliteration: "Inna Allaha kana 'alaykum raqeeba",
            from: "Surah An-Nisa, 4:1",
            title: content[3].title,
            color: content[3].color
        },
        {
            arabic: "لَا تَحْزَنْ إِنَّ اللَّهَ مَعَنَا",
            translation: "Do not grieve; indeed Allah is with us.",
            urdu: "غم نہ کرو؛ بے شک اللہ ہمارے ساتھ ہے۔",
            transliteration: "La tahzan inna Allaha ma'ana",
            from: "Surah At-Tawbah, 9:40",
            title: content[3].title,
            color: content[3].color
        },
        {
            arabic: "فَاصْبِرْ صَبْرًا جَمِيلًا",
            translation: "So be patient with gracious patience.",
            urdu: "پس تم حسن صبر کے ساتھ صبر کرو۔",
            transliteration: "Fasbir sabran jameela",
            from: "Surah Al-Ma'arij, 70:5",
            title: content[3].title,
            color: content[3].color
        },
        {
            arabic: "إِنَّ مَعَ الْعُسْرِ يُسْرًا",
            translation: "Indeed, with hardship [will be] ease.",
            urdu: "یقیناً، مشکل کے ساتھ آسانی ہوگی۔",
            transliteration: "Inna ma'al 'usri yusra",
            from: "Surah Ash-Sharh, 94:6",
            title: content[3].title,
            color: content[3].color
        },
        {
            arabic: "فَإِنَّ مَعَ الْعُسْرِ يُسْرًا",
            translation: "For indeed, with hardship [will be] ease.",
            urdu: "یقیناً، مشکل کے ساتھ آسانی ہوگی۔",
            transliteration: "Fa-inna ma'al 'usri yusra",
            from: "Surah Ash-Sharh, 94:7",
            title: content[3].title,
            color: content[3].color
        },
        {
            arabic: "رَّبِّ اشْرَحْ لِي صَدْرِي",
            translation: "My Lord, expand for me my breast.",
            urdu: "میرے رب، میرے سینے کو کشادہ کر دے۔",
            transliteration: "Rabbi ishrah lee sadree",
            from: "Surah Ta-Ha, 20:25",
            title: content[3].title,
            color: content[3].color
        },
        {
            arabic: "وَيَسِّرْ لِي أَمْرِي",
            translation: "And ease for me my task.",
            urdu: "اور میرے کام کو آسان کر دے۔",
            transliteration: "Wa yassir lee amree",
            from: "Surah Ta-Ha, 20:26",
            title: content[3].title,
            color: content[3].color
        },
        {
            arabic: "وَاحْلُلْ عُقْدَةً مِّن لِّسَانِي",
            translation: "And untie the knot from my tongue.",
            urdu: "اور میری زبان کی گرہ کو کھول دے۔",
            transliteration: "Wahlul 'uqdatam mil-lisani",
            from: "Surah Ta-Ha, 20:27",
            title: content[3].title,
            color: content[3].color
        },
        {
            arabic: "يُرِيدُ اللَّهُ بِكُمُ الْيُسْرَ",
            translation: "Allah intends for you ease.",
            urdu: "اللہ تمہارے لیے آسانی چاہتا ہے۔",
            transliteration: "Yureedu Allahu bikumul yusra",
            from: "Surah Al-Baqarah, 2:185",
            title: content[3].title,
            color: content[3].color
        },
        {
            arabic: "لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا",
            translation: "Allah does not burden a soul beyond that it can bear.",
            urdu: "اللہ کسی جان کو اس کی طاقت سے زیادہ تکلیف نہیں دیتا۔",
            transliteration: "La yukallifu Allahu nafsan illa wus'aha",
            from: "Surah Al-Baqarah, 2:286",
            title: content[3].title,
            color: content[3].color
        },
        {
            arabic: "إِنَّ اللَّهَ مَعَ الصَّابِرِينَ",
            translation: "Indeed, Allah is with the patient.",
            urdu: "بیشک اللہ صبر کرنے والوں کے ساتھ ہے۔",
            transliteration: "Inna Allaha ma'a as-sabireen",
            from: "Surah Al-Baqarah, 2:153",
            title: content[3].title,
            color: content[3].color
        },
        {
            arabic: "فَإِنَّ مَعَ الْعُسْرِ يُسْرًا",
            translation: "For indeed, with hardship [will be] ease.",
            urdu: "یقیناً، مشکل کے ساتھ آسانی ہوگی۔",
            transliteration: "Fa-inna ma'al 'usri yusra",
            from: "Surah Ash-Sharh, 94:6",
            title: content[3].title,
            color: content[3].color
        },
        {
            arabic: "إِنَّ مَعَ الْعُسْرِ يُسْرًا",
            translation: "Indeed, with hardship [will be] ease.",
            urdu: "یقیناً، مشکل کے ساتھ آسانی ہوگی۔",
            transliteration: "Inna ma'al 'usri yusra",
            from: "Surah Ash-Sharh, 94:7",
            title: content[3].title,
            color: content[3].color
        },
        {
            arabic: "فَإِنَّ مَعَ الْعُسْرِ يُسْرًا",
            translation: "Indeed, with hardship there is ease.",
            urdu: "یقیناً، مشکل کے ساتھ آسانی ہوگی۔",
            transliteration: "Fa-inna ma'al 'usri yusra",
            from: "Surah Ash-Sharh, 94:8",
            title: content[3].title,
            color: content[3].color
        }
    );


    // Desiring (Adding more short ayats)
    papers.push(
        {
            arabic: "وَفِي السَّمَاءِ رِزْقُكُمْ وَمَا تُوعَدُونَ",
            translation: "And in the heaven is your provision and whatever you are promised.",
            urdu: "اور آسمان میں تمہارا رزق اور جو تم سے وعدہ کیا گیا ہے۔",
            transliteration: "Wa fee as-samaa’i rizqukum wa ma too’adoon",
            from: "Surah Adh-Dhariyat, 51:22",
            title: content[4].title,
            color: content[4].color
        },
        {
            arabic: "وَمَن يَتَّقِ ٱللَّهَ يَجْعَل لَّهُۥ مَخْرَجًۭا ٢ وَيَرْزُقْهُ مِنْ حَيْثُ لَا يَحْتَسِبُ",
            translation: "And whoever fears Allah - He will make for him a way out. And will provide for him from where he does not expect.",
            urdu: "اور جو اللہ سے ڈرتا ہے، اللہ اس کے لئے نکلنے کا راستہ بنا دیتا ہے اور اسے وہاں سے روزی دیتا ہے جہاں وہ گمان نہیں کرتا۔",
            transliteration: "Wa man yattaqillaha yaj’al lahu makhraja. Wayarzuqhu min haythu la yahtasib",
            from: "Surah At-Talaq, 65:2-3",
            title: content[4].title,
            color: content[4].color
        },
        {
            arabic: "وَسَارِعُوا۟ إِلَىٰ مَغْفِرَةٍۢ مِّن رَّبِّكُمْ وَجَنَّةٍ عَرْضُهَا السَّمَاوَاتُ وَالْأَرْضُ أُعِدَّتْ لِلْمُتَّقِينَ",
            translation: "And hasten to forgiveness from your Lord and a garden as wide as the heavens and earth, prepared for the righteous.",
            urdu: "اور اپنے رب کی مغفرت کی طرف جلدی کرو اور ایک باغ کی طرف جو زمین اور آسمان کی وسعت کا حامل ہے، جو پرہیزگاروں کے لیے تیار کیا گیا ہے۔",
            transliteration: "Wasari'oo ila maghfiratin min rabbikum wa jannatin 'arduha al-samawatu wa al-ardu o'iddat lil-muttaqeen",
            from: "Surah Al-Imran, 3:133",
            title: content[4].title,
            color: content[4].color
        },
        {
            arabic: "إِنَّ ٱلْإِنسَٰنَ لِرَبِّهِۦ لَكَنُودٌ",
            translation: "Indeed mankind, to his Lord, is ungrateful.",
            urdu: "بے شک انسان اپنے رب کا نا شکر گزار ہے۔",
            transliteration: "Inna al-insana lirabbihi lakanood",
            from: "Surah Al-Adiyat, 100:6",
            title: content[4].title,
            color: content[4].color
        },
        {
            arabic: "فَٱلْتَقَى ٱلْمَآءُ عَلَىٰٓ أَمْرٍۢ قَدْ قُدِرَ",
            translation: "And the water was gathered according to a measure already decreed.",
            urdu: "اور پانی ایک مقدر معاملے کے تحت جمع کیا گیا۔",
            transliteration: "Faltaqa alma'u 'ala amrin qad qudir",
            from: "Surah Al-Qamar, 54:12",
            title: content[4].title,
            color: content[4].color
        },
        {
            arabic: "وَمَا أُمِرُوا إِلَّا لِيَعْبُدُوا اللَّهَ مُخْلِصِينَ لَهُ الدِّينَ",
            translation: "And they were not commanded except to worship Allah, [being] sincere to Him in religion.",
            urdu: "اور انہیں تو بس یہ حکم دیا گیا ہے کہ اللہ کی عبادت کریں، اسی کے لئے دین کو خالص کرتے ہوئے۔",
            transliteration: "Wama umiroo illa liya'budoo Allaha mukhliseena lahud-deen",
            from: "Surah Al-Bayyinah, 98:5",
            title: content[4].title,
            color: content[4].color
        },
        {
            arabic: "وَمِنَ النَّاسِ مَن يَتَّخِذُ مِن دُونِ اللَّهِ أَندَادًا يُحِبُّونَهُمْ كَحُبِّ اللَّهِ",
            translation: "And of the people are some who take other than Allah as equals [to Him]. They love them as they should love Allah.",
            urdu: "اور لوگوں میں سے کچھ ایسے ہیں جو اللہ کے سوا دوسروں کو شریک بناتے ہیں اور انہیں اللہ کی طرح محبت کرتے ہیں۔",
            transliteration: "Wamina annasi man yattakhithu min dooni Allahi andadan yuhibboonahum kahubbillahi",
            from: "Surah Al-Baqarah, 2:165",
            title: content[4].title,
            color: content[4].color
        },
        {
            arabic: "يَا أَيُّهَا الَّذِينَ آمَنُوا اتَّقُوا اللَّهَ وَابْتَغُوا إِلَيْهِ الْوَسِيلَةَ",
            translation: "O you who have believed, fear Allah and seek the means [of nearness] to Him.",
            urdu: "اے ایمان والو! اللہ سے ڈرو اور اس کے قریب ہونے کا ذریعہ تلاش کرو۔",
            transliteration: "Ya ayyuha allatheena amanoo ittaqoo Allaha wabtaghoo ilayhi alwaseelata",
            from: "Surah Al-Ma'idah, 5:35",
            title: content[4].title,
            color: content[4].color
        },
        {
            arabic: "وَٱلَّذِينَ ءَامَنُوا۟ أَشَدُّ حُبًّۭا لِّلَّهِ",
            translation: "But those who believe are stronger in love for Allah.",
            urdu: "اور جو لوگ ایمان لائے ہیں، وہ اللہ کی محبت میں بہت زیادہ ہیں۔",
            transliteration: "Wallatheena amanoo ashaddu hubban lillah",
            from: "Surah Al-Baqarah, 2:165",
            title: content[4].title,
            color: content[4].color
        },
        {
            arabic: "قُلْ إِن كُنتُمْ تُحِبُّونَ اللَّهَ فَاتَّبِعُونِي يُحْبِبْكُمُ اللَّهُ",
            translation: "Say, [O Muhammad], 'If you should love Allah, then follow me, [so] Allah will love you.'",
            urdu: "کہو، اگر تم اللہ سے محبت رکھتے ہو تو میری پیروی کرو، اللہ تم سے محبت کرے گا۔",
            transliteration: "Qul in kuntum tuhibboona Allaha fattabi'ooni yuhbibkumu Allah",
            from: "Surah Aal-E-Imran, 3:31",
            title: content[4].title,
            color: content[4].color
        },
        {
            arabic: "وَمَن يَطِعِ اللَّهَ وَرَسُولَهُ يُدْخِلْهُ جَنَّاتٍ تَجْرِي مِن تَحْتِهَا الْأَنْهَارُ",
            translation: "And whoever obeys Allah and His Messenger - He will admit him to gardens beneath which rivers flow.",
            urdu: "اور جو اللہ اور اس کے رسول کی اطاعت کرے، اسے باغات میں داخل کرے گا جن کے نیچے نہریں بہتی ہیں۔",
            transliteration: "Waman yuti'i Allaha warasoolahu yudkhilhu jannatin tajree min tahtiha al-anharu",
            from: "Surah An-Nisa, 4:13",
            title: content[4].title,
            color: content[4].color
        },
        {
            arabic: "فَاذْكُرُونِي أَذْكُرْكُمْ",
            translation: "So remember Me; I will remember you.",
            urdu: "بس مجھے یاد کرو، میں تمہیں یاد کروں گا۔",
            transliteration: "Fathkuroonee athkurkum",
            from: "Surah Al-Baqarah, 2:152",
            title: content[4].title,
            color: content[4].color
        },
        {
            arabic: "يَا أَيُّهَا الَّذِينَ آمَنُوا اتَّقُوا اللَّهَ وَقُولُوا قَوْلًا سَدِيدًا",
            translation: "O you who have believed, fear Allah and speak words of appropriate justice.",
            urdu: "اے ایمان والو! اللہ سے ڈرو اور صحیح بات کہو۔",
            transliteration: "Ya ayyuha allatheena amanoo ittaqoo Allaha waqooloo qawlan sadeedan",
            from: "Surah Al-Ahzab, 33:70",
            title: content[4].title,
            color: content[4].color
        },
        {
            arabic: "وَلِكُلٍّۢ وِجْهَةٌ هُوَ مُوَلِّيهَا فَٱسْتَبِقُوا۟ ٱلْخَيْرَٰتِ",
            translation: "For each [religion] is a direction toward which it faces. So race to [all that is] good.",
            urdu: "اور ہر ایک کا ایک رخ ہے جس کی طرف وہ رخ کرتا ہے، تو نیکیوں کی طرف جلدی کرو۔",
            transliteration: "Walikullin wijhatun huwa muwalleeha fastabiqoo alkhayrat",
            from: "Surah Al-Baqarah, 2:148",
            title: content[4].title,
            color: content[4].color
        },
        {
            arabic: "وَمَا تُقَدِّمُوا لِأَنفُسِكُم مِّنْ خَيْرٍ تَجِدُوهُ عِندَ اللَّهِ",
            translation: "And whatever good you put forward for yourselves - you will find it with Allah.",
            urdu: "اور جو بھلا تم اپنے لئے آگے بڑھاؤ گے، اسے اللہ کے پاس پاؤ گے۔",
            transliteration: "Wama tuqaddimoo li-anfusikum min khayrin tajidoohu 'inda Allah",
            from: "Surah Al-Baqarah, 2:110",
            title: content[4].title,
            color: content[4].color
        },
        {
            arabic: "وَمَن يُؤْمِنۢ بِاللَّهِ وَيَعْمَلْ صَـٰلِحًۭا يُدْخِلْهُ جَنَّـٰتٍۢ تَجْرِى مِن تَحْتِهَا ٱلْأَنْهَـٰرُ",
            translation: "And whoever believes in Allah and does righteousness - He will admit him into gardens beneath which rivers flow.",
            urdu: "اور جو اللہ پر ایمان لاتا ہے اور نیک عمل کرتا ہے، اللہ اسے باغ میں داخل کرے گا جو کہ نیچے نہریں بہتی ہیں۔",
            transliteration: "Waman yu'min billahi waya'mal salihan yudkhilhu jannatin tajree min tahtiha al-anhar",
            from: "Surah Al-Ma'idah, 5:9",
            title: content[4].title,
            color: content[4].color
        },
        {
            arabic: "فَاسْتَبِقُوا الْخَيْرَاتِ",
            translation: "So race to [all that is] good.",
            urdu: "پس نیکیوں کی طرف جلدی کرو۔",
            transliteration: "Fastabiqoo alkhayrat",
            from: "Surah Al-Baqarah, 2:148",
            title: content[4].title,
            color: content[4].color
        },
        {
            arabic: "يَا أَيُّهَا الَّذِينَ آمَنُوا كُونُوا قَوَّامِينَ لِلَّهِ شُهَدَاءَ بِالْقِسْطِ",
            translation: "O you who have believed, be persistently standing firm for Allah, witnesses in justice.",
            urdu: "اے ایمان والو! اللہ کے لئے قائم رہو اور انصاف کے ساتھ گواہی دو۔",
            transliteration: "Ya ayyuha allatheena amanoo koonoo qawwameena lillahi shuhadaa'a bilqist",
            from: "Surah Al-Ma'idah, 5:8",
            title: content[4].title,
            color: content[4].color
        },
        {
            arabic: "وَأَنفِقُوا فِي سَبِيلِ اللَّهِ",
            translation: "And spend in the way of Allah.",
            urdu: "اور اللہ کی راہ میں خرچ کرو۔",
            transliteration: "Waanfiqoo fee sabeeli Allahi",
            from: "Surah Al-Baqarah, 2:195",
            title: content[4].title,
            color: content[4].color
        },
        {
            arabic: "وَابْتَغُوا إِلَيْهِ الْوَسِيلَةَ",
            translation: "And seek the means [of nearness] to Him.",
            urdu: "اور اللہ کے قریب ہونے کے ذرائع تلاش کرو۔",
            transliteration: "Wabtaghoo ilayhi alwaseelata",
            from: "Surah Al-Ma'idah, 5:35",
            title: content[4].title,
            color: content[4].color
        },
        {
            arabic: "يُحِبُّهُمْ وَيُحِبُّونَهُ",
            translation: "He will love them and they will love Him.",
            urdu: "اور وہ انہیں پسند کرتا ہے اور وہ بھی اسے پسند کرتے ہیں۔",
            transliteration: "Yuhibbuhum wayuhibboonahu",
            from: "Surah Al-Ma'idah, 5:54",
            title: content[4].title,
            color: content[4].color
        },
        {
            arabic: "لَا تُلْهِكُمْ أَمْوَالُكُمْ وَلَا أَوْلَادُكُمْ عَن ذِكْرِ اللَّهِ",
            translation: "Let not your wealth and your children divert you from remembrance of Allah.",
            urdu: "تمہاری دولت اور تمہیں اولاد اللہ کے ذکر سے غافل نہ کرے۔",
            transliteration: "La tulhikum amwalukum wala awladukum 'an dhikrillah",
            from: "Surah Al-Munafiqun, 63:9",
            title: content[4].title,
            color: content[4].color
        },
        {
            arabic: "فَإِذَا فَرَغْتَ فَانصَبْ",
            translation: "So when you have finished [your duties], then stand up [for worship].",
            urdu: "پس جب تم اپنی ذمہ داریوں سے فارغ ہو جاؤ تو عبادت کے لئے کھڑے ہو جاؤ۔",
            transliteration: "Faitha faraghta fansab",
            from: "Surah Ash-Sharh, 94:7",
            title: content[4].title,
            color: content[4].color
        },
        {
            arabic: "وَإِلَىٰ رَبِّكَ فَارْغَبْ",
            translation: "And to your Lord direct [your] longing.",
            urdu: "اور اپنے رب کی طرف اپنی خواہشات کو متوجہ کرو۔",
            transliteration: "Wa-ila rabbika farghab",
            from: "Surah Ash-Sharh, 94:8",
            title: content[4].title,
            color: content[4].color
        },
        {
            arabic: "قُلِ اللَّهَ أَعْبُدُ مُخْلِصًا لَّهُ دِينِي",
            translation: "Say, 'I worship Allah, [being] sincere to Him in my religion.'",
            urdu: "کہو، 'میں اللہ کی عبادت کرتا ہوں، اپنے دین کو اسی کے لئے خالص رکھتے ہوئے۔'",
            transliteration: "Quli Allaha a'budu mukhlisan lahu deeni",
            from: "Surah Az-Zumar, 39:14",
            title: content[4].title,
            color: content[4].color
        }
    );

    // Dunia (Adding more short ayats)
    papers.push(
        {
            arabic: "وَمَا ٱلْحَيَوٰةُ ٱلدُّنْيَآ إِلَّا لَهْوٌۭ وَلَعِبٌۭ",
            translation: "And the worldly life is not but amusement and diversion.",
            urdu: "اور دنیاوی زندگی تو صرف کھیل اور تماشے کے سوا کچھ نہیں۔",
            transliteration: "Wa ma alhayatu ad-dunya illa lahwun wala'ibun",
            from: "Surah Al-Ankabut, 29:64",
            title: content[5].title,
            color: content[5].color
        },
        {
            arabic: "فَمَن زُحْزِحَ عَنِ ٱلنَّارِ وَأُدْخِلَ ٱلْجَنَّةَ فَقَدْ فَازَ ۗ وَمَا ٱلْحَيَوٰةُ ٱلدُّنْيَآ إِلَّا مَتَـٰعُ ٱلْغُرُورِ",
            translation: "So whoever is removed from the Fire and admitted to Paradise has attained [his desire]. And what is the life of this world except the enjoyment of delusion.",
            urdu: "پس جو شخص آگ سے دور کیا جائے اور جنت میں داخل کیا جائے وہ کامیاب ہو گیا، اور دنیا کی زندگی تو محض فریب کا سامان ہے۔",
            transliteration: "Faman zuhzih 'ani an-nari wa'udkhilal-jannata faqad faz. Wa ma alhayatu ad-dunya illa mata'ul-ghuroor",
            from: "Surah Al-Imran, 3:185",
            title: content[5].title,
            color: content[5].color
        },
        {
            arabic: "إِنَّمَآ أَمْوَٰلُكُمْ وَأَوْلَـٰدُكُمْ فِتْنَةٌۭ ۚ وَٱللَّهُ عِندَهُۥٓ أَجْرٌ عَظِيمٌۭ",
            translation: "Your wealth and your children are but a trial, and Allah has with Him a great reward.",
            urdu: "تمہاری دولت اور تمہارے بچے تو بس ایک امتحان ہیں اور اللہ کے پاس بڑا انعام ہے۔",
            transliteration: "Innama amwalukum wa awladukum fitnatun. Wallahu 'indahu ajrun 'azim",
            from: "Surah At-Taghabun, 64:15",
            title: content[5].title,
            color: content[5].color
        },
        {
            arabic: "يَـٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُوا۟ لَا تُلْهِكُمْ أَمْوَٰلُكُمْ وَلَآ أَوْلَـٰدُكُمْ عَن ذِكْرِ ٱللَّهِ ۚ وَمَن يَفْعَلْ ذَٰلِكَ فَأُو۟لَـٰٓئِكَ هُمُ ٱلْخَـٰسِرُونَ",
            translation: "O you who have believed, let not your wealth and your children divert you from remembrance of Allah. And whoever does that - then those are the losers.",
            urdu: "اے ایمان والو! تمہاری دولت اور تمہارے بچے تمہیں اللہ کے ذکر سے غافل نہ کر دیں، اور جو ایسا کرے تو یقیناً وہ نقصان اٹھانے والے ہیں۔",
            transliteration: "Ya ayyuha allatheena amanoo la tulhikum amwalukum wala awladukum 'an dhikri Allah. Waman yaf'al thalika faola'ika humu alkhasiroon",
            from: "Surah Al-Munafiqun, 63:9",
            title: content[5].title,
            color: content[5].color
        },
        {
            arabic: "وَمَا هَـٰذِهِ ٱلْحَيَوٰةُ ٱلدُّنْيَآ إِلَّا لَهْوٌۭ وَلَعِبٌۭ ۚ وَإِنَّ ٱلدَّارَ ٱلْءَاخِرَةَ لَهِىَ ٱلْحَيَوَٰنُ ۚ لَوْ كَانُوا۟ يَعْلَمُونَ",
            translation: "And what is the worldly life except for amusement and diversion? But the home of the Hereafter is best for those who fear Allah, so will you not reason?",
            urdu: "دنیاوی زندگی تو صرف کھیل اور تماشا ہے، جبکہ آخرت کا گھر ہی حقیقی زندگی ہے، کاش وہ جان لیتے! ",
            transliteration: "Wa ma hathihi alhayatu ad-dunya illa lahwun wala'ibun. Wa inna addara al-akhirata lahiya alhayawan. Law kanoo ya'lamoon",
            from: "Surah Al-Ankabut, 29:64",
            title: content[5].title,
            color: content[5].color
        },
        {
            arabic: "ٱلَّذِينَ جَعَلُوا۟ ٱلْقُرْءَٰنَ عِضِينَ",
            translation: "Who made the Qur'an into portions.",
            urdu: "جو قرآن کو ٹکڑوں میں تقسیم کر دیتے ہیں۔",
            transliteration: "Allatheena ja'aloo alqur'ana 'ideen",
            from: "Surah Al-Furqan, 25:32",
            title: content[5].title,
            color: content[5].color
        },
        {
            arabic: "فَإِذَا قَضَيْتُم مَّنَـٰسِكَكُمْ فَٱذْكُرُوا۟ ٱللَّهَ كَذِكْرِكُمْ ءَابَآءَكُمْ أَوْ أَشَدَّ ذِكْرًۭا ۗ فَمِنَ ٱلنَّاسِ مَن يَقُولُ رَبَّنَآ ءَاتِنَا فِى ٱلدُّنْيَا وَمَا لَهُۥ فِى ٱلْءَاخِرَةِ مِنْ خَلَـٰقٍۢ",
            translation: "So when you have completed your rites, remember Allah like your [previous] remembrance of your fathers or with [much] greater remembrance. And among the people is he who says, 'Our Lord, give us in this world,' and he will have in the Hereafter no share.",
            urdu: "پس جب تم اپنی عبادتیں مکمل کر لو تو اللہ کو اپنے آباؤ اجداد کی طرح یاد کرو یا پھر اس سے بڑھ کر یاد کرو۔ اور لوگوں میں سے کچھ ایسے ہیں جو کہتے ہیں، 'اے ہمارے رب! ہمیں دنیا میں عطا فرما،' اور اس کے لئے آخرت میں کچھ بھی نہیں ہے۔",
            transliteration: "Fa-itha qadaytum manasikakum fathkuroo Allaha kathikrikum abaakum aw ashadda thikra. Famin an-nasi man yaqoolu rabbana atina fee ad-dunya wama lahu fee al-akhirati min khalaq",
            from: "Surah Al-Baqarah, 2:200",
            title: content[5].title,
            color: content[5].color
        },
        {
            arabic: "وَمِنْهُم مَّن يَقُولُ رَبَّنَآ ءَاتِنَا فِى ٱلدُّنْيَا حَسَنَةًۭ وَفِى ٱلْءَاخِرَةِ حَسَنَةًۭ وَقِنَا عَذَابَ ٱلنَّارِ",
            translation: "And among them are those who say, 'Our Lord, give us in this world [that which is] good and in the Hereafter [that which is] good and protect us from the punishment of the Fire.'",
            urdu: "اور ان میں سے کچھ ایسے ہیں جو کہتے ہیں، 'اے ہمارے رب! ہمیں دنیا میں بھی اچھا دے اور آخرت میں بھی اچھا دے اور ہمیں آگ کے عذاب سے بچا!'",
            transliteration: "Waminhum man yaqoolu rabbana atina fee ad-dunya hasanatan wafee al-akhirati hasanatan waqina 'athaba an-nar",
            from: "Surah Al-Baqarah, 2:201",
            title: content[5].title,
            color: content[5].color
        },
        {
            arabic: "وَمِنْهُم مَّن يَقُولُ رَبَّنَآ ءَاتِنَا فِى ٱلدُّنْيَا حَسَنَةًۭ وَفِى ٱلْءَاخِرَةِ حَسَنَةًۭ وَقِنَا عَذَابَ ٱلنَّارِ",
            translation: "And among them are those who say, 'Our Lord, give us in this world [that which is] good and in the Hereafter [that which is] good and protect us from the punishment of the Fire.'",
            urdu: "اور ان میں سے کچھ ایسے ہیں جو کہتے ہیں، 'اے ہمارے رب! ہمیں دنیا میں بھی اچھا دے اور آخرت میں بھی اچھا دے اور ہمیں آگ کے عذاب سے بچا!'",
            transliteration: "Waminhum man yaqoolu rabbana atina fee ad-dunya hasanatan wafee al-akhirati hasanatan waqina 'athaba an-nar",
            from: "Surah Al-Baqarah, 2:201",
            title: content[5].title,
            color: content[5].color
        },
        {
            arabic: "وَمِنْهُم مَّن يَقُولُ رَبَّنَآ ءَاتِنَا فِى ٱلدُّنْيَا حَسَنَةًۭ وَفِى ٱلْءَاخِرَةِ حَسَنَةًۭ وَقِنَا عَذَابَ ٱلنَّارِ",
            translation: "And among them are those who say, 'Our Lord, give us in this world [that which is] good and in the Hereafter [that which is] good and protect us from the punishment of the Fire.'",
            urdu: "اور ان میں سے کچھ ایسے ہیں جو کہتے ہیں، 'اے ہمارے رب! ہمیں دنیا میں بھی اچھا دے اور آخرت میں بھی اچھا دے اور ہمیں آگ کے عذاب سے بچا!'",
            transliteration: "Waminhum man yaqoolu rabbana atina fee ad-dunya hasanatan wafee al-akhirati hasanatan waqina 'athaba an-nar",
            from: "Surah Al-Baqarah, 2:201",
            title: content[5].title,
            color: content[5].color
        },
        {
            arabic: "وَمِنْهُم مَّن يَقُولُ رَبَّنَآ ءَاتِنَا فِى ٱلدُّنْيَا حَسَنَةًۭ وَفِى ٱلْءَاخِرَةِ حَسَنَةًۭ وَقِنَا عَذَابَ ٱلنَّارِ",
            translation: "And among them are those who say, 'Our Lord, give us in this world [that which is] good and in the Hereafter [that which is] good and protect us from the punishment of the Fire.'",
            urdu: "اور ان میں سے کچھ ایسے ہیں جو کہتے ہیں، 'اے ہمارے رب! ہمیں دنیا میں بھی اچھا دے اور آخرت میں بھی اچھا دے اور ہمیں آگ کے عذاب سے بچا!'",
            transliteration: "Waminhum man yaqoolu rabbana atina fee ad-dunya hasanatan wafee al-akhirati hasanatan waqina 'athaba an-nar",
            from: "Surah Al-Baqarah, 2:201",
            title: content[5].title,
            color: content[5].color
        },
        {
            arabic: "وَمَا ٱلْحَيَوٰةُ ٱلدُّنْيَآ إِلَّا لَعِبٌۭ وَلَهْوٌۭ ۖ وَإِنَّ ٱلدَّارَ ٱلْءَاخِرَةَ لَهِىَ ٱلْحَيَوَانُ ۚ لَوْ كَانُوا۟ يَعْلَمُونَ",
            translation: "And the worldly life is not but amusement and diversion. But the home of the Hereafter is best for those who fear Allah, so will you not reason?",
            urdu: "دنیا کی زندگی تو محض کھیل اور تماشا ہے اور آخرت کا گھر پرہیزگاروں کے لیے ہی بہتر ہے، کیا تم سوچتے نہیں؟",
            transliteration: "Wa ma alhayatu ad-dunya illa la'ibun walahwun. Wa inna addara al-akhirata lahiya alhayawan. Law kanoo ya'lamoon",
            from: "Surah Al-Ankabut, 29:64",
            title: content[5].title,
            color: content[5].color
        },
        {
            arabic: "إِنَّمَآ أَمْوَٰلُكُمْ وَأَوْلَـٰدُكُمْ فِتْنَةٌۭ ۖ وَٱللَّهُ عِندَهُۥٓ أَجْرٌ عَظِيمٌۭ",
            translation: "Your wealth and your children are but a trial, and Allah has with Him a great reward.",
            urdu: "تمہاری دولت اور تمہارے بچے تو بس ایک امتحان ہیں اور اللہ کے پاس بڑا انعام ہے۔",
            transliteration: "Innama amwalukum wa awladukum fitnatun. Wallahu 'indahu ajrun 'azim",
            from: "Surah At-Taghabun, 64:15",
            title: content[5].title,
            color: content[5].color
        },
        {
            arabic: "وَٱعْلَمُوٓا۟ أَنَّمَا ٱلْحَيَوٰةُ ٱلدُّنْيَا لَعِبٌۭ وَلَهْوٌۭ وَزِينَةٌۭ وَتَفَاخُرٌۭ بَيْنَكُمْ وَتَكَاثُرٌۭ فِى ٱلْأَمْوَٰلِ وَٱلْأَوْلَـٰدِ",
            translation: "Know that the life of this world is but amusement and diversion and adornment and boasting to one another and competition in increase of wealth and children.",
            urdu: "جان لو کہ دنیا کی زندگی صرف کھیل، تماشا، زینت، آپس میں فخر و مباہلہ اور دولت و بچوں میں مزید کی دوڑ ہے۔",
            transliteration: "I'lamoo annama alhayatu ad-dunya la'ibun walahwun wazeenatun watafakurun baynakum watakathurun fee al-amwali wal-awlad",
            from: "Surah Al-Hadid, 57:20",
            title: content[5].title,
            color: content[5].color
        },
        {
            arabic: "وَٱللَّهُ يُرِيدُ أَن يَتُوبَ عَلَيْكُمْ وَيُرِيدُ ٱلَّذِينَ يَتَّبِعُونَ ٱلشَّهَوَٰتِ أَن تَمِيلُوا۟ مَيْلًۭا عَظِيمًۭا",
            translation: "And Allah wants to accept your repentance, but those who follow [their] passions want you to digress [into] a great deviation.",
            urdu: "اللہ تمہاری توبہ کو قبول کرنا چاہتا ہے، لیکن جو لوگ خواہشات کی پیروی کرتے ہیں، وہ چاہتے ہیں کہ تم بہت بڑی انحراف کی طرف چل پڑو۔",
            transliteration: "Wallahu yureedu an yatuba 'alaykum wayureedu allatheena yattabi'oona ash-shahawati an tameeloo maylan 'atheema",
            from: "Surah An-Nisa, 4:27",
            title: content[5].title,
            color: content[5].color
        },
        {
            arabic: "وَلَا تَحْسَبَنَّ ٱلَّذِينَ كَفَرُوٓا۟ أَنَّمَا نُمْلِى لَهُمْ خَيْرٌۭ لِّأَنفُسِهِمْ ۚ إِنَّمَا نُمْلِى لَهُمْ لِيَزْدَادُوٓا۟ إِثْمًۭا ۚ وَلَهُمْ عَذَابٌۭ مُّهِينٌۭ",
            translation: "And do not think that those who disbelieve are causing delay for themselves. Rather, for them is a punishment, but for them is an appointment from which they will never find an escape.",
            urdu: "اور یہ نہ سمجھو کہ جو لوگ کافر ہیں، وہ اپنے لیے نیک عاقبت کی امید رکھتے ہیں، بلکہ ان کے لیے تو عذاب ہے اور ان کے لیے ایک وعدہ ہے جس سے وہ بھاگ نہیں سکتے۔",
            transliteration: "Wa la tahsabanna allatheena kafaroo annama numli lahum khayrun li-anfusihim. Innama numli lahum liyazdadoo ithman. Wa lahum 'athabun muheen",
            from: "Surah Al-Imran, 3:178",
            title: content[5].title,
            color: content[5].color
        },
        {
            arabic: "إِنَّمَا ٱلْمُؤْمِنُونَ ٱلَّذِينَ إِذَا ذُكِرَ ٱللَّهُ وَجِلَتْ قُلُوبُهُمْ وَإِذَا تُلِيَتْ عَلَيْهِمْ ءَايَـٰتُهُۥ زَادَتْهُمْ إِيمَـٰنًۭا وَعَلَىٰ رَبِّهِمْ يَتَوَكَّلُونَ",
            translation: "The believers are only those who, when Allah is mentioned, their hearts become fearful, and when His verses are recited to them, it increases them in faith; and upon their Lord they rely -",
            urdu: "مومن واقعی وہ ہیں کہ جب اللہ کا ذکر کیا جاتا ہے تو ان کے دل خوف سے بھر جاتے ہیں، اور جب ان پر اس کی آیتیں پڑھی جاتی ہیں تو ان کا ایمان مزید بڑھ جاتا ہے؛ اور وہ اپنے رب پر ہی بھروسہ کرتے ہیں۔",
            transliteration: "Innama almu'minoona allatheena itha thukira Allahu wajilat quloobuhum wa-itha tuliyat 'alayhim ayatuhu zadathum eemanan wa 'ala rabbihim yatawakkaloon",
            from: "Surah Al-Anfal, 8:2",
            title: content[5].title,
            color: content[5].color
        },
        {
            arabic: "كَلَّآ إِذَا دُكَّتِ ٱلْأَرْضُ دَكًّۭا دَكًّۭا وَجَآءَ رَبُّكَ وَٱلْمَلَكُ صَفًّۭا صَفًّۭا وَجِا۟ىٓءَ يَوْمَئِذٍۢ بِجَهَنَّمَ ۚ يَوْمَئِذٍۢ يَتَذَكَّرُ ٱلْإِنسَـٰنُ وَأَنَّىٰ لَهُ ٱلذِّكْرَىٰٓ",
            translation: "No! When the earth has been leveled - pounded and crushed - and your Lord has come and the angels, rank upon rank, and brought [within view], that Day, is Hell - that Day, man will remember, but what good to him will be the remembrance?",
            urdu: "ہر گز نہیں! جب زمین کو کچل دیا جائے گا - پٹھا جا رہا ہوگا - اور تمہارا رب آ جائے گا اور فرشتے رینک در رینک آئیں گے، اور اس دن جہنم منظر عام پر لائی جائے گی - اس دن انسان یاد کرے گا، لیکن اسے یاد کرنے کا کیا فائدہ؟",
            transliteration: "Kalla itha dukkat al-ardu dakkan dakka wa jaa'a rabbuka wal-malaku saffan saffa wa ji'a yawma'idhin bi-jahannama yawma'idhin yatadhakkaru al-insanu wa anna lahu ath-thikra",
            from: "Surah Al-Fajr, 89:21-23",
            title: content[5].title,
            color: content[5].color
        },
        {
            arabic: "وَٱلَّذِينَ كَفَرُوا۟ وَكَذَّبُوا۟ بِـَٔايَـٰتِنَآ أُو۟لَـٰٓئِكَ أَصْحَـٰبُ ٱلنَّارِ ۖ هُمْ فِيهَا خَـٰلِدُونَ",
            translation: "But those who disbelieved and denied Our signs - those are the companions of the Fire, abiding eternally therein;",
            urdu: "اور جو لوگ کافر ہو گئے اور ہماری آیات کی جھٹلائی، وہی جہنم کے ساتھی ہیں اور وہ وہاں ہمیشہ رہیں گے؛",
            transliteration: "Wallatheena kafaroo wakaththaboo bi-ayatina ola-ika as-habu annari hum feeha khalidoon",
            from: "Surah Al-Baqarah, 2:39",
            title: content[5].title,
            color: content[5].color
        },
        {
            arabic: "وَٱلَّذِينَ كَفَرُوا۟ بِـَٔايَـٰتِنَا وَلِقَآئِ ٱلْءَاخِرَةِ حَبِطَتْ أَعْمَـٰلُهُمْ ۚ هَلْ يُجْزَوْنَ إِلَّا مَا كَانُوا۟ يَعْمَلُونَ",
            translation: "But those who disbelieved in Our verses and the meeting of the Hereafter - those will be brought into the punishment [to remain].",
            urdu: "اور جو لوگ ہماری آیات اور آخرت کی ملاقات کو جھوٹا جانتے ہیں، ان کے اعمال برباد ہیں، کیا انہیں ان کے اعمال کے سوا کچھ اور دیا جائے گا؟",
            transliteration: "Wallatheena kafaroo bi-ayatina wiliqai al-akhirati habitat a'maluhum hal yujzawna illa ma kanoo ya'maloon",
            from: "Surah Yunus, 10:52",
            title: content[5].title,
            color: content[5].color
        },
        {
            arabic: "وَإِذَآ أَخَذْنَـٰهُم بِٱلْعَذَابِ إِذَا هُمْ يَضْطَرُّونَ",
            translation: "And when We give the people a taste of mercy after adversity has touched them, at once they conspire against Our verses. Say, 'Allah is swifter in strategy.' Indeed, Our messengers record that which you conspire",
            urdu: "اور جب ہم لوگوں کو کسی عذاب سے پہلے عظمت فرماتے ہیں تو وہ فوراً ہمارے آیات کے بارے میں چالیں چلتے ہیں۔ کہو، 'اللہ تو بہت تیزی سے چال چلتا ہے۔' بے شک، ہمارے رسول وہ سب کچھ لکھتے ہیں جو تم چالیں چلاتے ہو۔",
            transliteration: "Wa itha akhathnahum bil'athabi itha hum yadhtaroon",
            from: "Surah Yunus, 10:21",
            title: content[5].title,
            color: content[5].color
        },
        {
            arabic: "وَٱلَّذِينَ ءَامَنُوا۟ وَعَمِلُوا۟ ٱلصَّـٰلِحَـٰتِ وَءَامَنُوا۟ بِمَا نُزِّلَ عَلَىٰ مُحَمَّدٍۢ وَهُوَ ٱلْحَقُّ مِن رَّبِّهِمْ كَفَّرَ عَنْهُمْ سَيِّـَٔاتِهِمْ وَأَصْلَحَ بَالَهُمْ",
            translation: "But those who believed and did righteous deeds and believed in what was sent down upon Muhammad - and it is the truth from their Lord - He removed from them their misdeeds and corrected their condition.",
            urdu: "لیکن جو لوگ ایمان لائے اور نیک اعمال کیے اور جو کچھ محمد پر نازل کیا گیا اس پر ایمان لائے، اور یہ ان کے رب کی طرف سے حق ہے، اللہ نے ان کے تمام گناہ معاف کر دیے اور ان کے حال کو درست کیا۔",
            transliteration: "Wallatheena amanoo wa 'amiloo assalihati wa amanoo bima nuzzila 'ala muhammadin wahuwa alhaqqu min rabbihim kaffara 'anhum sayyi'atihim wa aslaha balaahum",
            from: "Surah Muhammad, 47:2",
            title: content[5].title,
            color: content[5].color
        }
    );

    // Jannah (Adding more short ayats)
    papers.push(
        {
            arabic: "سَلَـٰمٌۭ قَوْلًۭا مِّن رَّبٍّۢ رَّحِيمٍۢ",
            translation: "Peace, a word from a Merciful Lord.",
            urdu: "سلام، ایک مہربان رب کی طرف سے ایک کلمہ۔",
            transliteration: "Salamun qawlan min rabbin raheem",
            from: "Surah Yasin, 36:58",
            title: content[6].title,
            color: content[6].color
        },
        {
            arabic: "وَٱلَّذِينَ ءَامَنُوا۟ وَعَمِلُوا۟ ٱلصَّـٰلِحَـٰتِ لَا نُكَلِّفُ نَفْسًا إِلَّا وُسْعَهَآ ۖ أُو۟لَـٰٓئِكَ أَصْحَـٰبُ ٱلْجَنَّةِ ۖ هُمْ فِيهَا خَـٰلِدُونَ",
            translation: "But those who believed and did righteous deeds - We charge no soul except [within] its capacity. Those are the companions of Paradise; they will abide therein eternally.",
            urdu: "لیکن جو لوگ ایمان لائے اور نیک اعمال کیے - ہم کسی جان کو اس کی طاقت سے بڑھ کر نہیں جانچتے۔ یہی جنت کے ساتھی ہیں؛ وہ ہمیشہ اس میں رہیں گے۔",
            transliteration: "Wallatheena amanoo wa 'amiloo assalihati la nukallifu nafsan illa wus'aha olaika ashabu aljannati hum feeha khalidoon",
            from: "Surah Al-A'raf, 7:42",
            title: content[6].title,
            color: content[6].color
        },
        {
            arabic: "وَٱلَّذِينَ ٱتَّبَعُوهُم بِإِحْسَـٰنٍۢ رَّضِىَ ٱللَّهُ عَنْهُمْ وَرَضُوا۟ عَنْهُ ۚ وَأَعَدَّ لَهُمْ جَنَّـٰتٍۢ تَجْرِى تَحْتَهَا ٱلْأَنْهَـٰرُ خَـٰلِدِينَ فِيهَآ أَبَدًۭا ۚ ذَٰلِكَ ٱلْفَوْزُ ٱلْعَظِيمُ",
            translation: "And those who followed them with good conduct - Allah is pleased with them and they are pleased with Him, and He has prepared for them gardens beneath which rivers flow, wherein they will abide forever. That is the great attainment.",
            urdu: "اور جو لوگ انکی اچھی پیروی کرتے ہیں - اللہ ان سے راضی ہے اور وہ اللہ سے راضی ہیں، اور اس نے ان کے لئے ان باغات تیار کیے ہیں جن کے نیچے نہریں بہتی ہیں، جہاں وہ ہمیشہ رہیں گے۔ یہی عظیم کامیابی ہے۔",
            transliteration: "Wallatheena ittaba'oo hum bi-ihsanin radiya Allahu 'anhum waradoo 'anhu wa a'adda lahum jannatin tajree tahta hal-anharu khalideena feeha abadan thalika alfawzu al'atheem",
            from: "Surah At-Tawbah, 9:100",
            title: content[6].title,
            color: content[6].color
        },
        {
            arabic: "وَٱلَّذِينَ ءَامَنُوا۟ وَعَمِلُوا۟ ٱلصَّـٰلِحَـٰتِ لَنُدْخِلَنَّهُمْ جَنَّـٰتٍۢ تَجْرِى مِن تَحْتِهَا ٱلْأَنْهَـٰرُ خَـٰلِدِينَ فِيهَآ أَبَدًۭا ۖ وَعْدَ ٱللَّهِ حَقًّۭا ۚ وَمَنْ أَصْدَقُ مِنَ ٱللَّهِ قِيلًۭا",
            translation: "But those who believed and did righteous deeds - We will admit them to gardens beneath which rivers flow, wherein they abide forever. For them therein are purified spouses, and We will admit them to deepening shade.",
            urdu: "لیکن جو لوگ ایمان لائے اور نیک اعمال کیے - ہم انہیں ان باغات میں داخل کریں گے جہاں نہریں بہتی ہیں، جہاں وہ ہمیشہ رہیں گے۔ ان کے لئے وہاں پاکیزہ بیویاں ہوں گی، اور ہم انہیں گہری سایوں میں داخل کریں گے۔",
            transliteration: "Wallatheena amanoo wa 'amiloo assalihati lanudkhilannahum jannatin tajree min tahtiha al-anharu khalideena feeha abadan wa'da Allahi haqqan waman asdaqo mina Allahi qeela",
            from: "Surah An-Nisa, 4:57",
            title: content[6].title,
            color: content[6].color
        },
        {
            arabic: "مَّثَلُ ٱلْجَنَّةِ ٱلَّتِى وُعِدَ ٱلْمُتَّقُونَ ۖ فِيهَآ أَنْهَـٰرٌۭ مِّن مَّآءٍ غَيْرِ ءَاسِنٍۢ وَأَنْهَـٰرٌۭ مِّن لَّبَنٍۢ لَّمْ يَتَغَيَّرْ طَعْمُهُۥ وَأَنْهَـٰرٌۭ مِّنْ خَمْرٍۢ لَّذَّةٍۢ لِّلشَّـٰرِبِينَ وَأَنْهَـٰرٌۭ مِّنْ عَسَلٍۢ مُّصَفًّۭى ۖ وَلَهُمْ فِيهَا مِن كُلِّ ٱلثَّمَرَٰتِ وَمَغْفِرَةٌۭ مِّن رَّبِّهِمْ ۖ كَمَنْ هُوَ خَـٰلِدٌۭ فِى ٱلنَّارِ وَسُقُوا۟ مَآءً حَمِيمًۭا فَقَطَّعَ أَمْعَآءَهُمْ",
            translation: "The example of Paradise, which the righteous have been promised, is [that] beneath it rivers flow. Its fruit is lasting, and its shade. That is the consequence for the righteous, and the consequence for the disbelievers is the Fire.",
            urdu: "جنت کی مثال، جس کا وعدہ پرہیزگاروں سے کیا گیا ہے، یہ ہے کہ اس کے نیچے نہریں بہتی ہیں۔ اس کے پھل دائمی ہیں، اور اس کا سایہ بھی۔ یہ پرہیزگاروں کے لئے نتیجہ ہے، اور کافروں کے لئے عذاب ہے۔",
            transliteration: "Mathalu aljannati allatee wu'ida almuttaqoona feeha anharun min ma'in ghayri asinin wa anharun min labanin lam yataghayyar ta'amuhu wa anharun min khamrin ladhatin lish-sharibina wa anharun min 'asalin musaffan wa lahum feeha min kulli aththamarati wa maghfiratun min rabbihim kam man huwa khalidun fee an-nari wasuqoo ma'an hameeman faqatta'a am'ahum",
            from: "Surah Muhammad, 47:15",
            title: content[6].title,
            color: content[6].color
        },
        {
            arabic: "وَلِمَنْ خَافَ مَقَامَ رَبِّهِۦ جَنَّتَانِ",
            translation: "And for he who has feared the position of his Lord are two gardens -",
            urdu: "اور جو اپنے رب کے مقام سے ڈرا، اس کے لئے دو باغات ہیں -",
            transliteration: "Wa liman khaafa maqaama rabbihijannataan",
            from: "Surah Ar-Rahman, 55:46",
            title: content[6].title,
            color: content[6].color
        },
        {
            arabic: "وَمَن أَعْرَضَ عَن ذِكْرِى فَإِنَّ لَهُۥ مَعِيشَةًۭ ضَنكًۭا وَنَحْشُرُهُۥ يَوْمَ ٱلْقِيَـٰمَةِ أَعْمَىٰ",
            translation: "And whoever turns away from My remembrance - indeed, he will have a depressed life, and We will gather him on the Day of Resurrection blind.",
            urdu: "اور جو میرے ذکر سے منہ موڑے، بے شک اس کی معیشت تنگ ہو جائے گی، اور ہم اسے قیامت کے دن اندھا کر کے اکٹھا کریں گے۔",
            transliteration: "Wa man a'radha 'an dhikree fa-inna lahu ma'eeshatan dankan wanahshuruhu yawma alqiyamati a'ma",
            from: "Surah Ta Ha, 20:124",
            title: content[6].title,
            color: content[6].color
        },
        {
            arabic: "وَعَسَىٰٓ أَن تُحِبُّوا۟ شَيْـًۭٔا وَهُوَ شَرٌّۭ لَّكُمْ ۖ وَٱللَّهُ يَعْلَمُ وَأَنتُمْ لَا تَعْلَمُونَ",
            translation: "But perhaps you hate a thing and it is good for you; and perhaps you love a thing and it is bad for you. And Allah Knows, while you know not.",
            urdu: "شاید تم کسی چیز سے نفرت کرتے ہو حالانکہ وہ تمہارے لئے بہتر ہے؛ اور شاید تم کسی چیز سے محبت کرتے ہو حالانکہ وہ تمہارے لئے برا ہے۔ اور اللہ جانتا ہے، مگر تم نہیں جانتے۔",
            transliteration: "Wa 'asa an tuhibboo shayan wahuwa sharrun lakum wallahu ya'lamu wa antum la ta'lamoon",
            from: "Surah Al-Baqarah, 2:216",
            title: content[6].title,
            color: content[6].color
        },
        {
            arabic: "قُلْ هَلْ نُنَبِّئُكُم بِٱلْأَخْسَرِينَ أَعْمَـٰلًا",
            translation: "Say, 'Shall we inform you of the greatest losers as to [their] deeds?'",
            urdu: "کہو، 'کیا ہم تمہیں سب سے زیادہ نقصان میں رہنے والے لوگوں کی خبر دیں؟'",
            transliteration: "Qul hal nunnabbi-ukum bil-akhsareena a'mala",
            from: "Surah Al-Kahf, 18:103",
            title: content[6].title,
            color: content[6].color
        },
        {
            arabic: "وَلَا تَحْسَبَنَّ ٱلَّذِينَ قُتِلُوا۟ فِى سَبِيلِ ٱللَّهِ أَمْوَٰتًۭا ۚ بَلْ أَحْيَآءٌ عِندَ رَبِّهِمْ يُرْزَقُونَ",
            translation: "And never think of those who have been killed in the cause of Allah as dead. Rather, they are alive with their Lord, receiving provision,",
            urdu: "اور یہ نہ سمجھو کہ جو اللہ کی راہ میں مارے گئے ہیں، وہ مردہ ہیں۔ بلکہ وہ اپنے رب کے پاس زندہ ہیں، انہیں روزی دی جا رہی ہے،",
            transliteration: "Wa la tahsabanna allatheena qutiloo fee sabeeli Allahi amwatan bal ahyaoon 'inda rabbihim yurzaqoon",
            from: "Surah Aal-E-Imran, 3:169",
            title: content[6].title,
            color: content[6].color
        },
        {
            arabic: "وَيَرْزُقْهُ مِنْ حَيْثُ لَا يَحْتَسِبُ وَمَن يَتَوَكَّلْ عَلَى ٱللَّهِ فَهُوَ حَسْبُهُۥٓ ۚ إِنَّ ٱللَّهَ بَـٰلِغُ أَمْرِهِۦ ۚ قَدْ جَعَلَ ٱللَّهُ لِكُلِّ شَىْءٍۢ قَدْرًۭا",
            translation: "And He will provide for him from where he does not expect. And whoever relies upon Allah - then He is sufficient for him. Indeed, Allah will accomplish His purpose. Allah has already set for everything a [decreed] extent.",
            urdu: "اور وہ اسے وہاں سے رزق دے گا جہاں سے اسے خیال بھی نہیں ہوگا۔ اور جو اللہ پر بھروسہ کرتا ہے، تو اللہ اس کے لئے کافی ہے۔ بے شک اللہ اپنے کام کو پورا کرنے والا ہے۔ اللہ نے ہر چیز کے لئے ایک مقدر مقرر کر دیا ہے۔",
            transliteration: "Wa yarzuqhu min haythu la yahtasibu waman yatawakkal 'ala Allahi fahuwa hasbuhu innAllaha balighu amrihi qad ja'ala Allahu likulli shay'in qadran",
            from: "Surah At-Talaq, 65:3",
            title: content[6].title,
            color: content[6].color
        },
        {
            arabic: "إِنَّ ٱلَّذِينَ كَفَرُوا۟ أَعْمَـٰلُهُمْ كَسَرَابٍۢ بِقِيعَةٍۢ يَحْسَبُهُ ٱلظَّمْـَٔانُ مَآءً حَتَّىٰٓ إِذَا جَآءَهُۥ لَمْ يَجِدْهُ شَيْـًۭٔا وَوَجَدَ ٱللَّهَ عِندَهُۥ فَوَفَّىٰهُ حِسَابَهُۥ ۗ وَٱللَّهُ سَرِيعُ ٱلْحِسَابِ",
            translation: "And those who disbelieve - their deeds are like a mirage in a lowland which a thirsty one thinks is water until, when he comes to it, he finds it is nothing but finds Allah before Him, and He will pay him in full his due; and Allah is swift in account.",
            urdu: "اور جو لوگ کافر ہیں - ان کے اعمال ایسے ہیں جیسے ایک سراب، جسے ایک پیاسا پانی سمجھتا ہے، لیکن جب وہ اس کے پاس جاتا ہے تو اسے کچھ نہیں ملتا، اور وہ اللہ کو اپنے سامنے پاتا ہے، اور اللہ اسے اس کے پورے اعمال کی جزا دے گا؛ اور اللہ حساب میں بہت تیز ہے۔",
            transliteration: "Wallatheena kafaroo a'maluhum kasarabin biqi'atin yahsabuhu aththamaanu ma'an hatta itha jaa'ahu lam yajidhu shay'an wajada Allaha 'indahu fawaffahu hisabahu wallahu saree'u alhisabi",
            from: "Surah An-Noor, 24:39",
            title: content[6].title,
            color: content[6].color
        },
        {
            arabic: "وَلَا يَحْسَبَنَّ ٱلَّذِينَ كَفَرُوٓا۟ أَنَّمَا نُمْلِى لَهُمْ خَيْرٌۭ لِّأَنفُسِهِمْ ۚ إِنَّمَا نُمْلِى لَهُمْ لِيَزْدَادُوٓا۟ إِثْمًۭا ۚ وَلَهُمْ عَذَابٌۭ مُّهِينٌۭ",
            translation: "And let not those who disbelieve ever think that [because] We extend their time [of enjoyment] it is better for them. We only extend it for them so that they may increase in sin, and for them is a humiliating punishment.",
            urdu: "اور جو لوگ کافر ہیں، انہیں یہ نہ سمجھنا چاہئے کہ ہم ان کی مدت کو بڑھانے سے ان کے لئے کچھ بہتر کر رہے ہیں۔ ہم صرف انہیں بڑھا رہے ہیں تاکہ وہ مزید گناہ کریں، اور ان کے لئے ایک زلت آمیز عذاب ہے۔",
            transliteration: "Wa la yahsabanna allatheena kafaroo annama numli lahum khayrun li-anfusihim innama numli lahum liyazdadoo ithman wa lahum 'athabun muheen",
            from: "Surah Aal-E-Imran, 3:178",
            title: content[6].title,
            color: content[6].color
        },
        {
            arabic: "وَكَأَيِّن مِّن قَرْيَةٍ أَمْلَيْتُ لَهَا وَهِىَ ظَالِمَةٌۭ ثُمَّ أَخَذْتُهَا وَإِلَيَّ ٱلْمَصِيرُ",
            translation: "And how many a city was insolent toward the command of its Lord and His messengers, so We took it to severe account and punished it with a terrible punishment.",
            urdu: "اور کتنی ایسی بستیوں کو میں نے مہلت دی جو ظلم میں تھیں، پھر میں نے انہیں سختی سے پکڑا اور ان کا انجام صرف میرے پاس ہے۔",
            transliteration: "Wa kaayyin min qaryatin amlaytu laha wa hiya dhalimatan thumma akhathutuha wa ilayya almaseeru",
            from: "Surah Aal-E-Imran, 3:117",
            title: content[6].title,
            color: content[6].color
        },
        {
            arabic: "أُو۟لَـٰٓئِكَ عَلَىٰ هُدًۭى مِّن رَّبِّهِمْ ۖ وَأُو۟لَـٰٓئِكَ هُمُ ٱلْمُفْلِحُونَ",
            translation: "Those are upon [right] guidance from their Lord, and it is those who are the successful.",
            urdu: "یہ لوگ اپنے رب کی طرف سے ہدایت پر ہیں، اور یہی لوگ کامیاب ہیں۔",
            transliteration: "Olaika 'ala hudan min rabbihim wa olaika humu almuflihoon",
            from: "Surah Al-Baqarah, 2:5",
            title: content[6].title,
            color: content[6].color
        },
        {
            arabic: "وَمَن يَتَّقِ ٱللَّهَ يَجْعَل لَّهُۥ مَخْرَجًۭا وَيَرْزُقْهُ مِنْ حَيْثُ لَا يَحْتَسِبُ ۚ وَمَن يَتَوَكَّلْ عَلَى ٱللَّهِ فَهُوَ حَسْبُهُۥٓ ۚ إِنَّ ٱللَّهَ بَـٰلِغُ أَمْرِهِۦ ۚ قَدْ جَعَلَ ٱللَّهُ لِكُلِّ شَىْءٍۢ قَدْرًۭا",
            translation: "And whoever fears Allah - He will make for him a way out. And will provide for him from where he does not expect. And whoever relies upon Allah - then He is sufficient for him. Indeed, Allah will accomplish His purpose. Allah has already set for everything a [decreed] extent.",
            urdu: "اور جو اللہ سے ڈرتا ہے، اللہ اس کے لئے راہ نکال دے گا۔ اور اسے وہاں سے رزق دے گا جہاں سے اسے خیال بھی نہیں ہوگا۔ اور جو اللہ پر بھروسہ کرتا ہے، اللہ اس کے لیے کافی ہے۔ بے شک اللہ اپنے کام کو انجام دینے والا ہے۔ اللہ نے ہر چیز کے لئے ایک تقدیر مقرر کر دی ہے۔",
            transliteration: "Wa man yattaqi Allaha yaj'al lahu makhrajan wayarzuqhu min haythu la yahtasibu waman yatawakkal 'ala Allahi fahuwa hasbuhu innAllaha balighu amrihi qad ja'ala Allahu likulli shay'in qadran",
            from: "Surah At-Talaq, 65:2-3",
            title: content[6].title,
            color: content[6].color
        },
        {
            arabic: "إِنَّ ٱلَّذِينَ ءَامَنُوا۟ وَعَمِلُوا۟ ٱلصَّـٰلِحَـٰتِ لَهُمْ جَنَّـٰتُ ٱلنَّعِيمِ",
            translation: "Indeed, those who have believed and done righteous deeds - for them are the Gardens of Pleasure,",
            urdu: "بے شک، جو لوگ ایمان لائے اور نیک اعمال کیے، ان کے لئے نعمتوں کے باغات ہیں،",
            transliteration: "Inna allatheena amanoo wa 'amiloo assalihati lahum jannatu anna'eem",
            from: "Surah Luqman, 31:8",
            title: content[6].title,
            color: content[6].color
        },
        {
            arabic: "يَوْمَ يَأْتِ لَا تَكَلَّمُ نَفْسٌ إِلَّا بِإِذْنِهِۦ ۖ فَمِنْهُمْ شَقِىٌّۭ وَسَعِيدٌۭ",
            translation: "The Day it comes no soul will speak except by His permission. And among them will be the wretched and the prosperous.",
            urdu: "جس دن آئے گا، کوئی روح اس کے اذن کے بغیر بات نہیں کرے گی۔ اور ان میں سے کچھ لوگ شقی ہوں گے اور کچھ سعید۔",
            transliteration: "Yawma yati la takallamu nafsun illa bi-idhnihi faminhum shaqiyun wasa'id",
            from: "Surah An-Naml, 27:87",
            title: content[6].title,
            color: content[6].color
        },
        {
            arabic: "فَلَوْلَآ إِذَا بَلَغَتِ ٱلْحُلْقُومَ",
            translation: "So why, when [the soul] reaches the throat -",
            urdu: "پس جب [روح] حلقوم تک پہنچ جائے - تو کیوں نہیں",
            transliteration: "Falawla itha balaghati alhulqoom",
            from: "Surah Al-Waqi'ah, 56:83",
            title: content[6].title,
            color: content[6].color
        },
        {
            arabic: "وَمَن يُوقَ شُحَّ نَفْسِهِۦ فَأُو۟لَـٰٓئِكَ هُمُ ٱلْمُفْلِحُونَ",
            translation: "But as for he who feared the position of his Lord and prevented the soul from [unlawful] inclination,",
            urdu: "لیکن جو شخص اپنے رب کے مقام سے ڈرتا ہے اور اپنی روح کو [غیر قانونی] خواہشات سے روکتا ہے،",
            transliteration: "Wa man yooqa shuhha nafsihi faolaika humu almuflihoon",
            from: "Surah Ash-Shams, 91:9-10",
            title: content[6].title,
            color: content[6].color
        }
    );

    const data = () => {
        return papers.map(() => {
            const shuffle = Math.floor(Math.random() * papers.length);
            papers[shuffle].dataId = Math.floor(Math.random() * 9349037409);
            return papers[shuffle];
        });
    }


    const [shuffle, setShuffle] = useState(data());
    const [displayVisible, setDisplayVisible] = useState(false);
    const [displayData, setDisplayData] = useState(null);
    const [share, setShare] = useState('Share');

    useEffect(() => {
        const filteredSet = data().filter(obj => {
            if (filter === "all") {
                return obj.title
            } else {
                if (obj.title === filter)
                    return obj.title
            }
        })
        setShuffle(filteredSet);
    }, [filter]);

    const copyLink = () => {
        if (share === 'Share') {
            setShare('Link copied');
            setTimeout(() => {
                setShare('Share');
            }, 2000);
        }
    }

    const openPaper = (dataId) => {
        const dataObj = shuffle.find((obj) => {
            return obj.dataId === dataId;
        });
        setDisplayData(dataObj);
        setDisplayVisible(true);
    }


    return (
        <>
            <Display data={displayData} visible={displayVisible} setVisible={setDisplayVisible} />
            <div className="viewHome">
                <div className="content-flow-x">
                    <div className={`cblock ${filter === "all" ? "active" : "inactive"}`} onClick={() => { setFilter("all") }} >
                        <div className="feeling-indicator all" ></div>
                        <p>All</p>
                    </div>
                    {content.map((obj, index) => {
                        return (
                            <div className={`cblock ${filter === obj.title ? "active" : "inactive"}`} key={index} onClick={() => { setFilter(obj.title) }} >
                                <div className="feeling-indicator" style={{ backgroundColor: obj.color }}></div>
                                <p>{obj.title}</p>
                            </div>
                        )
                    })}
                </div>
                <div className="papers-grid-y">
                    {
                        shuffle.map((obj, index) => {
                            return (
                                <div className="paper-obj" key={index} style={{ backgroundColor: obj.color }} onClick={() => openPaper(obj.dataId)}></div>
                            )
                        })
                    }
                    <div className="bottom-action-bglay">
                        <div className="actions-cols">
                            <CopyToClipboard text={window.location} onCopy={copyLink}>
                                <div className="btnMask">
                                    <svg viewBox="0 0 11 11">
                                        <path d="M2.06622 6.64813C0.69981 6.30653 0.515013 4.44026 1.78789 3.83731L8.2043 0.797963C9.47806 0.194602 10.8054 1.52194 10.202 2.7957L7.16269 9.2121C6.55974 10.485 4.69347 10.3002 4.35187 8.93378L4.11302 7.97839C3.97866 7.44096 3.55904 7.02134 3.02161 6.88698L2.06622 6.64813Z" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <p>{share}</p>
                                </div>
                            </CopyToClipboard>
                            <div className="btnMask" onClick={() => { setShuffle(data()); setFilter("all") }} >
                                <svg viewBox="0 0 14 13">
                                    <path d="M1 1.60547V5.27213H4.60026" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M2.50611 8.32763C2.89517 9.4523 3.63259 10.4177 4.60725 11.0785C5.58191 11.7392 6.74102 12.0594 7.90992 11.9909C9.07882 11.9224 10.1942 11.4688 11.088 10.6986C11.9818 9.92833 12.6056 8.88311 12.8654 7.7204C13.1252 6.55769 13.0069 5.34049 12.5284 4.25219C12.0499 3.16389 11.237 2.26345 10.2124 1.68654C9.18767 1.10964 8.00664 0.887516 6.84722 1.05365C5.6878 1.21978 4.6128 1.76517 3.7842 2.60763L1 5.27207" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <p>Shuffle</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}
