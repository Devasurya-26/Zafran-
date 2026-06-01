    const cats = {
            Casual: {
                label: 'Casual Wear',
                subs: ['T-Shirts', 'Oversized T-Shirts', 'Polo T-Shirts', 'Casual Shirts', 'Printed Shirts', 'Checked Shirts', 'Solid Shirts', 'Henley T-Shirts', 'Tank Tops', 'Co-ord Sets']
            },
            Bottom: {
                label: 'Bottom Wear',
                subs: ['Jeans', 'Slim Fit Jeans', 'Baggy Jeans', 'Cargo Pants', 'Joggers', 'Chinos', 'Trousers', 'Track Pants', 'Shorts', 'Linen Pants']
            },
            Ethnic: {
                label: 'Ethnic Wear',
                subs: ['Kurtas', 'Kurta Sets', 'Sherwanis', 'Nehru Jackets', 'Dhotis', 'Ethnic Jackets']
            },
            Winter: {
                label: 'Winter Wear',
                subs: ['Hoodies', 'Sweatshirts', 'Jackets', 'Bomber Jackets', 'Denim Jackets', 'Puffer Jackets', 'Blazers', 'Sweaters', 'Cardigans']
            },
            Formal: {
                label: 'Formal Wear',
                subs: ['Formal Shirts', 'Formal Pants', 'Suits', 'Waistcoats', 'Blazers', 'Ties']
            },
            Active: {
                label: 'Activewear',
                subs: ['Gym T-Shirts', 'Compression Wear', 'Sports Shorts', 'Training Joggers', 'Running Jackets', 'Dry Fit Tees']
            }
        };

        let activeCat = null;

        function openCat(key) {
            const panel = document.getElementById('subcatPanel');
            const titleEl = document.getElementById('subcatTitle');
            const chipsEl = document.getElementById('subcatChips');
            const countEl = document.getElementById('subcatCount');

            if (activeCat === key && panel.classList.contains('on')) {
                panel.classList.remove('on');
                activeCat = null;
                return;
            }
            activeCat = key;
            const c = cats[key];
            titleEl.innerHTML = c.label + ' <span>' + c.subs.length + ' categories</span>';
            chipsEl.innerHTML = c.subs.map(s =>
                `<div class="subchip" onclick="filterBySubcat('${key}','${s}',this)">${s}</div>`
            ).join('');
            panel.classList.add('on');
            panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }

        function filterBySubcat(catKey, sub, chip) {
            document.querySelectorAll('.subchip').forEach(c => c.classList.remove('on'));
            chip.classList.add('on');
            filterP(catKey, null);
            document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
            toast(`Showing: ${sub}`);
        }

        // ===== PRODUCT DATA =====
        const prods = [
            // CASUAL WEAR (10 products)
            {
                id: 1, name: 'Classic White Oversized Tee', brand: 'H&M', cat: 'Casual',
                price: 699, orig: 999, disc: 30, rating: 4.8, rev: 3240, tag: 'best',
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM9cjgcXX7qLVLNl8doxiCSc6E61IdNsD95Q&s',
                colors: ['#FFFFFF', '#000000', '#B5B5B5', '#2C4A6E'], fabric: '100% Cotton'
            },
            {
                id: 2, name: 'Polo T-Shirt — Pique Knit', brand: 'LACOSTE', cat: 'Casual',
                price: 2499, orig: 3499, disc: 29, rating: 4.7, rev: 1120, tag: '',
                img: 'https://assets.myntassets.com/assets/images/24314800/2025/4/3/570ad01d-748d-41b3-9547-7ce916cfd04e1743691354497-DAMENSCH-Solid-Textured-Polo-T-Shirts-8611743691353918-1.jpg',
                colors: ['#1B4D3E', '#8B1A1A', '#2C4A6E', '#F5F0E8'], fabric: 'Pique Cotton'
            },
            {
                id: 3, name: 'Printed Graphic Tee — Streetwear', brand: 'BEWAKOOF', cat: 'Casual',
                price: 499, orig: 799, disc: 38, rating: 4.6, rev: 5600, tag: 'sale',
                img: 'https://p16-oec-general-useast5.ttcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/28b1aff14f7a4a7e97969caf6e8f64a4~tplv-fhlh96nyum-crop-webp:1350:1800.webp?dr=12190&t=555f072d&ps=933b5bde&shp=8dbd94bf&shcp=e1be8f53&idc=useast5&from=2378011839',
                colors: ['#1A1A2E', '#8B1A1A', '#C9943A', '#1B4D3E'], fabric: 'Cotton Jersey'
            },
            {
                id: 4, name: 'Linen Casual Shirt — Slim Fit', brand: 'FABINDIA', cat: 'Casual',
                price: 1699, orig: 2299, disc: 26, rating: 4.8, rev: 2100, tag: 'new',
                img: 'https://jdcstore.com/cdn/shop/files/0W2A1954.jpg?v=1764322812&width=3000',
                colors: ['#EDD5B5', '#FFFFFF', '#2C4A6E', '#1B4D3E'], fabric: 'Premium Linen'
            },
            {
                id: 5, name: 'Checked Cotton Shirt', brand: 'PETER ENGLAND', cat: 'Casual',
                price: 1299, orig: 1799, disc: 28, rating: 4.5, rev: 1890, tag: '',
                img: 'https://assets.myntassets.com/w_412,q_50,,dpr_3,fl_progressive,f_webp/assets/images/2025/SEPTEMBER/19/z3DdKK81_b8dddeacf1084890b14950717f2a8679.jpg',
                colors: ['#2C4A6E', '#8B1A1A', '#1B4D3E', '#C9943A'], fabric: 'Cotton Poplin'
            },
            {
                id: 6, name: 'Henley T-Shirt — Waffle Knit', brand: 'MUJI', cat: 'Casual',
                price: 899, orig: 1299, disc: 31, rating: 4.7, rev: 930, tag: '',
                img: 'https://image.uniqlo.com/UQ/ST3/in/imagesgoods/435805/item/ingoods_32_435805_3x4.jpg?width=600',
                colors: ['#C9943A', '#1A1A2E', '#BEBEBE', '#EDD5B5'], fabric: 'Waffle Knit Cotton'
            },
            {
                id: 7, name: 'Co-ord Set — Tropical Print', brand: 'SNITCH', cat: 'Casual',
                price: 2199, orig: 2999, disc: 27, rating: 4.8, rev: 1450, tag: 'new',
                img: 'https://roarfox.com/cdn/shop/files/MenTropicalPrintCo-Ords_2_900x.jpg?v=1684001112',
                colors: ['#2C7A4E', '#8B4513', '#2C4A6E', '#6B3A2A'], fabric: 'Viscose Rayon'
            },
            {
                id: 8, name: 'Sleeveless Tank Top — Training', brand: 'DECATHLON', cat: 'Casual',
                price: 399, orig: 599, disc: 33, rating: 4.5, rev: 4200, tag: 'sale',
                img: 'https://images.meesho.com/images/products/850217686/xhxzu_512.webp?width=512',
                colors: ['#000000', '#FFFFFF', '#1B4D3E', '#8B1A1A'], fabric: 'Dry-fit Polyester'
            },
            {
                id: 9, name: 'Solid Oversized Hoodie — Drop Shoulder', brand: 'URBANIC', cat: 'Casual',
                price: 1599, orig: 2299, disc: 30, rating: 4.9, rev: 3800, tag: 'best',
                img: 'https://graceoutfits.com/cdn/shop/files/scr_pl_Muska-ljubicasta-klokanica-hoodie-Bolf-2009A-94199_1.jpg',
                colors: ['#C9943A', '#1A1A2E', '#8B1A1A', '#BEBEBE'], fabric: 'French Terry Cotton'
            },
            {
                id: 10, name: 'Printed Resort Shirt — Casual', brand: 'SNITCH', cat: 'Casual',
                price: 1199, orig: 1699, disc: 29, rating: 4.6, rev: 2200, tag: '',
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3NvGbwEU8nn6vFsuROjSuU7I6vEFboX05Gg&s',
                colors: ['#C9943A', '#2C4A6E', '#1B4D3E', '#8B1A1A'], fabric: 'Viscose'
            },

            // BOTTOM WEAR (10 products)
            {
                id: 11, name: 'Slim Fit Dark Wash Jeans', brand: 'LEVI\'S', cat: 'Bottom',
                price: 2999, orig: 3999, disc: 25, rating: 4.8, rev: 4100, tag: 'best',
                img: 'https://m.media-amazon.com/images/I/61Dg2S0GIxL._AC_UY350_.jpg',
                colors: ['#1A1A2E', '#4A3728', '#2C4A6E', '#7B7B7B'], fabric: '98% Cotton Denim'
            },
            {
                id: 12, name: 'Baggy Cargo Pants — Khaki', brand: 'SNITCH', cat: 'Bottom',
                img: 'https://assets.myntassets.com/assets/images/2025/SEPTEMBER/10/2eE9pVuY_f63babb8f2d84882a9c831a96971e8ad.jpg',
                price: 1799, orig: 2499, disc: 28, rating: 4.7, rev: 2890, tag: 'new',
                colors: ['#C9943A', '#1A1A2E', '#2C4A6E', '#1B4D3E'], fabric: 'Twill Cotton'
            },
            {
                id: 13, name: 'Jogger Pants — Fleece', brand: 'DECATHLON', cat: 'Bottom',
                price: 999, orig: 1499, disc: 33, rating: 4.6, rev: 6700, tag: 'sale',
                img: 'https://voilastudio.in/voilastudio_myntra/images/male_ecomm/male_ecomm/eCommerce_photography_male_trackpant&joggers_25-02-2026%20(85).webp',
                colors: ['#1A1A2E', '#BEBEBE', '#1B4D3E', '#8B1A1A'], fabric: 'Fleece Cotton Blend'
            },
            {
                id: 14, name: 'Chinos — Slim Tapered', brand: 'ZARA', cat: 'Bottom',
                price: 2499, orig: 3499, disc: 29, rating: 4.7, rev: 1560, tag: '',
                img: 'https://assets.ajio.com/medias/sys_master/root1/20251204/6h5I/6931870c720fb821d36b344a/-473Wx593H-443105253-ltgrey-MODEL.jpg',
                colors: ['#C9943A', '#EDD5B5', '#1A1A2E', '#2C4A6E'], fabric: 'Stretch Cotton'
            },
            {
                id: 15, name: 'Linen Trousers — Relaxed Fit', brand: 'FABINDIA', cat: 'Bottom',
                price: 1899, orig: 2699, disc: 30, rating: 4.8, rev: 980, tag: 'new',
                img: 'https://assets.myntassets.com/w_412,q_50,,dpr_3,fl_progressive,f_webp/assets/images/2025/JUNE/2/JlSY8ajw_ceeb5cfb7c2a4fa98f431d775355887d.jpg',
                colors: ['#EDD5B5', '#BEBEBE', '#1B4D3E', '#2C4A6E'], fabric: '100% Linen'
            },
            {
                id: 16, name: 'Baggy Jeans — Vintage Wash', brand: 'MUFTI', cat: 'Bottom',
                price: 2299, orig: 3299, disc: 30, rating: 4.7, rev: 2100, tag: '',
                img: 'https://i.pinimg.com/736x/dd/91/1b/dd911b6d90bf87c97d3049084cf8e76e.jpg',
                colors: ['#7B7B7B', '#4A3728', '#2C4A6E', '#1A1A2E'], fabric: 'Denim'
            },
            {
                id: 17, name: 'Track Pants — Active Sport', brand: 'PUMA', cat: 'Bottom',
                price: 1499, orig: 1999, disc: 25, rating: 4.6, rev: 3400, tag: 'sale',
                img: 'data:image/jpeg;base64,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',
                colors: ['#1A1A2E', '#8B1A1A', '#1B4D3E', '#C9943A'], fabric: 'Polyester Blend'
            },
            {
                id: 18, name: 'Bermuda Shorts — Printed', brand: 'SNITCH', cat: 'Bottom',
                price: 799, orig: 1199, disc: 33, rating: 4.5, rev: 2800, tag: 'sale',
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFTQaCxm-JD5ImMKEWXRjibP3iwFBCWocEUg&s',
                colors: ['#2C4A6E', '#1B4D3E', '#C9943A', '#8B1A1A'], fabric: 'Cotton'
            },
            {
                id: 19, name: 'Linen Shorts — Casual Summer', brand: 'MUJI', cat: 'Bottom',
                price: 1099, orig: 1499, disc: 27, rating: 4.7, rev: 1200, tag: '',
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfbkwAJEbEvr4AxNW6LnADrc92D8iPdk6qqQ&s',
                colors: ['#EDD5B5', '#BEBEBE', '#2C4A6E', '#1B4D3E'], fabric: 'Pure Linen'
            },
            {
                id: 20, name: 'Slim Fit Formal Trousers', brand: 'RAYMOND', cat: 'Bottom',
                price: 1999, orig: 2799, disc: 29, rating: 4.8, rev: 760, tag: '',
                img: 'data:image/jpeg;base64,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',
                colors: ['#1A1A2E', '#4A3728', '#BEBEBE', '#2C4A6E'], fabric: 'Poly-Viscose'
            },

            // ETHNIC WEAR (10 products)
            {
                id: 21, name: 'Pure Cotton Straight Kurta', brand: 'FABINDIA', cat: 'Ethnic',
                price: 1299, orig: 1799, disc: 28, rating: 4.8, rev: 3240, tag: 'best',
                img: 'https://imagescdn.jaypore.com/img/app/product/3/39732344-15292619.jpg?w=500&auto=format',
                colors: ['#C67C3C', '#1B4D3E', '#4A2E8A', '#2C4A6E'], fabric: '100% Pure Cotton'
            },
            {
                id: 22, name: 'Silk Blend Sherwani Set', brand: 'MANYAVAR', cat: 'Ethnic',
                price: 8999, orig: 13999, disc: 36, rating: 4.9, rev: 642, tag: 'new',
                img: 'https://m.media-amazon.com/images/I/71U+cSwyvCL._AC_UY350_.jpg',
                colors: ['#1A1A2E', '#8B1A1A', '#C9943A', '#2C4A2E'], fabric: 'Premium Silk Blend'
            },
            {
                id: 23, name: 'Pathani Suit — Premium Linen', brand: 'ETHNIX', cat: 'Ethnic',
                price: 2199, orig: 2999, disc: 27, rating: 4.7, rev: 890, tag: 'sale',
                img: 'https://pictures.kartmax.in/live/inside/800x800/sites/9s145MyZrWdIAwpU0JYS/product-images/cotton_printed_grey_pathani_suit_17105037979718.jpg',
                colors: ['#C9943A', '#EBEBEB', '#2C4A6E', '#6B3A2A'], fabric: 'Premium Linen'
            },
            {
                id: 24, name: 'Nehru Jacket Kurta Set', brand: 'MANYAVAR', cat: 'Ethnic',
                price: 3499, orig: 4999, disc: 30, rating: 4.9, rev: 723, tag: 'new',
                img: 'https://assets.myntassets.com/w_412,q_50,,dpr_3,fl_progressive,f_webp/assets/images/31072653/2024/10/8/f78ba2f1-782d-488f-92b6-c0f19cabbee81728388374182-KISAH-Men-Regular-Kurta--Trouser-with-Nehru-Jacket-Set-58617-1.jpg',
                colors: ['#1A1A2E', '#2C4A2E', '#8B1A1A', '#C9943A'], fabric: 'Jacquard Silk'
            },
            {
                id: 25, name: 'Chikankari Kurta — White Lucknowi', brand: 'LUCKNOW WALE', cat: 'Ethnic',
                price: 1899, orig: 2699, disc: 30, rating: 4.9, rev: 3200, tag: 'best',
                img: 'https://nazranachikan.com/cdn/shop/files/1_254ef2d8-a4e9-4c85-b7f4-4d7c6dfd671f_1080x1080.jpg?v=1738309910',
                colors: ['#F5F0E8', '#EBD5B5', '#D4B896', '#BEBEBE'], fabric: 'Hand Chikankari Cotton'
            },
            {
                id: 26, name: 'Kurta Pajama Set — Festive', brand: 'FABINDIA', cat: 'Ethnic',
                price: 1599, orig: 2199, disc: 27, rating: 4.6, rev: 4100, tag: '',
                img: 'https://kazumikurta.com/cdn/shop/files/MeghankHaldi___Outfit-_sawangandhiofficial_Footwear-_needledust_abhinavmishra____kadamajay_saloniparekh___jaineeebheda_imtiaz_makeup_styled_4.jpg?v=1764730842&width=1445',
                colors: ['#2C4A6E', '#1B4D3E', '#8B1A1A', '#C9943A'], fabric: '100% Cotton'
            },
            {
                id: 27, name: 'Jodhpuri Bandh Gala Suit', brand: 'MANYAVAR', cat: 'Ethnic',
                price: 12999, orig: 18999, disc: 32, rating: 5.0, rev: 218, tag: 'new',
                img: 'https://images.pexels.com/photos/5724384/pexels-photo-5724384.jpeg?cs=srgb&dl=pexels-absoluteabhi-5724384.jpg&fm=jpg',
                colors: ['#1A1A2E', '#3D1D1D', '#2C4A2E', '#3D3418'], fabric: 'Imported Raw Silk'
            },
            {
                id: 28, name: 'Embroidered Ethnic Jacket', brand: 'OKHAI', cat: 'Ethnic',
                price: 3299, orig: 4499, disc: 27, rating: 4.7, rev: 440, tag: '',
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_OsudWXLMRP3DjKnzmiKQma_4tBjeNZNZ5Q&s',
                colors: ['#C9943A', '#8B1A1A', '#1A1A2E', '#1B4D3E'], fabric: 'Brocade Silk'
            },
            {
                id: 29, name: 'Dhoti Kurta Set — Traditional', brand: 'FABINDIA', cat: 'Ethnic',
                price: 2799, orig: 3799, disc: 26, rating: 4.6, rev: 320, tag: '',
                img: 'https://assets.ekatvacollections.com/kurta/2001081/1000109688.jpg',
                colors: ['#F5F0E8', '#C9943A', '#1B4D3E', '#8B1A1A'], fabric: 'Cotton Silk'
            },
            {
                id: 30, name: 'Angrakha Style Kurta Set', brand: 'ETHNIX', cat: 'Ethnic',
                price: 4299, orig: 5999, disc: 28, rating: 4.8, rev: 560, tag: 'sale',
                img: 'https://rishiandvibhuti.com/cdn/shop/files/Artboard19_Large_de5dd846-e5dd-4f98-8f3a-f73de29cd8a3_1800x1800.jpg?v=1771234968',
                colors: ['#8B1A1A', '#1B4D3E', '#C9943A', '#4A2E8A'], fabric: 'Georgette'
            },

            // WINTER WEAR (10 products)
            {
                id: 31, name: 'Oversized Fleece Hoodie', brand: 'SNITCH', cat: 'Winter',
                price: 1799, orig: 2499, disc: 28, rating: 4.9, rev: 5200, tag: 'best',
                img: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1763982590_4545021.jpg?w=300&dpr=1',
                colors: ['#1A1A2E', '#C9943A', '#8B1A1A', '#BEBEBE'], fabric: 'French Terry Fleece'
            },
            {
                id: 32, name: 'Crewneck Sweatshirt — Drop Shoulder', brand: 'H&M', cat: 'Winter',
                price: 1299, orig: 1799, disc: 28, rating: 4.7, rev: 3100, tag: '',
                img: 'https://image.made-in-china.com/202f0j00HvBcsyVdibke/Manufacture-Cotton-Polyester-for-Autumn-Adult-Drop-Shoulder-Sweatshirt-by-Men-and-Women.jpg',
                colors: ['#BEBEBE', '#1A1A2E', '#C9943A', '#8B1A1A'], fabric: 'Cotton Fleece'
            },
            {
                id: 33, name: 'Bomber Jacket — Satin Finish', brand: 'ZARA', cat: 'Winter',
                price: 3999, orig: 5999, disc: 33, rating: 4.8, rev: 890, tag: 'new',
                img: 'https://www.shutterstock.com/image-photo/african-american-man-stylish-bomber-600nw-2645618219.jpg',
                colors: ['#1A1A2E', '#8B1A1A', '#C9943A', '#2C4A6E'], fabric: 'Satin Polyester'
            },
            {
                id: 34, name: 'Denim Jacket — Washed Blue', brand: 'LEVI\'S', cat: 'Winter',
                price: 3499, orig: 4999, disc: 30, rating: 4.8, rev: 2200, tag: '',
                img: 'https://images.pexels.com/photos/20755907/pexels-photo-20755907/free-photo-of-model-in-blue-denim-jacket-and-jeans.jpeg?w=1260&h=750&dpr=1',
                colors: ['#2C4A6E', '#4A3728', '#7B7B7B', '#1A1A2E'], fabric: '100% Cotton Denim'
            },
            {
                id: 35, name: 'Puffer Jacket — Winter Warmth', brand: 'COLUMBIA', cat: 'Winter',
                price: 4999, orig: 6999, disc: 29, rating: 4.9, rev: 680, tag: 'new',
                img: 'https://img.magnific.com/free-photo/smiling-young-man-winter-warm-coat-with-fur-hood_613910-10758.jpg?semt=ais_hybrid&w=740&q=80',
                colors: ['#1A1A2E', '#1B4D3E', '#8B1A1A', '#C9943A'], fabric: 'Ripstop Nylon'
            },
            {
                id: 36, name: 'Single Breasted Blazer', brand: 'RAYMOND', cat: 'Winter',
                price: 5999, orig: 8499, disc: 29, rating: 4.8, rev: 440, tag: 'best',
                img: 'https://images.indianweddingsaree.com/product-image/2046304/2.jpg',
                colors: ['#1A1A2E', '#4A3728', '#2C4A6E', '#BEBEBE'], fabric: 'Poly-Wool Blend'
            },
            {
                id: 37, name: 'Cable Knit Sweater', brand: 'MUJI', cat: 'Winter',
                price: 2299, orig: 3299, disc: 30, rating: 4.7, rev: 1100, tag: '',
                img: 'https://i5.walmartimages.com/asr/59f54f02-22bf-423d-a21c-fa6e7aca3b2b.7639adc086c06bcff211857c72964a79.jpeg',
                colors: ['#EDD5B5', '#BEBEBE', '#1A1A2E', '#C9943A'], fabric: 'Merino Wool Blend'
            },
            {
                id: 38, name: 'Open Front Cardigan — Cozy', brand: 'H&M', cat: 'Winter',
                price: 1599, orig: 2199, disc: 27, rating: 4.6, rev: 720, tag: '',
                img: 'https://m.media-amazon.com/images/I/71fE1CzOxlL._AC_UY350_.jpg',
                colors: ['#C9943A', '#BEBEBE', '#EDD5B5', '#1A1A2E'], fabric: 'Acrylic Blend'
            },
            {
                id: 39, name: 'Windbreaker Jacket — Packable', brand: 'COLUMBIA', cat: 'Winter',
                price: 3799, orig: 5299, disc: 28, rating: 4.7, rev: 560, tag: 'sale',
                img: 'https://images.pexels.com/photos/13085468/pexels-photo-13085468.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                colors: ['#1B4D3E', '#2C4A6E', '#8B1A1A', '#1A1A2E'], fabric: 'Nylon Shell'
            },
            {
                id: 40, name: 'Sherpa Lined Hoodie', brand: 'SNITCH', cat: 'Winter',
                price: 2499, orig: 3499, disc: 29, rating: 4.9, rev: 1800, tag: 'sale',
                img: 'https://images.unsplash.com/photo-1516826957135-700dedea698c?w=600&q=85',
                colors: ['#C9943A', '#BEBEBE', '#1A1A2E', '#8B1A1A'], fabric: 'Sherpa Fleece'
            },

            // FORMAL WEAR (10 products)
            {
                id: 41, name: 'Premium Formal Shirt — White', brand: 'RAYMOND', cat: 'Formal',
                price: 1999, orig: 2799, disc: 29, rating: 4.8, rev: 2100, tag: 'best',
                img: 'https://i.pinimg.com/736x/37/76/5b/37765b80dc2fec7226f54deeac8a6ac9.jpg',
                colors: ['#FFFFFF', '#C9DCE8', '#EDD5B5', '#F0E0E0'], fabric: 'Egyptian Cotton'
            },
            {
                id: 42, name: 'Slim Fit Formal Suit — Navy', brand: 'RAYMOND', cat: 'Formal',
                price: 12999, orig: 17999, disc: 28, rating: 4.9, rev: 340, tag: 'new',
                img: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&q=85',
                colors: ['#2C4A6E', '#1A1A2E', '#4A3728', '#BEBEBE'], fabric: 'Italian Wool Blend'
            },
            {
                id: 43, name: 'Double Breasted Blazer', brand: 'MUFTI', cat: 'Formal',
                price: 6999, orig: 9999, disc: 30, rating: 4.8, rev: 220, tag: '',
                img: 'https://i.pinimg.com/736x/93/e8/94/93e894206b8d9e599aea2133546c23e9.jpg',
                colors: ['#1A1A2E', '#2C4A6E', '#4A3728', '#BEBEBE'], fabric: 'Poly-Viscose'
            },
            {
                id: 44, name: 'Silk Tie — Classic Stripes', brand: 'VAN HEUSEN', cat: 'Formal',
                price: 899, orig: 1299, disc: 31, rating: 4.6, rev: 980, tag: 'sale',
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiqzJuVYIyscBknrnlxbS5u0jqLMAj_ChDog&s',
                colors: ['#2C4A6E', '#8B1A1A', '#1A1A2E', '#C9943A'], fabric: 'Pure Silk'
            },
            {
                id: 45, name: 'Formal Oxford Shirt — Slim', brand: 'PETER ENGLAND', cat: 'Formal',
                price: 1499, orig: 2099, disc: 29, rating: 4.7, rev: 1560, tag: '',
                img: 'https://coveandlane.in/cdn/shop/files/CB1.webp?v=1775307863&width=1200',
                colors: ['#C9DCE8', '#FFFFFF', '#F0E0E0', '#EDD5B5'], fabric: 'Oxford Cotton'
            },
            {
                id: 46, name: 'Waistcoat — 3 Piece Suit', brand: 'RAYMOND', cat: 'Formal',
                price: 3999, orig: 5499, disc: 27, rating: 4.8, rev: 290, tag: 'new',
                img: 'https://i.pinimg.com/236x/07/8e/cf/078ecf5ae786bb811b6412167ce82b14.jpg',
                colors: ['#1A1A2E', '#4A3728', '#2C4A6E', '#BEBEBE'], fabric: 'Wool-Poly Blend'
            },
            {
                id: 47, name: 'Formal Dress Pants — Charcoal', brand: 'RAYMOND', cat: 'Formal',
                price: 2299, orig: 3199, disc: 28, rating: 4.7, rev: 880, tag: '',
                img: 'https://i.pinimg.com/736x/e1/94/0a/e1940a6bf16b6f2b1ac2fdcf50397893.jpg',
                colors: ['#4A4A4A', '#1A1A2E', '#2C4A6E', '#4A3728'], fabric: 'Poly-Viscose'
            },
            {
                id: 48, name: 'Linen Blazer — Summer Formal', brand: 'ZARA', cat: 'Formal',
                price: 5499, orig: 7499, disc: 27, rating: 4.8, rev: 440, tag: 'best',
                img: 'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=600&q=85',
                colors: ['#EDD5B5', '#BEBEBE', '#2C4A6E', '#1B4D3E'], fabric: '100% Linen'
            },
            {
                id: 49, name: 'Formal Shirt — Royal Oxford', brand: 'VAN HEUSEN', cat: 'Formal',
                price: 1799, orig: 2499, disc: 28, rating: 4.6, rev: 1200, tag: '',
                img: 'https://powerlook.in/cdn/shop/files/14017211_5_89676b53-d97a-47fb-acc2-d888c896a5b3.jpg?v=1762945236&width=810',
                colors: ['#2C4A6E', '#FFFFFF', '#EDD5B5', '#C9DCE8'], fabric: 'Stretch Cotton'
            },
            {
                id: 50, name: 'Tuxedo Jacket — Peak Lapel', brand: 'RAYMOND', cat: 'Formal',
                price: 9999, orig: 14999, disc: 33, rating: 4.9, rev: 180, tag: 'new',
                img: 'https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?w=600&q=85',
                colors: ['#1A1A2E', '#2C4A6E', '#4A3728', '#000000'], fabric: 'Satin-Lapel Wool'
            },

            // ACTIVEWEAR (12 products)
            {
                id: 51, name: 'Dry Fit Gym T-Shirt', brand: 'NIKE', cat: 'Active',
                price: 1299, orig: 1799, disc: 28, rating: 4.8, rev: 6700, tag: 'best',
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8S7XXTHzopfOMVsF8RHPBTuz53SZMhf8wiQ&s',
                colors: ['#1A1A2E', '#8B1A1A', '#1B4D3E', '#C9943A'], fabric: 'Dri-FIT Polyester'
            },
            {
                id: 52, name: 'Compression Shorts — Pro', brand: 'UNDER ARMOUR', cat: 'Active',
                price: 1799, orig: 2499, disc: 28, rating: 4.7, rev: 2200, tag: '',
                img: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUSExMVFhUXFxgYGBgYFhcYGBgYGhcXFxgYGBUYHSggGBolHRYXITEhJSkrLi4uGCAzODMtNygtLisBCgoKDg0OGxAQGy0mICUtLS0tLS0tLS0tLS0rLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAPsAyQMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAGAgMEBQcBAAj/xABKEAABAwEFBAcFBQYDBQkBAAABAgMRAAQSITFBBQZRYRMicYGRsfAHMqHB0RRCUnLhFSRigrLxIzOiFkNjktIXNFRkc4OTwuNT/8QAGQEAAwEBAQAAAAAAAAAAAAAAAAECAwQF/8QALhEAAgICAgIBAgMIAwAAAAAAAAECEQMhEjEEQRMiUWFxoRQjMoGR0eHwM0JS/9oADAMBAAIRAxEAPwA73GttoFgbuWcLAKwD0oBVCzjBGGMjPSp53itInpLGpoDIkqcnsDKFUn2d2hv7E2kLTMrN28JTK1GCM9aKKQAixveXFFCCi8BJSW3QQP57tRNp722htQADRwnFH/7UaP2ZCxC0JUOBAI+NZd7S9ktMutKYShq8IUEAJvY5wB8aGMIV71L1eaT/APEPN00wveg/+KSP52fk2qiRjduyQP3do4DNIPnT6Nh2YZWdr/40/SgRm1s3utJdSpFpIaQsJWk3JWDmtK0sYJE8NKoduOKNp+1XjcW4Ljl6cURjiAcCOGlbRadjsKCR0TcBaVDqpzSQRpWX75tgbXRdRPWYNwQLxvDCDhJgCgC0sW+byJm1IfjIfZXEqPAXwoAdsVb7P39vJl2yPI/9OHfgIUfCiP8AaKU++y4j/wBu8PFu9FKY2swpV1LjZVwvCe9OYoAB9/t8rrTRszrzS1E4KaLZIEZh5GMTpRbtBwqszKjiSpgntvoJoL9s6UFFnWqcCsIiIvG6ce5Jowtn/dWPzMf1JpgX9epClgCSQBzwpv7W3lfRP5h9aAH65Xq9QB6obR/x1/lT5mplQWf89f5U+ZoAnV6uTXpoA7XqTNdmgDhrhrtJVQBxRwrLK1FzI9lZL01NCYdbj2ZBsDIUhJkKOKQcbx41dHZzWiSn8ilI+CSBVTuGf3BjsP8AUaunrQE92dQ2l2VRFcSUrQgOudaYm6oYCcSRPxoH9pbag9ZStSVAkjBBSYvJmcSDpRbtDaKA8yJx62H8tA/tHtThcZDiYACiOclM+QpWFGphYujHSozVuSVFJIkVQq2k0QkSSIBJB5VW7TeaBSpsmdQTUvJXQUFG37altoKJgdIyM4951CfnWb73PD9sNqnAKYnh71Sd7tq32UJJwC0HwMj4ihfbj020KPFvzFNSsKNr2jalJTeSUwOOtUbTQtZKn2kFsZSAceONT3H0ttBSoUIqnTtVNxRvkAZJAwpN72AHe1NCEtMhLZQAtQTCjdOX3TgMBpR/tS2BFjQs/cDao7IOlZx7TXm1N2cpcKjfVI4YcKJGrSbRYktQYXcQVaiYGVVy0CRmW8++9rfUZKkgEi6MoMYGNRA8KGRbX84XHYYI4Vv+8VlsrTSGEFCQgQEAAntUrOdTQHbbQ0FXb6OyQPOpeStG8cVq7KDdr2h22xqSApa2xm2uSkjUJnFB7NeNfR2zLeh9pDzagpK0hQIM56YajKvmreTZ6ioLSIEVqfsMcWLA7fJui0KCZyHUbJjlJq4yTRlONM0lTlQbK4C84f4U/OqvbNodAITnMpI+dDyNputrQL0FwwoxOoy8TSc6ZBoDjoBA41wu0N72vqQhpbWLgMJHEkRTW0tpKZQFLkOKSExpeNDnQBU25NeW7FVtlVcSgE5JxqFbdrA/5fWVOAp8h0EQNeUaYsyyUgnAxULaG0bpugY02xFgs4GsX6WtRctqgbg6yiCeQFYj9uc4CmnYmavuTtVKbA0NReBH85qc/tDrYHBWtBu6bihZU8JV/UatengXgK4c2SS6NoosbUtpp1ly9eJvAg6YZ/D40Ib+7TLy2pjqhXxI+lTdpPXnG4zx8qG95V9ZPYa1xO0iWthIy5KQOQqVZUtEw4u7wj+1U7bnu9nyp1Rqa2NkTfDqNApVMuoAjODNUu8iy3a1EQShSCOBICVDDhUreky0OPSI86otqKdU+b5vGRjgJ0GXKK2h0Sw8tO0FLxJzAMDIYaCnLJailGQKScQc/WFQ9hBClQ5+HAcTFMt2sNrWIESYnSoUfYA1vo/eU3oLxwow3UfSUIaF4KUtqDOAxAmgTeZclB5miLYdrKAlf4VIPgQa0rQl2OnchbL7rzigW0JMKCv8xRF0CJJ94lWelC6d2pWVC7mc4+laDvy2hLJR+8LdkKJQFFtIOisQmSBhqPMLsVtwu9edSqZ8Tn41z2+zuSXTH7TZIa6OROEeI0FHPs0tf7q8xHUbIWF6qKyu8CNCLg7iKz68pREZkiMedaVsRxmysLaCry1SpR0JuxA5CNedPG22Z5uKQiy7dUbxBlAmJzqo2naVf4LiMDJM8Mqi2C0N3CDz8zXtsOgMtYcflV12jlLOxbaUXkLeWClJx5d1We2yHnkLnqXkmTkACD8aAhaJjCKlI2sejDegpJNIAv3v21F3oTjkqMoqFugtTj4JScNdAKEnbQTrVvu5tRtolTjryVTglCQQRzJqkm3bCzVNobSQymT4UC7T22pxRUCBjhxArls2vZ3TfV9pMjCEoAjlNVQtNik9W1Ejm2KiblJ6aoAnTbm2WlP37yikyeYGVYj+1F8RR5trbLQaUllh6A2qSVJJUo5YT5VlX2sfhPxrbG/uS9m07mu/uqU/xLn/AJjVqeCRJUYqi3IP7v8Azq86uiQrLIa865p4k2zZSKzeq3GytFBRdcdwCtUoGd3gSaAbO+Tgok980Tb62S8WiDmbpOJgE59goVdZ6NSkg3okBQyVGoreCpUSw6s2IT+UEd8Uu0iMKmJQkdHBH+WB4EVGtSJJqKGUW21S33p/qFVG0D/j/wDL6mrTbaLrau1PmKsNjbqKtTinlrS0ykpAUrNahiUonDDU6c8Y0TpCqxFgJveNV7iyVGa1AbGsCElHVlOKipwXwD96QR1eUUPbRY2ahQSEyqSL3SK6MkZy5JEgaAHPsqHkSLWGTMz3gvXkzEYx261ebNxaJnRNFS0WJ8D93bWE4SlJQjtLivey4A120osa0XEBDaoEdGCZg/eBuz2xPOmsqG8EkVO8NsFosaVKZdcUghBuE3QQB11BOOKe6ZoHO0U5JSeytiasrFlZvtKWsBYKlKESYjqp0EGsut1lAeWREXjiNcc655SV0dEIycU2N7KWStKlcR50R2t4jWqFIAq4sToIuuC8NCDCh2HXvBq8ckuyM2Ny6I9hBIAFXW12iWm0nAhJp2ybDWEBbUqGgUkpV9D2yOynNr2dy4hRQqAOtgTGGvCtW7ejl4tdgqnjyphKiKl2leHrKoacatCHJNSmmQRN6oSTGFSUKI1wod1oRdWc9QAnKoY95QEZ50zY7R1o0NKZIAUeZwrncOLbK7OWgHE8j5UAUaWl8wccADQNeroxrRLNS3IVKCkk3ZJAmJMiaLlLAThFCW467qEKj3lrQe/H5UR27aSEOIaLZJVwrNzSdGtaIFsQpS0KAkJJKjoBGpNDW9lpbWUFCkqAChhHKr3eneOzoizqbJSm8pQH31j3Uq/h+goBttsDjilBCW5HupyyzFaLeyA3HVWLuGCcNMUjSpaW1rPVE4VxIT0rfVzDfhcJ+VXgUEghKCJrH5Ei2gVtOxnbSUsNgX1HM5JAxJJ4ACnd8yW1JsskoZQlI4E3QVKI4lRJ76JtkPJZW45EXWjnzUn6UAbXtanXFLUZKjNZZcl6RrjXHZWLRVzsTd9MpetKFFrG4kki9jPaEZnCJqRsptsJvKSkkakA4561Kt21ZBSThUUqN0Vu8lnSTeYlCcZbBN0DilJy7stKo7HLapk+Jp9G0CHonCrLom1GSkfHyFBTSfRZ7J29AKFwpJ0ViCezjUhux2RRvLs5/lcUB4GfOqR3ZrZEpJSfEeB+tMC1OtZ4p4jL9Kf5k7QRL2RYlGbrqexwfNJqZZNlWYEFK3JGQVcPyE0PsbWCs6cXbBVKQuwwsb6SspLmP8Ugnzp62KV90g9isfCgpO2JhCxJHuq1Hfwp1W0r44HQ86rmqFxEbcaBUFpESYUI+9xjScfDnVV0MzpjhRRslg2i8ogEiAZ1OOPbFSHdhQSCEgAEk9taQyJ6ObJGm2BjNmvSTpXXGIE/wjxirq1bPS22pV4wBJgCcJwFW/8As9DKJUOtcmRiJ0nvrSUuC2ZpcnoB2x1kjHEgfGnmnbjisJANHD+7DaElc5Ce/Sq/ZGwgtCirO+rSoeaLRSg0DdqCShSkjTGgKK13bGzUoAQQOslZw5JJrHr1aYpKS0TNUa1ulIsYUB7r0/6oNWG37StFssykm6rESIOBIBzBGtQ9yetYVp/iXXtvPTaLIeyfEVx8/wB41+Zpf0glvnZ3Da3pClGb863YGOGlUqTJnlxnStV3j2ch5xtaVFC8UlSc7pBkEaigzejYTVl6INqKiq9JPKIwFa4s6lS9kyQZ5LQeCWz8I+dEZB5VS2WzlRHAtoE1boBArink9GoP7z24socdiUpuhQGqVYKA5wZHMCg20ReicwFAGJunEGBRRvmoizPqI++iJHMUG7abUm1MhQxuM5ZZ1vjjyX+/gS50STaDEA4VJsWyXrQCWwIAPWUYST+EcT6NaIuwBUXkNnheSk+dcasd0nrAcsIFY85PpGvNmNCyOocPSAgiRiIx1q1stp0ov30sQN10QTEKjSPdPy7qD7YzdKTkFCRWidlxdFil6RSrM7iQcjVY25Xi/ChVl2SrbYUjrIN3lp+lV5tKk4HGpLz81WrdF4JnE6UiXXoWl43gam2ZwyAJqOpuINW2zG7xCQJJIA7TlSEHmwWENtIg4qBUrmT+gFO7WWAABmc/lUX7a22pLTibt0ASogQANcaYetiXJWlQKeIM104MT5cmqOTJO9FctAcfbaPug319iTgPGPCiC2KmMcLycKqN2bM86lb7TaVhayAoqjBOEZcaujsi1KzbaGM4rP8A01GeGSc9dBBpIVanJATxPwGdQtkWkXVT/wD0X51Z/sm1cGR3k/IUlOwbRqpoDkk/WsfgyJFcwY3neBdbj8Dv9JrGO+tr3zsBa/xFXjdbVilBKesIxOlY10ddfjxcY/UZ5HbNV3CANmI6031ZAnhU/a2yXFuNuNoWq5oUnGrf2Tx9hn/iuedFlqeUPdKMj70/KsvhqbnZSejMN89vLZaQllKb5MOOR7qom4nnxoR21tJ9zokPlJhIWlQiVJXlMa4VUbY2o44u4s4JdWo46qVjSrQWur0ZUV43hhHK6da6FCK6RFmz2PZtuKExcAupzVyH8NSRsG2HN1A8T8hVxYtojo0EJV7qfIVI+3K0R8az5RHyArerde0GyulTyVXQFRBEwQc5oG3p2YWre0wpd4lDPWg4XlFI8IrYNsuOOMONiAVoUnxEUDby7tv2m2ItPSNoCUtDEmZQSrhGZq4u/QnILW90B960OHw+lOJ3SZ1cWe/6Ul/bLaB17Q2ntWBVZad8LEjO0oP5byvIVLcv/IciBvpZWbKbPdJh5SmVSqQAoSk8oWlGPCapNt7LCkNoIi6AoRx4Gk+1d5K2LMtJlKlEg8QUnjROxs28wm0KN4hlOGMkkGSTr38eVc+R3UjowTTfFmcuojCnLOzOYOPKrctYBXRnGcYphVvggRFQmdFFU+iMKYTZ0lQVGI1q3tNpScwKhBInCmFCgcINWm79qbadQ66q622pK1HkDI8TA76ruhnGiDdrZzdx5x9HSISALt29JJmbupF0eNF0zPI+MWxftKsdktLTVqbcQhbpEqKj1kXcJTxyoT3c2Q9fu2d1x5AHXDSRhIMe8Yzq63yfYeFnQ0ysJbXJSWVJFzVOVEW7+0bIm+mxN9E4UyQUKbBIykkV0vJxV0cXIk2TbD9iS4t2yLQypSIN5AAWqEEQDgCY7zR2i8QDGYmso3ltNstLPQrDCQFoXIdUcUEKGF3iKsdnb2WwrShTCbmAUpLhVA4gXanmqH8iNIKVcKq94NnvvMltl0srJBCwJgAyRHOoo2qfxmvL2qY981Hzx/EfyIGrfu5ambNalv2tbw6FUCLoEAkkiTNYldrYdu702l1h5r7M8LyVJvG5EY45zEVjvSV04ndicrNm9lqv3RQ/4p8hTO0N/nGnFo/Z7hSlRTelwgwYmbkY1cbs7DVY21NpWFgqvSRGgEYdlW5v8PjXE8qUm6skzNW+NjSZVspCVGTikAk5k9ZOONdT7SUD/LsbaeGI8gmue1tnr2ckfdc1nVFNbl7nsWljpnOkkLKYSQAQAO/WupZqhyYHX/ahavuIaT/KT5mq9/2i29X++CfypSPkaO7PuRYU/wC4J/MpSvM1NY3asaPdZSnXBNZ/tK+wGUPbwW50El19Q1IvQBzKRAquNpdcIBWtRJgSomScBma3I2RoAjrRERjEdlZJvPsf7LaCpsK6EkFBIwCs7vdFOGfk6FZWbQsa2Fll9JDpCSBIIAOpjPCtdsG5lgCR/gJVIB6ylK0HE1lW8W0PtL6XsQShCTP4gDMcq2Bhpy6mHEnqjQcKjK2ktgwT9rSAlmzJSISFkADIAJMCjnYyZsbY/wCEn4Cqu3bJ6aA4hDgGV7TnVjsexqSpKCkBu6oQFGALpAEeFZOVxSLxSqaYI7X3iSWkNpwCQR3yZNCj7wUZB1q0UkJLqSmQFGJEwKqLQU5gChI9FsmlY1rxfTUP7PIBKzUd9qMlE1VCsuELrQ9zgPs543zPgmPKstsS+Jo+3KtfVdg4AoHfCjHbBHiKUloxz/wBWpscBSCwn8I8BTCrYKT+0E1lRxWiR0Cfwp8BSg2kZADuqMLcjjSxaEnWlQaHSkcK4UjhSOlHGudMOIoAjbX/AMl38iv6TXzlNfRO2FjoHcf92r+k188V2eJ0wPqAV40gqpBXXMMzr2ujrWbsc80Vceyz/uX/ALq/IVSe1s42fsc80Vcey1f7kf8A1V+QreX/AAoAzr002HK4XRXPaAWqq3bOz27Q0plwSlQ7wdCOYqU66YN2AYwnjpWeL3EtQUVi2YkmSL4zM6K41UOD7dBQF7XsS7K+qzODrJIKToUnIjt+tbpZmhdTgPdHlWZWvcK1qlan0LIHvKUqeWJp1m2Ksw/xrY66oYXErKWxyn31f6eyu1YHmScX17JlJI07o0jGI74+NVVv3gaZIKSFQoXhegKTqlJOtZjtDfF5UpSshPAH1NUzm1lK943gcwcR3HMV0YfDhDcnb/Qzc36ChraLgddcLRW1fIlOK0g4gKR96JAkSeWtQXHGXOs2UkHUQaqrHtN1EhlwwZ6iscxdN3gYMYcsMBSH9pNqJ6Wzi8L0FOBHWkJ0kJGAE/OZyeGu4nTj8t9SLhQMRKfL4VWWraLTfvLk8Bj8Kgrfs92OjWTjJlQGOAgFZ0k558c6hLdUSkolF1KR1TdBIGJIHE4xzrKPiv2aPyl6Jdr20sJBQm6FTdKs4yvXeE68jwq4e3nI6NNkvNoRCpyUVRiDJ62JVeJzOQiSoddvOKvLgmAMgBAyAAwFWGz20jE4114vHUTky53I13dPb/2prFIDqICxOBByWORg4aEdlXKmeRrON1LWhl9DgN0HqLBMgoVE45iCArnd0rUSZxBwPD1lXnebh+KeumLHLkiN0Y4fCvEgZeVPzXDXHs0ojkk5qA7KQVpToD51JNeKRypWIqrffcQpICUhSSJPMRQB/wBnf/mU+Fai40nUCufZ0fhHhVrLOHQUSHlwCQJIBgcToKzVa9toVILkY4S0pInHAGtGTaUHJQntFdKgciO7GrhklDooy3eB7aD/AEaXGHFBKRN5psm/98puAQk4YGm7PtO2WQqbs7LgZvSnpGCVZCSYwrVfL1rSFfSr/aX7SAzjZm+VqLzYegNlQCv8O7gcJJ5Eg1oiXQciD2EGuLbBww8J/vVY/sYqMhYHYkDyrKclN3VAWSlgZkV4WhN2/ew059n1qpb2QhtQU+5eSMbvHtxy5eiL71b1XlFLeAGAjIV2+N4SlU59Gcsj9E3ebbsyL0DRIrOrc/eJNetdrKjJMmoK1V6ukqRijxNIXXia5NQyjzTkEVK+0SMahKpAmp50PhZNvCuqWPX64CocGnrKMRNNZL0JxomsNz6+vz8KntMVyzgdlXuzNluPA9Gm9GJMgATliTFbpGTZWIMUb7lbfgizuHqn3CdCfu9h059tCtssamzC0lJ5jy41GZWAcDSy4o5YOMgTcXZsFsUQIGZwmQIwJJk4YAE91Z/vfvYpxNldQYX0ULjVSDE+M0Rna7zlmQ42y04lKSHCsqKrwm8opAj3SIPOsbetciNAV/Faj868nBj+NtPs7FtaPoGyu30JV+JKT4ifnTO1bQW2XHBmlCiO2DHxqr2I/augZhuzkdEiJW5PuiJF3OvbbctZZX1LMABJErMjhkK41jjf8S/X+wgM29tZxtDIvGReEnPRQ8z417/tEtH4W/A/WqvfTaS3LinAgG+sdRN1MAIAgcIoY6au9KEkuSspo+jFMIOaU+uVMqsTfAA8iRUgeHy8O2lJ+PaZ5V5lsVEL7APuqWO+vCyKGTqu8A1OB9TXCef08adhRB6B3HrpPakiugu/hQe81JUfUfOmzBpWFGT727yurdcaJi6tScP4SUx8KFHLRRF7R7AW7atUQl0JcHhdV/qB8RQqa9yOS4poxSF3ppKqsd2LMyu1NItE9EpV1UEpxOCZIxi8RMRhrW1MbFszQuoYaSMj1BJ7VESo9prHN5Px0milEwI0uz2dbhuoSpauCUlR8Eya3c7DspM/ZmZ49GkHxipCbChPui7yCoHhWD81fYqjJNl7gWx2CpAZTxcOPchMqnkYou2b7NLOiC6tx06gDo0+AN7/AFUXKsml9Y76QmzrGTiu8A1zz8icvdAQkbqWICBZmvCT3k41U7W9n9ldEtAsr0glSJ5oJy/KRRGUujVJHOu33R9xJ7DWanNO0w0Y1tPZz9lX0bqSOBzQoZG6ojEcs8cQKP8AcTaiDZlNj3gSpXbGfgPgedEVqKVoKHmLyDmkgKHbjkeelUVj3VszTnStKeaIyTN5BxmDeBURInOvQxebqpozcPsC+9W3rxLYxx8KHWn9Sa5tnZi2FFK/eESZkEEGFXo1IVz6uMZCsLtdyyatC42aVuNay6xaLKlUGL6TjgfdMicR7tZttCxqbd6A+9N3EEYnXso39lKpfdynos5xHXTkNf0FaI9YW1HroSrtAPnjXl+Rm4ZnrujWGkMWLa1nShKA8jqpCRjGQAqWbW2pJ66VDLMGeR7ahfsGznNoDsw8jSP9nWNEqHea4vp72PZlftAF20JbQFXRJF4R7xEDhgABNMf7Nj/xTPgv6Vrn7BZz62HMH0Klfstr8KfBP0rZ+VSpDtltf5+sPXdXCrLGknj2T68aSgxkMPXH1hWFgOBcfDSklZ0rsYnATPcO4V5IiDpy1oATe7M/pXMa8VDh61pKvWBn1hQAE+1PZ99hDwH+UqFckrgT3KCf+Y1lcV9B22yodbW2sSlaSkwNCIw7JzrBtp2NTLq2V+8hRSefAjkRBHI16XiTuPH7ESWyNW4bq7VNosjTpIvQULynpEZk9ohX81YaTWi+ya0Eh9onqjo1jkTeSfG6nwq/Ljyx39hR7NDHOPXdS+0U2IGsU4e2e3615JodJ9YGvJIpMz6/WnJ4fXxHHOmAgEc69SzSVGgBJNcKu3XvrpV65Ugnu9cqAM69qZClozlKIzwxUo5fOs5VRX7QrSTbHU6C4I7G0/U+NCZr28arHH8kYrthZ7NlD7WEmYUhYMGMhe/+taobGNFKA4TWYey5i9ayvRDajPMlKR8CfCtZHrP5153mS/efyLiiMLOsZOHwFeCXvxA90VJFKBrk5FURVKdj3UnnNe6dz8I8akqPGlXTw8qmTAfA9GaVc/v4UiRXb2UcNPDyqxnrv9s/DCkhE6aR2+Mjyp0pxxiZ7T8K9cA7Dhj8csKAGy32+vRrpaPnh8eFLQfWeuPlTLh0gDgPXrGgDqhznEY4dvbWf+0/YJWkWtAxQAl0Rmj7q45TBPA/w0fkzkNM/wC1NvICkmQCIgjMFJwKTnhWmPJwlyQmrPnc0feyVYv2hP3ihBA5JUq9/WmhrevY32W0ra+7N5B4oPu94xHak07uNtDoLa0o+6o9GrsX1RPIEg91epkXPE69r/JF0bUBpI7zjXSDw8hXhI1HhhPZ2jSlAkD65fHLKvHNDqU9nrurqDnl41wEnn3468K6SCc/j50gPXuY7jFeKfXCu9/n4Umf7wfhHrGmAlSPU/LhTSkxr5inUx9cO00ko9Y9mB8aAMh9pliKLYV6OISrDKQLhH+gHvoQVWhe1tEOMflWNdCnQ/mrPVV7OF3iiyPZp/sqsd1h16MVrCR+VGOXapQ7qOAeX6VT7pWTobGwg4G4FKkZKX1yPFXwq3Jw0HKeXKvJzS5ZGykdkd3riK70mOnw/SKR6zNLCR8ayASo0meY8aURSb3L14VMgJxVXUjlx8e+mQquirAeKo7NPKuX/Q/SkFXb8K6DQMU6Adc8+XKkR6w+ldFN+vOgBZSNY9Rx0rilDXhx8c66ju9awKXcwOmvrxoAD/aVsUu2cPJSVLbxw1bPvQMzEA+NZ3svYyioLX1QDMan6VvVmYvGTAQkdYkJACcrp5nKKyi0iFEJykxoInCuzFnmocUbYsMZfUzS7E+HG0uY9ZIVrmcx3ER3UtRH644esBVHunagtno8JTPDIyfOfhV4pPKPhPdOPblXI9OjOa4to5I9fp31yD65EDI10J9AcuFPJTPfH9841qbJGgCfXf67aUGtfLDv9Gm7Ta0N4LOOOGZ8JjyqANtJx6uGkKP0xrSOOUtpBRZKMYecD9DkK4XM4Bx4epqvVtdB+6rHTD4AkRS0W9vmO4fIYcafxzXpgBHtVsqj0TgEoTeBI0JuxIzgxnQFsWxdNaWWswtxIP5ZlX+kGtk3pUn7OhYxCioDXAYcOM0ObiWNpL7iylKSEGDA4iYOmldmPyHDFxa2i3gqPOw5g55aDPlr4V7h6PwroOoI1y7Rpn8qcV6n615xmIu1zo8s/GvA+sfnSZz7stfnQBxWAOXfGdNXTy8f1p4zxPcfKk9Lz8v+qokwHQa8FaUzfpV/s8PlrVgSL4H6z51y9r5TFMJXyPfA8qVePr1nQA5FePrWm744g0hR7hzNAEpB/N8OMVYWPZDqjJ6iRmVR3wBqO4Y8qqrParigsQopm6DIAVBCTGgGfdULa+1rU6FpbQlM4BQci8MCEkzKecAc5zq4KP8A2NMcYvtiN99pDCzsqAaTiog4qVreIOPZWcW7bDQN0Kk65eHKru07svu4LfQgHMIvk5ZSdJ7Mqisez9AN6/eAiYAAJ4STifrXQsmNezV5ktRJm6G32EOG+4EgpIykTIIGWGVHFmtzbolCkqH8JGfCAZoIG5SAMFwRxA7e6qm02VdmXEwdCkmO46VDjHK/pezCc3J2ao4+lIkkADXGNdTVZadtmSEdUDC9ETr1RqKCGd5Hjg5Dg4zEeAxqc1tdCtSDxMDwkitsfi1uQJInWltK1BakgqGRIlQ/miQK6BpmfgPHWmUuCJxx5ST4TXelA5cBl4zFdJQ6nl4/SurSe7hqabFoBOhPCRhThdiYz1J9CgAk2XskP2JSVCFSq6oaAYn43qFUWJLSlBOmE/2ok3R2upLgYMFpSHAnje9/Ph73jUZ9hJdWQAD4YAwY4iueqlZ1J8oUURejs0506i3rGSj4mBT22mUNp6UKEAwoTMc0xn2c6phtNtXVSuBqoyO4E+enluvqRzSVaZO/aTt6EKOB66s/5QDIJ48O2pSdsufikcTBqqQ83EBaAkcx6inC4jORGmPrGl8cfsv6E0iz/ba8yAfPxwr37YP4B4/pVWCDkQT3V3oTxPw+lS8GN9oKQWA93r9KQCRp44fKltJ+Wp50lxUZcB5159EHkqJ+gMn4RXSvkrz+E1xCs/oOIpakCBhmce+aVCGgs6n4fXOvN3swfgDPhFcUcVcvWVIdVCj61pDofvanDv8AlOGdcKsMycOP68eNJWcCZOZ17KdCBBMafKabASAe7vMxhj58aU86lAvKMAZAns9d9Lc6oJGcHnoONBNttS3DeWZPdrnV4sPyMpKy0tm3b0pAhJwjU4R9arSu8LqhI4YfICO6oiciaktjCu+GOMFoqiHbNl6oM/wnTvquUkpMEY8xl5URLMARTNvaSUGQMAY08q1UhNFNZ7YtBlKvEyPCatLLtoHBYu/xCcfmKoFZ0lBknl9KqkxWFjltbjFQjhgSe6arHtqJHuojhGHjAHnVUnWm0qwmlxQ7Jjm13QZSq6oYggmR2STTlq3pty1hXSIEHIIITzwnM1WLyph05DifkaHCL9DU5Lpku27RtD5/xHAUg+6lN1J8DJjtj5ICzwEdpHwg15ArizjVJJdEtt9iw9yPw+tKLvbP5T8gabTSCc6BDxtHOO3DzivdNz+P60ymvR6mmB//2Q==',
                colors: ['#1A1A2E', '#BEBEBE', '#1B4D3E', '#2C4A6E'], fabric: 'Compression Spandex'
            },
            {
                id: 53, name: 'Sports Running Shorts — Mesh', brand: 'PUMA', cat: 'Active',
                price: 999, orig: 1399, disc: 29, rating: 4.6, rev: 3400, tag: 'sale',
                img: 'https://m.media-amazon.com/images/I/61UjR14Q39L._AC_UY1100_.jpg',
                colors: ['#1A1A2E', '#8B1A1A', '#1B4D3E', '#C9943A'], fabric: 'Mesh Polyester'
            },
            {
                id: 54, name: 'Training Joggers — Tapered', brand: 'ADIDAS', cat: 'Active',
                price: 2499, orig: 3499, disc: 29, rating: 4.8, rev: 1800, tag: '',
                img: 'data:image/jpeg;base64,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',
                colors: ['#1A1A2E', '#BEBEBE', '#2C4A6E', '#8B1A1A'], fabric: 'Recycled Polyester'
            },
            {
                id: 55, name: 'Running Windbreaker Jacket', brand: 'NIKE', cat: 'Active',
                price: 3999, orig: 5499, disc: 27, rating: 4.8, rev: 780, tag: 'new',
                img: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=600&q=85',
                colors: ['#1B4D3E', '#2C4A6E', '#8B1A1A', '#1A1A2E'], fabric: 'Lightweight Nylon'
            },
            {
                id: 56, name: 'Compression Full-Length Tights', brand: 'UNDER ARMOUR', cat: 'Active',
                price: 2199, orig: 2999, disc: 27, rating: 4.7, rev: 1100, tag: '',
                img: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=600&q=85',
                colors: ['#1A1A2E', '#2C4A6E', '#8B1A1A', '#1B4D3E'], fabric: '4-Way Stretch'
            },
            {
                id: 57, name: 'Sleeveless Gym Vest — Stringer', brand: 'DECATHLON', cat: 'Active',
                price: 699, orig: 999, disc: 30, rating: 4.5, rev: 5600, tag: 'sale',
                img: 'https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=600&q=85',
                colors: ['#1A1A2E', '#8B1A1A', '#1B4D3E', '#C9943A'], fabric: 'Dry-Fit Jersey'
            },
            {
                id: 58, name: 'Polo Sport Tee — Dri-Fit', brand: 'PUMA', cat: 'Active',
                price: 1599, orig: 2199, disc: 27, rating: 4.7, rev: 920, tag: '',
                img: 'https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=600&q=85',
                colors: ['#1B4D3E', '#8B1A1A', '#2C4A6E', '#C9943A'], fabric: 'DryCell Polyester'
            },
            {
                id: 59, name: 'Full-Zip Training Jacket', brand: 'ADIDAS', cat: 'Active',
                price: 2999, orig: 3999, disc: 25, rating: 4.8, rev: 660, tag: 'new',
                img: 'data:image/jpeg;base64,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',
                colors: ['#1A1A2E', '#1B4D3E', '#8B1A1A', '#2C4A6E'], fabric: 'Aeroready Polyester'
            },
            {
                id: 60, name: 'Basketball Shorts — Mesh', brand: 'NIKE', cat: 'Active',
                price: 1299, orig: 1799, disc: 28, rating: 4.6, rev: 2400, tag: 'sale',
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXEmm0OZYi0wrOp3cPeFIuXZS3FpnwgDSOxA&s',
                colors: ['#1A1A2E', '#8B1A1A', '#2C4A6E', '#C9943A'], fabric: 'Mesh Dri-Fit'
            },
            {
                id: 61, name: 'Dry Fit Crew Neck Tee', brand: 'DECATHLON', cat: 'Active',
                price: 499, orig: 799, disc: 38, rating: 4.5, rev: 8900, tag: 'sale',
                img: 'data:image/jpeg;base64,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',
                colors: ['#FFFFFF', '#1A1A2E', '#1B4D3E', '#8B1A1A'], fabric: '100% Polyester'
            },
            {
                id: 62, name: 'Compression Upper Body Set', brand: 'UNDER ARMOUR', cat: 'Active',
                price: 3499, orig: 4999, disc: 30, rating: 4.8, rev: 440, tag: 'best',
                img: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=600&q=85',
                colors: ['#1A1A2E', '#2C4A6E', '#1B4D3E', '#8B1A1A'], fabric: 'HeatGear Compression'
            },
        ];

        let cart = [], wishlist = [], activeFilter = 'All', selPayment = 'UPI';

        // RENDER PRODUCTS
        function renderProds(filter) {
            const g = document.getElementById('pgrid');
            let items;
            if (filter === 'All') items = prods.slice(0, 16);
            else if (filter === 'Sale') items = prods.filter(p => p.disc >= 28);
            else items = prods.filter(p => p.cat === filter);
            g.innerHTML = items.map(p => {
                const inWL = wishlist.includes(p.id);
                return `<div class="pcard">
      <div class="pimg">
        <img src="${p.img}" alt="${p.name}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&q=80'"/>
        ${p.tag ? `<span class="ptag ${p.tag === 'sale' ? 'sale' : p.tag === 'new' ? 'new' : 'best'}">${p.tag === 'best' ? 'BEST SELLER' : p.tag.toUpperCase()}</span>` : ''}
        <button class="pwish ${inWL ? 'on' : ''}" onclick="toggleWL(${p.id},this)">${inWL ? '♥' : '♡'}</button>
        <div class="pactions"><button class="qadd" onclick="addCart(${p.id})">+ Add to Cart</button></div>
      </div>
      <div class="pinfo">
        <div class="pbrand">${p.brand}</div>
        <div class="pname">${p.name}</div>
        <div class="prating"><span class="stars">★★★★★</span><span class="rnum">${p.rating}</span><span class="rcnt">(${p.rev.toLocaleString('en-IN')})</span></div>
        <div class="cdots">${p.colors.map((c, i) => `<div class="cdot ${i === 0 ? 'on' : ''}" style="background:${c}" onclick="selColor(this)"></div>`).join('')}</div>
        <div class="pprices">
          <div><span class="pcur">₹${p.price.toLocaleString('en-IN')}</span><span class="porig">₹${p.orig.toLocaleString('en-IN')}</span></div>
          <span class="pdisc">-${p.disc}%</span>
        </div>
      </div>
    </div>`;
            }).join('');
        }

        function filterP(f, btn) {
            activeFilter = f;
            renderProds(f);
            if (btn) { document.querySelectorAll('.ftab').forEach(t => t.classList.remove('on')); btn.classList.add('on'); }
            if (f !== 'All') document.getElementById('products').scrollIntoView({ behavior: 'smooth', block: 'start' });
        }

        function selColor(el) { el.closest('.cdots').querySelectorAll('.cdot').forEach(d => d.classList.remove('on')); el.classList.add('on'); }

        // CART
        function addCart(id) {
            const p = prods.find(x => x.id === id);
            const ex = cart.find(x => x.id === id);
            if (ex) ex.qty++;
            else cart.push({ ...p, qty: 1 });
            updCart();
            toast(`✓ ${p.name} added to cart`);
        }

        function updCart() {
            const tot = cart.reduce((s, x) => s + x.price * x.qty, 0);
            const cnt = cart.reduce((s, x) => s + x.qty, 0);
            document.getElementById('cartBadge').textContent = cnt;
            document.getElementById('cartCnt').textContent = cnt ? `(${cnt} item${cnt > 1 ? 's' : ''})` : ' ';
            document.getElementById('cartTotal').textContent = '₹' + tot.toLocaleString('en-IN');
            const c = document.getElementById('cartItems');
            if (!cart.length) { c.innerHTML = `<div class="csempty"><div class="emj">🛒</div><p>Your cart is empty</p><p style="font-size:.75rem;color:#ccc;margin-top:6px">Add some great styles!</p></div>`; return; }
            c.innerHTML = cart.map(p => `
    <div class="csitem">
      <div class="csitem-img"><img src="${p.img}" alt="${p.name}" onerror="this.src='https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=200&q=60'"/></div>
      <div class="csitem-d">
        <div class="csitem-n">${p.name}</div>
        <div class="csitem-v">${p.brand} · ${p.fabric}</div>
        <div class="csitem-p">₹${(p.price * p.qty).toLocaleString('en-IN')}</div>
        <div class="qctrl">
          <button class="qbtn" onclick="chgQ(${p.id},-1)">−</button>
          <span class="qn">${p.qty}</span>
          <button class="qbtn" onclick="chgQ(${p.id},1)">+</button>
          <span style="margin-left:auto;font-size:.7rem;color:#ccc;cursor:pointer;" onclick="chgQ(${p.id},-99)">Remove</span>
        </div>
      </div>
    </div>`).join('');
        }

        function chgQ(id, d) {
            const i = cart.findIndex(x => x.id === id);
            if (i < 0) return;
            cart[i].qty += d;
            if (cart[i].qty <= 0) cart.splice(i, 1);
            updCart();
        }

        function openCart() { document.getElementById('cartBg').classList.add('on'); document.getElementById('cartSidebar').classList.add('on'); }
        function closeCart() { document.getElementById('cartBg').classList.remove('on'); document.getElementById('cartSidebar').classList.remove('on'); }

        // WISHLIST
        function toggleWL(id, btn) {
            const idx = wishlist.indexOf(id);
            const p = prods.find(x => x.id === id);
            if (idx > -1) { wishlist.splice(idx, 1); btn.classList.remove('on'); btn.textContent = '♡'; toast(`Removed from wishlist`); }
            else { wishlist.push(id); btn.classList.add('on'); btn.textContent = '♥'; toast(`♥ Added to wishlist`); }
            updWLBadge();
        }

        function updWLBadge() {
            const b = document.getElementById('wlBadge');
            if (wishlist.length > 0) { b.style.display = 'flex'; b.textContent = wishlist.length; }
            else b.style.display = 'none';
        }

        function openWL() {
            document.getElementById('wlModal').classList.add('on');
            const body = document.getElementById('wlBody');
            document.getElementById('wlCount').textContent = wishlist.length ? `(${wishlist.length} items)` : '';
            if (!wishlist.length) { body.innerHTML = '<div class="wl-empty">Your wishlist is empty. Start adding favourite styles!</div>'; return; }
            body.innerHTML = wishlist.map(id => {
                const p = prods.find(x => x.id === id); return `
    <div class="wl-item">
      <img src="${p.img}" alt="${p.name}" onerror="this.src='https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&q=60'"/>
      <div class="wl-info">
        <div class="wl-iname">${p.name}</div>
        <div class="wl-iprice">₹${p.price.toLocaleString('en-IN')}</div>
        <div style="display:flex;gap:6px;margin-top:6px;">
          <span style="font-size:.62rem;color:var(--saffron);cursor:pointer;font-weight:600;" onclick="addCart(${p.id});closeWL()">+ Add to Cart</span>
          <span class="wl-rm" onclick="rmWL(${p.id})">✕ Remove</span>
        </div>
      </div>
    </div>`;
            }).join('');
        }

        function rmWL(id) {
            wishlist = wishlist.filter(x => x !== id);
            updWLBadge(); openWL();
        }
        function closeWL() { document.getElementById('wlModal').classList.remove('on'); }

        // SEARCH
        function openSrch() { document.getElementById('srchOv').classList.add('on'); setTimeout(() => document.getElementById('srchInp').focus(), 100); }
        function closeSrch() { document.getElementById('srchOv').classList.remove('on'); document.getElementById('srchInp').value = ''; document.getElementById('srchResults').innerHTML = ''; }
        function setSearch(v) { document.getElementById('srchInp').value = v; doSearch(v); }
        function doSearch(q) {
            const r = document.getElementById('srchResults');
            if (!q.trim()) { r.innerHTML = ''; return; }
            const res = prods.filter(p => p.name.toLowerCase().includes(q.toLowerCase()) || p.brand.toLowerCase().includes(q.toLowerCase()) || p.cat.toLowerCase().includes(q.toLowerCase()) || p.fabric.toLowerCase().includes(q.toLowerCase()));
            if (!res.length) { r.innerHTML = '<p style="color:rgba(255,255,255,.3);font-size:.85rem;">No results found</p>'; return; }
            r.innerHTML = res.slice(0, 8).map(p => `
    <div class="sr-card" onclick="addCart(${p.id});closeSrch();">
      <img src="${p.img}" alt="${p.name}" onerror="this.src='https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=200&q=60'"/>
      <div class="sr-info"><div class="sr-n">${p.name}</div><div class="sr-p">₹${p.price.toLocaleString('en-IN')}</div></div>
    </div>`).join('');
        }
        document.addEventListener('keydown', e => { if (e.key === 'Escape') { closeSrch(); closeWL(); closeCK(); } });

        // CHECKOUT
        function openCheckout() {
            closeCart();
            if (!cart.length) { toast('⚠ Cart is empty!'); return; }
            document.getElementById('ckModal').classList.add('on');
            const tot = cart.reduce((s, x) => s + x.price * x.qty, 0);
            const disc = Math.round(tot * .1);
            document.getElementById('ckSub').textContent = '₹' + tot.toLocaleString('en-IN');
            document.getElementById('ckShip').textContent = tot >= 999 ? 'FREE' : '₹99';
            document.getElementById('ckDisc').textContent = '-₹' + disc.toLocaleString('en-IN');
            document.getElementById('ckTot').textContent = '₹' + (tot - disc + (tot < 999 ? 99 : 0)).toLocaleString('en-IN');
            document.getElementById('ckOrderItems').innerHTML = cart.map(p => `
    <div class="ck-order-item">
      <div class="ck-oimg"><img src="${p.img}" alt="${p.name}" onerror="this.src='https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=200&q=60'"/></div>
      <div><div class="ck-on">${p.name}</div><div class="ck-ov">${p.brand} · Qty ${p.qty}</div><div class="ck-op">₹${(p.price * p.qty).toLocaleString('en-IN')}</div></div>
    </div>`).join('');
        }
        function closeCK() { document.getElementById('ckModal').classList.remove('on'); }
        function selPay(el, m) { document.querySelectorAll('.popt').forEach(p => p.classList.remove('on')); el.classList.add('on'); selPayment = m; }
        function placeOrder() {
            const n = document.getElementById('ck_name').value.trim();
            const ph = document.getElementById('ck_phone').value.trim();
            const pin = document.getElementById('ck_pin').value.trim();
            const addr = document.getElementById('ck_addr').value.trim();
            if (!n || !ph || !pin || !addr) { toast('⚠ Please fill all required fields'); return; }
            document.getElementById('ckLeft').innerHTML = `<div class="success-screen on">
    <div class="success-check">🎉</div>
    <div class="success-title">Order Placed!</div>
    <p class="success-sub">Your order has been confirmed.<br>Order ID: <strong>#ZAF${Date.now().toString().slice(-6)}</strong><br><br>Expected delivery: <strong>3–5 business days</strong><br>You'll receive SMS & email updates.</p>
    <button class="ck-submit" style="max-width:240px;margin:1.5rem auto 0;" onclick="closeCK();cart=[];updCart();">Continue Shopping →</button>
  </div>`;
        }

        // NEWSLETTER
        function subNews() {
            const e = document.getElementById('newsEmail').value.trim();
            if (!e || !e.includes('@')) { toast('⚠ Please enter a valid email'); return; }
            toast('🎉 Subscribed! Check email for 15% off code');
            document.getElementById('newsEmail').value = '';
        }

        // CURSOR
        const cur = document.getElementById('cur'), cur2 = document.getElementById('cur2');
        let mx = 0, my = 0, rx = 0, ry = 0;
        document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; cur.style.left = mx + 'px'; cur.style.top = my + 'px'; });
        (function anim() { rx += (mx - rx) * .12; ry += (my - ry) * .12; cur2.style.left = rx + 'px'; cur2.style.top = ry + 'px'; requestAnimationFrame(anim); })();
        document.querySelectorAll('a,button,.pcard,.cat-card,.feat-item,.tcard').forEach(el => {
            el.addEventListener('mouseenter', () => { cur.style.width = '14px'; cur.style.height = '14px'; cur2.style.width = '56px'; cur2.style.height = '56px'; });
            el.addEventListener('mouseleave', () => { cur.style.width = '10px'; cur.style.height = '10px'; cur2.style.width = '40px'; cur2.style.height = '40px'; });
        });

        // SCROLL
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) document.getElementById('hdr').classList.add('scrolled');
            else document.getElementById('hdr').classList.remove('scrolled');
            const b = document.getElementById('btop');
            if (window.scrollY > 500) b.classList.add('on'); else b.classList.remove('on');
        });

        // REVEAL
        const ro = new IntersectionObserver(ents => ents.forEach(e => { if (e.isIntersecting) e.target.classList.add('vis'); }), { threshold: .1 });
        document.querySelectorAll('.rv').forEach(el => ro.observe(el));

        // TOAST
        let tt;
        function toast(msg) {
            const t = document.getElementById('toast');
            document.getElementById('toastMsg').textContent = msg;
            t.classList.add('on'); clearTimeout(tt);
            tt = setTimeout(() => t.classList.remove('on'), 2800);
        }

        // MOBILE NAV
        function openMnav() { document.getElementById('mnav').classList.add('on'); }
        function closeMnav() { document.getElementById('mnav').classList.remove('on'); }

        // INIT
        renderProds('All');
        updCart();
        setTimeout(() => document.getElementById('ldr').classList.add('out'), 2400);
