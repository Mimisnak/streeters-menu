// Translations object

const translations = {
    el: {
        // Βασικά UI elements
        menu: "Μενού",
        close: "Κλείσιμο",
        back: "Επιστροφή",
        see_flavors: "Δες τις γεύσεις",
        hide_flavors: "Κρύψε τις γεύσεις",
        unavailable: "Μη διαθέσιμο",

        // Κατηγορίες
        coffee: "Καφέδες",
        beverages: "Ροφήματα",
        smoothies: "Smoothies",
        granita: "Γρανίτες",
        baguettes: "Σνακ, Μπαγκέτες & Γλυκά",
        energy: "Energy drinks",
        soft: "Αναψυκτικά",
        beer: "Μπύρες / Ποτά",
        drinks: "Ποτά σε ποτήρι",

        // Τίτλοι τμημάτων
        coffee_title: "Καφέδες",
        beverages_title: "Ροφήματα",
        smoothies_title: "Smoothies",
        granita_title: "Γρανίτες",
        baguettes_title: "Σνακ, Μπαγκέτες & Γλυκά",
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
            "Φρέντο espresso": "Φρέντο espresso",
            "Cappuccino": "Cappuccino",
            "Cappuccino latte": "Cappuccino latte",
            "Φρέντο cappuccino": "Φρέντο cappuccino",
            "Φρέντο cappuccino latte": "Φρέντο cappuccino latte",
            "Νες": "Νες",
            "Φραπές": "Φραπές",
            "Φίλτρου": "Φίλτρου",
            "Ελληνικός": "Ελληνικός"
        },

        // Descriptions / size labels used in small tags
        descriptions: {
            "διπλός: 2,00€": "διπλός: 2,00€",
            "διπλός: 2,10€": "διπλός: 2,10€",
            "διπλός: 2,20€": "διπλός: 2,20€",
            "τριπλός: 2,50€ · τετραπλός: 3,00€": "τριπλός: 2,50€ · τετραπλός: 3,00€",
            "Με αφρόγαλα: 2,00€": "Με αφρόγαλα: 2,00€",
            "Με κρέμα: 2,50€": "Με κρέμα: 2,50€",
            "καραμέλα: +0,30€ · φουντούκι: +0,30€ · φράουλα: +0,30€": "καραμέλα: +0,30€ · φουντούκι: +0,30€ · φράουλα: +0,30€",
            "Ζεστό/Κρύο": "Ζεστό/Κρύο",
            "Ζεστή/Κρύα": "Ζεστή/Κρύα",
            "Γέυσεις: Fitness bio (διαίτης με τσουκνίδα, λεμονόχορτο, ιβίσκο & μείγμα βοτάνων mate) · Τσάι μαύρο με σοκολάτα · Τσάι μαύρο με κεράσι · Τσάι μαύρο με τριαντάφυλλο · Πράσινο · Πράσινο οριεντάλ (κανέλα, γαρύφαλλο, βερύκοκο, ginger & πιπεριά) · Φρούτα του δάσους · Μέντα · Μήλο & κανέλα · Φλαμούρι · Χαμομήλι · Χρυσό μήλο (μείγμα βοτάνων, χαμομήλι, παντζάρι, μήλο, κανέλα & αμύγδαλο) · Κόκκινη πλατεία (κομμάτια μήλου, άνθη ιβίσκου, cranberry)": "Γέυσεις: Fitness bio (διαίτης με τσουκνίδα, λεμονόχορτο, ιβίσκο & μείγμα βοτάνων mate) · Τσάι μαύρο με σοκολάτα · Τσάι μαύρο με κεράσι · Τσάι μαύρο με τριαντάφυλλο · Πράσινο · Πράσινο οριεντάλ (κανέλα, γαρύφαλλο, βερύκοκο, ginger & πιπεριά) · Φρούτα του δάσους · Μέντα · Μήλο & κανέλα · Φλαμούρι · Χαμομήλι · Χρυσό μήλο (μείγμα βοτάνων, χαμομήλι, παντζάρι, μήλο, κανέλα & αμύγδαλο) · Κόκκινη πλατεία (κομμάτια μήλου, άνθη ιβίσκου, cranberry)",
            "Γεννήθηκε στη Θεσσαλονίκη, αγαπήθηκε παντού! Το τέλειο σνακ για πρωινό, για δεκατιανό, για όταν πεινάς αλλά δεν θέλεις ούτε κάτι αλμυρό, ούτε κάτι γλυκό.": "Γεννήθηκε στη Θεσσαλονίκη, αγαπήθηκε παντού! Το τέλειο σνακ για πρωινό, για δεκατιανό, για όταν πεινάς αλλά δεν θέλεις ούτε κάτι αλμυρό, ούτε κάτι γλυκό.",
            "Με καπνιστή γαλοπούλα, Philadelphia, σως Streeters & ντομάτα": "Με καπνιστή γαλοπούλα, Philadelphia, σως Streeters & ντομάτα",
            "Με ζαμπόν, gouda, σως Streeters & ντομάτα": "Με ζαμπόν, gouda, σως Streeters & ντομάτα",
            "Με σαλάμι αέρος, gouda, σως Streeters & ντομάτα": "Με σαλάμι αέρος, gouda, σως Streeters & ντομάτα",
            "Με καπνιστή γαλοπούλα, μανούρι, σως Streeters & ντομάτα": "Με καπνιστή γαλοπούλα, μανούρι, σως Streeters & ντομάτα",
            "Με στήθος κοτόπουλο, ζαμπόν, gouda, σως Streeters, ντομάτα & αγγούρι": "Με στήθος κοτόπουλο, ζαμπόν, gouda, σως Streeters, ντομάτα & αγγούρι",
            "Με λευκό τυρί, πάστα ελιάς, ντομάτα, ρίγανη & αγγούρι": "Με λευκό τυρί, πάστα ελιάς, ντομάτα, ρίγανη & αγγούρι",
            "Με καπνιστή γαλοπούλα, gouda, σως Streeters & λιαστή ντομάτα": "Με καπνιστή γαλοπούλα, gouda, σως Streeters & λιαστή ντομάτα",
            "Με Philadelphia, καπνιστή γαλοπούλα, gouda, ντοματίνια & αγγούρι": "Με Philadelphia, καπνιστή γαλοπούλα, gouda, ντοματίνια & αγγούρι",
            "Με Philadelphia, ωμοπλάτη, gouda, ντοματίνια & αγγούρι": "Με Philadelphia, ωμοπλάτη, gouda, ντοματίνια & αγγούρι",
            "Με τόνο, gouda, mexican mix λαχανικά & cocktail sauce": "Με τόνο, gouda, mexican mix λαχανικά & cocktail sauce",
            "Με στήθος κοτόπουλο, καλαμπόκι, gouda, σως Streeters, λάχανο & καρότο": "Με στήθος κοτόπουλο, καλαμπόκι, gouda, σως Streeters, λάχανο & καρότο"
        },

        // Tea flavors
        tea_flavors: {
            "• Fitness bio (διαίτης με τσουκνίδα, λεμονόχορτο, ιβίσκο & μείγμα βοτάνων mate)": "• Fitness bio (διαίτης με τσουκνίδα, λεμονόχορτο, ιβίσκο & μείγμα βοτάνων mate)",
            "• Τσάι μαύρο με σοκολάτα": "• Τσάι μαύρο με σοκολάτα",
            "• Τσάι μαύρο με κεράσι": "• Τσάι μαύρο με κεράσι",
            "• Τσάι μαύρο με τριαντάφυλλο": "• Τσάι μαύρο με τριαντάφυλλο",
            "• Πράσινο": "• Πράσινο",
            "• Πράσινο οριεντάλ (κανέλα, γαρύφαλλο, βερύκοκο, ginger & πιπεριά)": "• Πράσινο οριεντάλ (κανέλα, γαρύφαλλο, βερύκοκο, ginger & πιπεριά)",
            "• Φρούτα του δάσους": "• Φρούτα του δάσους",
            "• Μέντα": "• Μέντα",
            "• Μήλο & κανέλα": "• Μήλο & κανέλα",
            "• Φλαμούρι": "• Φλαμούρι",
            "• Χαμομήλι": "• Χαμομήλι",
            "• Χρυσό μήλο (μείγμα βοτάνων, χαμομήλι, παντζάρι, μήλο, κανέλα & αμύγδαλο)": "• Χρυσό μήλο (μείγμα βοτάνων, χαμομήλι, παντζάρι, μήλο, κανέλα & αμύγδαλο)",
            "• Κόκκινη πλατεία (κομμάτια μήλου, άνθη ιβίσκου, cranberry)": "• Κόκκινη πλατεία (κομμάτια μήλου, άνθη ιβίσκου, cranberry)"
        },

        // Syrups
        syrup_info_title: "Όλα τα σιρόπια χρεώνονται εξτρά +0,30€",
        syrup_items: {
            "Σιρόπι καραμέλα": "Σιρόπι καραμέλα",
            "Σιρόπι φουντούκι": "Σιρόπι φουντούκι",
            "Σιρόπι φράουλα": "Σιρόπι φράουλα"
        },

        // Ροφήματα
        beverages_items: {
            "Mochaccino": "Mochaccino",
            "Σοκολάτα": "Σοκολάτα",
            "Σοκολάτα Vienoua": "Σοκολάτα Vienoua",
            "Σοκολάτα λευκή": "Σοκολάτα λευκή",
            "Κακάο": "Κακάο",
            "Τσάι": "Τσάι",
            "Σπιτική λεμονάδα": "Σπιτική λεμονάδα",
            "Φυσικός χυμός πορτοκάλι": "Φυσικός χυμός πορτοκάλι",
            "Χυμός ανάμεικτος": "Χυμός ανάμεικτος",
            "Milkshake σοκολάτα": "Milkshake σοκολάτα",
            "Milkshake φράουλα": "Milkshake φράουλα",
            "Milkshake μπανάνα, καραμέλα & μπισκότο": "Milkshake μπανάνα, καραμέλα & μπισκότο",
            "Milkshake βανίλια": "Milkshake βανίλια",
            "Milkshake Ferrero Rocher": "Milkshake Ferrero Rocher",
            "Cookies cream": "Cookies cream"
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
            "Γρανίτα ρόδι": "Γρανίτα ρόδι",
            "Γρανίτα καρπούζι": "Γρανίτα καρπούζι",
            "Γρανίτα πεπόνι": "Γρανίτα πεπόνι",
            "Γρανίτα μπανάνα": "Γρανίτα μπανάνα"
        },

        // Σνακ, Μπαγκέτες & Γλυκά
        baguettes_items: {
            "Κουλούρι στρόγγυλο": "Κουλούρι στρόγγυλο",
            "Κουλούρι Bueno": "Κουλούρι Bueno",
            "Κουλούρι πραλίνα φουντουκιού": "Κουλούρι πραλίνα φουντουκιού",
            "Μπαγκέτα λευκή γαλοπούλα": "Μπαγκέτα λευκή γαλοπούλα",
            "Μπαγκέτα λευκή ζαμπόν": "Μπαγκέτα λευκή ζαμπόν",
            "Μπαγκέτα λευκή σαλάμι αέρος": "Μπαγκέτα λευκή σαλάμι αέρος",
            "Μπαγκέτα λευκή μανούρι": "Μπαγκέτα λευκή μανούρι",
            "Μπαγκέτα λευκή κοτόπουλο": "Μπαγκέτα λευκή κοτόπουλο",
            "Μπαγκέτα ολικής άλεσης χωριάτικη": "Μπαγκέτα ολικής άλεσης χωριάτικη",
            "Μπαγκέτα ολικής άλεσης γαλοπούλα": "Μπαγκέτα ολικής άλεσης γαλοπούλα",
            "Ciabatta γαλοπούλα & Philadelphia": "Ciabatta γαλοπούλα & Philadelphia",
            "Ciabatta ωμοπλάτη & Philadelphia": "Ciabatta ωμοπλάτη & Philadelphia",
            "Ciabatta τόνος": "Ciabatta τόνος",
            "Τορτίγια κοτόπουλο": "Τορτίγια κοτόπουλο",
            "Κρουασάν σοκολάτα": "Κρουασάν σοκολάτα",
            "Κρουασάν Bueno": "Κρουασάν Bueno",
            "Brioche με πραλίνα Bueno": "Brioche με πραλίνα Bueno",
            "Brioche με πραλίνα φουντουκιού": "Brioche με πραλίνα φουντουκιού"
        },

        subsection_titles: {
            "Κουλούρια": "Κουλούρια",
            "Μπαγκέτες": "Μπαγκέτες",
            "Ciabatta": "Ciabatta",
            "Τορτίγια": "Τορτίγια",
            "Κρουασάν & Γλυκά": "Κρουασάν & Γλυκά"
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
            "Fanta πορτοκάλι 330ml": "Fanta πορτοκάλι 330ml",
            "Fanta λεμονάδα 330ml": "Fanta λεμονάδα 330ml",
            "Sprite 330ml": "Sprite 330ml",
            "Σόδα 330ml": "Σόδα 330ml",
            "Ice tea λεμόνι 330ml": "Ice tea λεμόνι 330ml",
            "Ice tea ροδάκινο 330ml": "Ice tea ροδάκινο 330ml",
            "Ice tea πράσινο 330ml": "Ice tea πράσινο 330ml",
            "Tuvunu με μέλι 330ml": "Tuvunu με μέλι 330ml",
            "Νερό 500ml": "Νερό 500ml",
            "Τσάι Arizona ρόδι 330ml": "Τσάι Arizona ρόδι 330ml",
            "Τσάι Arizona πράσινο με μέλι 330ml": "Τσάι Arizona πράσινο με μέλι 330ml"
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
        see_flavors: "See flavors",
        hide_flavors: "Hide flavors",
        unavailable: "Unavailable",

        // Categories
        offers: "Offers",
        coffee: "Coffee",
        beverages: "Beverages",
        smoothies: "Smoothies",
        granita: "Granita",
        baguettes: "Snacks, Baguettes & Sweets",
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
        baguettes_title: "Snacks, Baguettes & Sweets",
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
            "Φρέντο espresso": "Freddo espresso",
            "Cappuccino": "Cappuccino",
            "Cappuccino latte": "Cappuccino latte",
            "Φρέντο cappuccino": "Freddo cappuccino",
            "Φρέντο cappuccino latte": "Freddo cappuccino latte",
            "Νες": "Nes",
            "Φραπές": "Frappe",
            "Φίλτρου": "Filter coffee",
            "Ελληνικός": "Greek Coffee"
        },

        // Descriptions English translations
        descriptions: {
            "διπλός: 2,00€": "double: 2,00€",
            "διπλός: 2,10€": "double: 2,10€",
            "διπλός: 2,20€": "double: 2,20€",
            "τριπλός: 2,50€ · τετραπλός: 3,00€": "triple: 2,50€ · quadruple: 3,00€",
            "Με αφρόγαλα: 2,00€": "With foam milk: 2,00€",
            "Με κρέμα: 2,50€": "With cream: 2,50€",
            "καραμέλα: +0,30€ · φουντούκι: +0,30€ · φράουλα: +0,30€": "caramel: +0,30€ · hazelnut: +0,30€ · strawberry: +0,30€",
            "Ζεστό/Κρύο": "Hot/Cold",
            "Ζεστή/Κρύα": "Hot/Cold",
            "Γέυσεις: Fitness bio (διαίτης με τσουκνίδα, λεμονόχορτο, ιβίσκο & μείγμα βοτάνων mate) · Τσάι μαύρο με σοκολάτα · Τσάι μαύρο με κεράσι · Τσάι μαύρο με τριαντάφυλλο · Πράσινο · Πράσινο οριεντάλ (κανέλα, γαρύφαλλο, βερύκοκο, ginger & πιπεριά) · Φρούτα του δάσους · Μέντα · Μήλο & κανέλα · Φλαμούρι · Χαμομήλι · Χρυσό μήλο (μείγμα βοτάνων, χαμομήλι, παντζάρι, μήλο, κανέλα & αμύγδαλο) · Κόκκινη πλατεία (κομμάτια μήλου, άνθη ιβίσκου, cranberry)": "Flavors: Fitness bio (diet with nettle, lemongrass, hibiscus & mate herbal blend) · Black tea with chocolate · Black tea with cherry · Black tea with rose · Green · Oriental green (cinnamon, clove, apricot, ginger & pepper) · Forest fruits · Mint · Apple & cinnamon · Linden · Chamomile · Golden apple (herbal blend, chamomile, beetroot, apple, cinnamon & almond) · Red square (apple pieces, hibiscus flowers, cranberry)",
            "Γεννήθηκε στη Θεσσαλονίκη, αγαπήθηκε παντού! Το τέλειο σνακ για πρωινό, για δεκατιανό, για όταν πεινάς αλλά δεν θέλεις ούτε κάτι αλμυρό, ούτε κάτι γλυκό.": "Born in Thessaloniki, loved everywhere! The perfect snack for breakfast, for a mid-morning bite, or when you're hungry but don't want anything salty or sweet.",
            "Με καπνιστή γαλοπούλα, Philadelphia, σως Streeters & ντομάτα": "With smoked turkey, Philadelphia, Streeters sauce & tomato",
            "Με ζαμπόν, gouda, σως Streeters & ντομάτα": "With ham, gouda, Streeters sauce & tomato",
            "Με σαλάμι αέρος, gouda, σως Streeters & ντομάτα": "With salami, gouda, Streeters sauce & tomato",
            "Με καπνιστή γαλοπούλα, μανούρι, σως Streeters & ντομάτα": "With smoked turkey, manouri, Streeters sauce & tomato",
            "Με στήθος κοτόπουλο, ζαμπόν, gouda, σως Streeters, ντομάτα & αγγούρι": "With chicken breast, ham, gouda, Streeters sauce, tomato & cucumber",
            "Με λευκό τυρί, πάστα ελιάς, ντομάτα, ρίγανη & αγγούρι": "With white cheese, olive paste, tomato, oregano & cucumber",
            "Με καπνιστή γαλοπούλα, gouda, σως Streeters & λιαστή ντομάτα": "With smoked turkey, gouda, Streeters sauce & sun-dried tomato",
            "Με Philadelphia, καπνιστή γαλοπούλα, gouda, ντοματίνια & αγγούρι": "With Philadelphia, smoked turkey, gouda, cherry tomatoes & cucumber",
            "Με Philadelphia, ωμοπλάτη, gouda, ντοματίνια & αγγούρι": "With Philadelphia, shoulder, gouda, cherry tomatoes & cucumber",
            "Με τόνο, gouda, mexican mix λαχανικά & cocktail sauce": "With tuna, gouda, mexican mix vegetables & cocktail sauce",
            "Με στήθος κοτόπουλο, καλαμπόκι, gouda, σως Streeters, λάχανο & καρότο": "With chicken breast, corn, gouda, Streeters sauce, cabbage & carrot"
        },

        // Tea flavors English translations
        tea_flavors: {
            "• Fitness bio (διαίτης με τσουκνίδα, λεμονόχορτο, ιβίσκο & μείγμα βοτάνων mate)": "• Fitness bio (diet with nettle, lemongrass, hibiscus & mate herbal blend)",
            "• Τσάι μαύρο με σοκολάτα": "• Black tea with chocolate",
            "• Τσάι μαύρο με κεράσι": "• Black tea with cherry",
            "• Τσάι μαύρο με τριαντάφυλλο": "• Black tea with rose",
            "• Πράσινο": "• Green",
            "• Πράσινο οριεντάλ (κανέλα, γαρύφαλλο, βερύκοκο, ginger & πιπεριά)": "• Oriental green (cinnamon, clove, apricot, ginger & pepper)",
            "• Φρούτα του δάσους": "• Forest fruits",
            "• Μέντα": "• Mint",
            "• Μήλο & κανέλα": "• Apple & cinnamon",
            "• Φλαμούρι": "• Linden",
            "• Χαμομήλι": "• Chamomile",
            "• Χρυσό μήλο (μείγμα βοτάνων, χαμομήλι, παντζάρι, μήλο, κανέλα & αμύγδαλο)": "• Golden apple (herbal blend, chamomile, beetroot, apple, cinnamon & almond)",
            "• Κόκκινη πλατεία (κομμάτια μήλου, άνθη ιβίσκου, cranberry)": "• Red square (apple pieces, hibiscus flowers, cranberry)"
        },

        // Syrups
        syrup_info_title: "All syrups are charged extra +0.30€",
        syrup_items: {
            "Σιρόπι καραμέλα": "Caramel syrup",
            "Σιρόπι φουντούκι": "Hazelnut syrup",
            "Σιρόπι φράουλα": "Strawberry syrup"
        },

        // Beverages
        beverages_items: {
            "Mochaccino": "Mochaccino",
            "Σοκολάτα": "Chocolate",
            "Σοκολάτα Vienoua": "Vienna chocolate",
            "Σοκολάτα λευκή": "White chocolate",
            "Κακάο": "Cocoa",
            "Τσάι": "Tea",
            "Σπιτική λεμονάδα": "Homemade lemonade",
            "Φυσικός χυμός πορτοκάλι": "Fresh orange juice",
            "Χυμός ανάμεικτος": "Mixed juice",
            "Milkshake σοκολάτα": "Chocolate milkshake",
            "Milkshake φράουλα": "Strawberry milkshake",
            "Milkshake μπανάνα, καραμέλα & μπισκότο": "Banana, caramel & biscuit milkshake",
            "Milkshake βανίλια": "Vanilla milkshake",
            "Milkshake Ferrero Rocher": "Ferrero Rocher milkshake",
            "Cookies cream": "Cookies cream"
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
            "Γρανίτα ρόδι": "Pomegranate granita",
            "Γρανίτα καρπούζι": "Watermelon granita",
            "Γρανίτα πεπόνι": "Melon granita",
            "Γρανίτα μπανάνα": "Banana granita"
        },

        // Snacks, Baguettes & Sweets
        baguettes_items: {
            "Κουλούρι στρόγγυλο": "Round koulouri",
            "Κουλούρι Bueno": "Bueno koulouri",
            "Κουλούρι πραλίνα φουντουκιού": "Hazelnut praline koulouri",
            "Μπαγκέτα λευκή γαλοπούλα": "White baguette turkey",
            "Μπαγκέτα λευκή ζαμπόν": "White baguette ham",
            "Μπαγκέτα λευκή σαλάμι αέρος": "White baguette salami",
            "Μπαγκέτα λευκή μανούρι": "White baguette manouri",
            "Μπαγκέτα λευκή κοτόπουλο": "White baguette chicken",
            "Μπαγκέτα ολικής άλεσης χωριάτικη": "Whole wheat village baguette",
            "Μπαγκέτα ολικής άλεσης γαλοπούλα": "Whole wheat turkey baguette",
            "Ciabatta γαλοπούλα & Philadelphia": "Ciabatta turkey & Philadelphia",
            "Ciabatta ωμοπλάτη & Philadelphia": "Ciabatta shoulder & Philadelphia",
            "Ciabatta τόνος": "Ciabatta tuna",
            "Τορτίγια κοτόπουλο": "Chicken tortilla",
            "Κρουασάν σοκολάτα": "Chocolate croissant",
            "Κρουασάν Bueno": "Bueno croissant",
            "Brioche με πραλίνα Bueno": "Brioche with Bueno praline",
            "Brioche με πραλίνα φουντουκιού": "Brioche with hazelnut praline"
        },

        subsection_titles: {
            "Κουλούρια": "Koulouri",
            "Μπαγκέτες": "Baguettes",
            "Ciabatta": "Ciabatta",
            "Τορτίγια": "Tortilla",
            "Κρουασάν & Γλυκά": "Croissants & Sweets"
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
            "Fanta πορτοκάλι 330ml": "Fanta Orange 330ml",
            "Fanta λεμονάδα 330ml": "Fanta Lemonade 330ml",
            "Sprite 330ml": "Sprite 330ml",
            "Σόδα 330ml": "Soda water 330ml",
            "Ice tea λεμόνι 330ml": "Lemon ice tea 330ml",
            "Ice tea ροδάκινο 330ml": "Peach ice tea 330ml",
            "Ice tea πράσινο 330ml": "Green ice tea 330ml",
            "Tuvunu με μέλι 330ml": "Tuvunu with honey 330ml",
            "Νερό 500ml": "Water 500ml",
            "Τσάι Arizona ρόδι 330ml": "Arizona Pomegranate tea 330ml",
            "Τσάι Arizona πράσινο με μέλι 330ml": "Arizona Green tea with honey 330ml"
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