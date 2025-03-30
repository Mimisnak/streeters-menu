// Translations object

const translations = {
    el: {
        // Βασικά UI elements
        menu: "Μενού",
        close: "Κλείσιμο",
        back: "Επιστροφή",

        // Κατηγορίες
        coffee: "Καφέδες",
        beverages: "Ροφήματα",
        smoothies: "Smoothies",
        granita: "Γρανίτες",
        baguettes: "Μπαγκέτες",
        energy: "Energy drinks",
        soft: "Αναψυκτικά",
        beer: "Μπύρες / Ποτά",
        drinks: "Ποτά σε ποτήρι",

        // Τίτλοι τμημάτων
        coffee_title: "Καφέδες",
        beverages_title: "Ροφήματα",
        smoothies_title: "Smoothies",
        granita_title: "Γρανίτες",
        baguettes_title: "Μπαγκέτες",
        energy_title: "Energy drinks",
        soft_title: "Αναψυκτικά",
        beer_title: "Μπύρες / Ποτά",
        drinks_title: "Ποτά σε ποτήρι",

        // Καφέδες
        coffee_items: {
            "Espresso": "Espresso",
            "Espresso lungo": "Espresso lungo",
            "Espresso Americano": "Espresso Americano",
            "Espresso macchiato": "Espresso macchiato",
            "Freddo espresso": "Freddo espresso",
            "Cappuccino": "Cappuccino",
            "Cappuccino latte": "Cappuccino latte",
            "Freddo cappuccino": "Freddo cappuccino",
            "Freddo cappuccino latte": "Freddo cappuccino latte",
            "Nes (100% Arabica)": "Nes (100% Arabica)",
            "Frappe (100% Arabica)": "Frappe (100% Arabica)",
            "Φίλτρου": "Φίλτρου",
            "Ελληνικός": "Ελληνικός"
        },

        // Ροφήματα
        beverages_items: {
            "Mochaccino": "Mochaccino",
            "Σοκολάτα": "Σοκολάτα",
            "Σοκολάτα Vienoua": "Σοκολάτα Vienoua",
            "Τσάι": "Τσάι",
            "Σπιτική λεμονάδα": "Σπιτική λεμονάδα",
            "Milkshake σοκολάτα": "Milkshake σοκολάτα",
            "Φυσικός χυμός πορτοκάλι": "Φυσικός χυμός πορτοκάλι"
        },

        // Smoothies
        smoothies_items: {
            "Smoothie mango, ροδάκινο & ανανάς": "Smoothie mango, ροδάκινο & ανανάς",
            "Smoothie ανανάς, παπάγια & mango": "Smoothie ανανάς, παπάγια & mango",
            "Smoothie φράουλα, ροδάκινο & mango": "Smoothie φράουλα, ροδάκινο & mango",
            "Smoothie φράουλα, βατόμουρο & mango": "Smoothie φράουλα, βατόμουρο & mango",
            "Smoothie φράουλα, μύρτιλο, φραγκοστάφυλλο, μαύρο κεράσι & μούρο": "Smoothie φράουλα, μύρτιλο, φραγκοστάφυλλο, μαύρο κεράσι & μούρο",
            "Smoothie σπανάκι, καρότο, πορτοκάλι & ανανάς": "Smoothie σπανάκι, καρότο, πορτοκάλι & ανανάς",
            "Smoothie καρύδα, ανανά & μπανάνα": "Smoothie καρύδα, ανανά & μπανάνα"
        },

        // Γρανίτες
        granita_items: {
            "Γρανίτα φράουλα": "Γρανίτα φράουλα",
            "Γρανίτα ανανάς": "Γρανίτα ανανάς",
            "Γρανίτα μήλο": "Γρανίτα μήλο",
            "Γρανίτα μάνγκο": "Γρανίτα μάνγκο",
            "Γρανίτα mix": "Γρανίτα mix",
            "Γρανίτα ρόδι": "Γρανίτα ρόδι"
        },

        // Μπαγκέτες
        baguettes_items: {
            "Προσωρινά μη διαθέσιμο": "Προσωρινά μη διαθέσιμο"
        },

        // Energy drinks
        energy_items: {
            "Red Bull 250ml": "Red Bull 250ml"
        },

        // Αναψυκτικά
        soft_items: {
            "Coca-Cola 330ml": "Coca-Cola 330ml",
            "Coca-Cola light 330ml": "Coca-Cola light 330ml",
            "Coca-Cola zero 330ml": "Coca-Cola zero 330ml",
            "Fanta πορτοκαλάδα με ανθρακικό 330ml": "Fanta πορτοκαλάδα με ανθρακικό 330ml",
            "Fanta λεμόνι 330ml": "Fanta λεμόνι 330ml",
            "Sprite 330ml": "Sprite 330ml",
            "Σόδα 330ml": "Σόδα 330ml",
            "Ice tea λεμόνι 330ml": "Ice tea λεμόνι 330ml",
            "Ice tea ροδάκινο 330ml": "Ice tea ροδάκινο 330ml",
            "Ice tea πράσινο 330ml": "Ice tea πράσινο 330ml",
            "green_tea_desc": "Με άρωμα λεμονιού",
            "Νερό 500ml": "Νερό 500ml"
        },

        // Μπύρες
        beer_items: {
            "Βεργίνα μπουκάλι 500ml": "Βεργίνα μπουκάλι 500ml",
            "Βεργίνα μπουκάλι weiss 500ml": "Βεργίνα μπουκάλι weiss 500ml",
            "Άλφα μπουκάλι 500ml": "Άλφα μπουκάλι 500ml",
            "Mythos μπουκάλι 500ml": "Mythos μπουκάλι 500ml",
            "Fix μπουκάλι 500ml": "Fix μπουκάλι 500ml",
            "Άμστελ μπουκάλι 500ml": "Άμστελ μπουκάλι 500ml"
        },

        // Ποτά σε ποτήρι
        drinks_items: {
            "Whiskey σε ποτήρι": "Whiskey σε ποτήρι",
            "Rum σε ποτήρι": "Rum σε ποτήρι",
            "Jagermeister σε ποτήρι": "Jagermeister σε ποτήρι",
            "Tequila σε ποτήρι": "Tequila σε ποτήρι",
            "Gin σε ποτήρι": "Gin σε ποτήρι",
            "Vodka σε ποτήρι": "Vodka σε ποτήρι",
            "Whiskey special σε ποτήρι": "Whiskey special σε ποτήρι",
            "Τσίπουρο": "Τσίπουρο",
            "Κρασί λευκό": "Κρασί λευκό",
            "Κρασί κόκκινο": "Κρασί κόκκινο"
        },

        // Footer
        address: "Διεύθυνση: Μιχαήλ Καραολή 50, Ξάνθη",
        phone: "Τηλ: 2541 025432",
        social: "Social",
        developed: "Developed by mimisnak"
    },

    en: {
        // Basic UI elements
        menu: "Menu",
        close: "Close",
        back: "Back",

        // Categories
        offers: "Offers",
        coffee: "Coffee",
        beverages: "Beverages",
        smoothies: "Smoothies",
        granita: "Granita",
        baguettes: "Baguettes",
        energy: "Energy drinks",
        soft: "Soft drinks",
        beer: "Beer / Drinks",
        drinks: "Glass drinks",

        // Section titles
        offers_title: "Offers",
        coffee_title: "Coffee",
        beverages_title: "Beverages",
        smoothies_title: "Smoothies",
        granita_title: "Granita",
        baguettes_title: "Baguettes",
        energy_title: "Energy drinks",
        soft_title: "Soft drinks",
        beer_title: "Beer / Drinks",
        drinks_title: "Glass drinks",

        // Coffee
        coffee_items: {
            "Espresso": "Espresso",
            "Espresso lungo": "Espresso lungo",
            "Espresso Americano": "Espresso Americano",
            "Espresso macchiato": "Espresso macchiato",
            "Freddo espresso": "Iced espresso",
            "Cappuccino": "Cappuccino",
            "Cappuccino latte": "Cappuccino latte",
            "Freddo cappuccino": "Iced cappuccino",
            "Freddo cappuccino latte": "Iced cappuccino latte",
            "Nes (100% Arabica)": "Nescafe (100% Arabica)",
            "Frappe (100% Arabica)": "Frappe (100% Arabica)",
            "Φίλτρου": "Filter coffee",
            "Ελληνικός": "Greek coffee"
        },

        // Beverages
        beverages_items: {
            "Mochaccino": "Mochaccino",
            "Σοκολάτα": "Hot chocolate",
            "Σοκολάτα Vienoua": "Vienna chocolate",
            "Τσάι": "Tea",
            "Σπιτική λεμονάδα": "Homemade lemonade",
            "Milkshake σοκολάτα": "Chocolate milkshake",
            "Φυσικός χυμός πορτοκάλι": "Fresh orange juice"
        },

        // Smoothies
        smoothies_items: {
            "Smoothie mango, ροδάκινο & ανανάς": "Mango, peach & pineapple smoothie",
            "Smoothie ανανάς, παπάγια & mango": "Pineapple, papaya & mango smoothie",
            "Smoothie φράουλα, ροδάκινο & mango": "Strawberry, peach & mango smoothie",
            "Smoothie φράουλα, βατόμουρο & mango": "Strawberry, raspberry & mango smoothie",
            "Smoothie φράουλα, μύρτιλο, φραγκοστάφυλλο, μαύρο κεράσι & μούρο": "Strawberry, blueberry, currant, black cherry & blackberry smoothie",
            "Smoothie σπανάκι, καρότο, πορτοκάλι & ανανάς": "Spinach, carrot, orange & pineapple smoothie",
            "Smoothie καρύδα, ανανά & μπανάνα": "Coconut, pineapple & banana smoothie"
        },

        // Granita
        granita_items: {
            "Γρανίτα φράουλα": "Strawberry granita",
            "Γρανίτα ανανάς": "Pineapple granita",
            "Γρανίτα μήλο": "Apple granita",
            "Γρανίτα μάνγκο": "Mango granita",
            "Γρανίτα mix": "Mix granita",
            "Γρανίτα ρόδι": "Pomegranate granita"
        },

        // Baguettes
        baguettes_items: {
            "Προσωρινά μη διαθέσιμο": "Temporarily unavailable"
        },

        // Energy drinks
        energy_items: {
            "Red Bull 250ml": "Red Bull 250ml"
        },

        // Soft drinks
        soft_items: {
            "Coca-Cola 330ml": "Coca-Cola 330ml",
            "Coca-Cola light 330ml": "Diet Coke 330ml",
            "Coca-Cola zero 330ml": "Coca-Cola Zero 330ml",
            "Fanta πορτοκαλάδα με ανθρακικό 330ml": "Fanta Orange 330ml",
            "Fanta λεμόνι 330ml": "Fanta Lemon 330ml",
            "Sprite 330ml": "Sprite 330ml",
            "Σόδα 330ml": "Soda water 330ml",
            "Ice tea λεμόνι 330ml": "Lemon ice tea 330ml",
            "Ice tea ροδάκινο 330ml": "Peach ice tea 330ml",
            "Ice tea πράσινο 330ml": "Green ice tea 330ml",
            "green_tea_desc": "With lemon flavor",
            "Νερό 500ml": "Water 500ml"
        },

        // Beer
        beer_items: {
            "Βεργίνα μπουκάλι 500ml": "Vergina beer 500ml",
            "Βεργίνα μπουκάλι weiss 500ml": "Vergina weiss beer 500ml",
            "Άλφα μπουκάλι 500ml": "Alfa beer 500ml",
            "Mythos μπουκάλι 500ml": "Mythos beer 500ml",
            "Fix μπουκάλι 500ml": "Fix beer 500ml",
            "Άμστελ μπουκάλι 500ml": "Amstel beer 500ml"
        },

        // Glass drinks
        drinks_items: {
            "Whiskey σε ποτήρι": "Whiskey by the glass",
            "Rum σε ποτήρι": "Rum by the glass",
            "Jagermeister σε ποτήρι": "Jagermeister by the glass",
            "Tequila σε ποτήρι": "Tequila by the glass",
            "Gin σε ποτήρι": "Gin by the glass",
            "Vodka σε ποτήρι": "Vodka by the glass",
            "Whiskey special σε ποτήρι": "Special whiskey by the glass",
            "Τσίπουρο": "Tsipouro",
            "Κρασί λευκό": "White wine",
            "Κρασί κόκκινο": "Red wine"
        },

        // Footer
        address: "Address: Michail Karaoli 50, Xanthi",
        phone: "Tel: 2541 025432",
        social: "Social",
        developed: "Developed by mimisnak"
    },

    bg: {
        // Basic UI elements
        menu: "Меню",
        close: "Затвори",
        back: "Назад",

        // Categories
        offers: "Оферти",
        coffee: "Кафе",
        beverages: "Напитки",
        smoothies: "Смутита",
        granita: "Гранита",
        baguettes: "Багети",
        energy: "Енергийни напитки",
        soft: "Безалкохолни",
        beer: "Бира / Напитки",
        drinks: "Напитки в чаша",

        // Section titles
        offers_title: "Оферти",
        coffee_title: "Кафе",
        beverages_title: "Напитки",
        smoothies_title: "Смутита",
        granita_title: "Гранита",
        baguettes_title: "Багети",
        energy_title: "Енергийни напитки",
        soft_title: "Безалкохолни",
        beer_title: "Бира / Напитки",
        drinks_title: "Напитки в чаша",

        // Coffee
        coffee_items: {
            "Espresso": "Еспресо",
            "Espresso lungo": "Еспресо лунго",
            "Espresso Americano": "Американо",
            "Espresso macchiato": "Еспресо макиато",
            "Freddo espresso": "Студено еспресо",
            "Cappuccino": "Капучино",
            "Cappuccino latte": "Капучино лате",
            "Freddo cappuccino": "Студено капучино",
            "Freddo cappuccino latte": "Студено капучино лате",
            "Nes (100% Arabica)": "Нескафе (100% Арабика)",
            "Frappe (100% Arabica)": "Фрапе (100% Арабика)",
            "Φίλτρου": "Филтърно кафе",
            "Ελληνικός": "Гръцко кафе"
        },

        // Beverages
        beverages_items: {
            "Mochaccino": "Мокачино",
            "Σοκολάτα": "Топъл шоколад",
            "Σοκολάτα Vienoua": "Виенски шоколад",
            "Τσάι": "Чай",
            "Σπιτική λεμονάδα": "Домашна лимонада",
            "Milkshake σοκολάτα": "Шоколадов милкшейк",
            "Φυσικός χυμός πορτοκάλι": "Прясно изцеден портокал"
        },

        // Smoothies
        smoothies_items: {
            "Smoothie mango, ροδάκινο & ανανάς": "Смути с манго, праскова и ананас",
            "Smoothie ανανάς, παπάγια & mango": "Смути с ананас, папая и манго",
            "Smoothie φράουλα, ροδάκινο & mango": "Смути с ягода, праскова и манго",
            "Smoothie φράουλα, βατόμουρο & mango": "Смути с ягода, малина и манго",
            "Smoothie φράουλα, μύρτιλο, φραγκοστάφυλλο, μαύρο κεράσι & μούρο": "Смути с ягода, боровинка, касис, черна череша и къпина",
            "Smoothie σπανάκι, καρότο, πορτοκάλι & ανανάς": "Смути със спанак, морков, портокал и ананас",
            "Smoothie καρύδα, ανανά & μπανάνα": "Смути с кокос, ананас и банан"
        },

        // Granita
        granita_items: {
            "Γρανίτα φράουλα": "Гранита ягода",
            "Γρανίτα ανανάς": "Гранита ананас",
            "Γρανίτα μήλο": "Гранита ябълка",
            "Γρανίτα μάνγκο": "Гранита манго",
            "Γρανίτα mix": "Гранита микс",
            "Γρανίτα ρόδι": "Гранита нар"
        },

        // Baguettes
        baguettes_items: {
            "Προσωρινά μη διαθέσιμο": "Временно недостъпно"
        },

        // Energy drinks
        energy_items: {
            "Red Bull 250ml": "Red Bull 250ml"
        },

        // Soft drinks
        soft_items: {
            "Coca-Cola 330ml": "Кока-Кола 330ml",
            "Coca-Cola light 330ml": "Кока-Кола лайт 330ml",
            "Coca-Cola zero 330ml": "Кока-Кола зеро 330ml",
            "Fanta πορτοκαλάδα με ανθρακικό 330ml": "Фанта портокал 330ml",
            "Fanta λεμόνι 330ml": "Фанта лимон 330ml",
            "Sprite 330ml": "Спрайт 330ml",
            "Σόδα 330ml": "Сода 330ml",
            "Ice tea λεμόνι 330ml": "Леден чай лимон 330ml",
            "Ice tea ροδάκινο 330ml": "Леден чай праскова 330ml",
            "Ice tea πράσινο 330ml": "Зелен леден чай 330ml",
            "green_tea_desc": "С лимонов аромат",
            "Νερό 500ml": "Вода 500ml"
        },

        // Beer
        beer_items: {
            "Βεργίνα μπουκάλι 500ml": "Бира Вергина 500ml",
            "Βεργίνα μπουκάλι weiss 500ml": "Бира Вергина вайс 500ml",
            "Άλφα μπουκάλι 500ml": "Бира Алфа 500ml",
            "Mythos μπουκάλι 500ml": "Бира Митос 500ml",
            "Fix μπουκάλι 500ml": "Бира Фикс 500ml",
            "Άμστελ μπουκάλι 500ml": "Бира Амстел 500ml"
        },

        // Glass drinks
        drinks_items: {
            "Whiskey σε ποτήρι": "Уиски на чаша",
            "Rum σε ποτήρι": "Ром на чаша",
            "Jagermeister σε ποτήρι": "Йегермайстер на чаша",
            "Tequila σε ποτήρι": "Текила на чаша",
            "Gin σε ποτήρι": "Джин на чаша",
            "Vodka σε ποτήρι": "Водка на чаша",
            "Whiskey special σε ποτήρι": "Специално уиски на чаша",
            "Τσίπουρο": "Ципуро",
            "Κρασί λευκό": "Бяло вино",
            "Κρασί κόκκινο": "Червено вино"
        },

        // Footer
        address: "Адрес: Михаил Караоли 50, Ксанти",
        phone: "Тел: 2541 025432",
        social: "Социални",
        developed: "Разработено от mimisnak"
    }
};