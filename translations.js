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
        address: "Μιχαήλ Καραολή 50, Ξάνθη",
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
        address: "Michail Karaoli 50, Xanthi",
        developed: "Developed by mimisnak"
    }
};