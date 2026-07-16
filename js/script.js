// Khởi tạo danh sách 10 game chất lượng cao
const gamesData = [
    {
        id: 1,
        title: "PUBG Mobile",
        category: "hanh-dong",
        categoryName: "Hành động",
        rating: "4.5★",
        image: "../assets/pupg.jpg",
        downloadUrl: "https://play.google.com/store/apps/details?id=com.tencent.ig",
        description: "PUBG MOBILE VN là tựa game bắn súng sinh tồn Battle Royale huyền thoại trên di động do Tencent & BlueHole phát triển và VNG phát hành độc quyền tại Việt Nam, đưa 100 người chơi vào một trận chiến sinh tử khốc liệt trên đảo hoang để tìm ra người sống sót cuối cùng. Sở hữu đồ họa Unreal Engine 4 và âm thanh chuẩn HD sống động, trò chơi mang đến trải nghiệm hành động chân thực với kho vũ khí, trang bị, xe cộ phong phú cùng tính năng giao lưu voice chat toàn cầu và hệ thống leo rank đầy thử thách. Đặc biệt, game đã được tối ưu dung lượng cốt lõi chỉ còn 600 MB cho phép tùy chọn tải tiện ích, hỗ trợ đa dạng cấu hình thiết bị (khuyến nghị Android 5.1.1 trở lên và 2 GB RAM) để đảm bảo trải nghiệm mượt mà cho game thủ.",
        features: ["Đồ họa Unreal Engine 4 cực đẹp", "Nhiều bản đồ đa dạng", "Chế độ chơi co-op cùng bạn bè cực vui"]
    },
    {
        id: 2,
        title: "Liên Quân Mobile",
        category: "chien-thuat",
        categoryName: "Chiến thuật",
        rating: "4.7★",
        image: "../assets/lien-quan.jpg",        
        downloadUrl: "https://play.google.com/store/apps/details?id=com.garena.game.kgvn",
        description: "Garena Liên Quân Mobile là game đấu trường trận chiến trực tuyến nhiều người chơi (MOBA) có đồ họa 3D tuyệt đỉnh cùng lối chơi đề cao kỹ năng và chiến thuật đồng đội.",
        features: ["Bản đồ 5v5 cổ điển", "Hơn 100 tướng đa dạng vai trò", "Trận đấu nhanh gọn 12-15 phút"]
    },
    {
        id: 3,
        title: "Genshin Impact",
        category: "nhap-vai",
        categoryName: "Nhập vai",
        rating: "4.6★",
        image: "../assets/GShin.jpg",        
        downloadUrl: "https://play.google.com/store/apps/details?id=com.miHoYo.GenshinImpact",
        description: "Genshin Impact đưa bạn vào thế giới mở Teyvat tuyệt đẹp. Bạn sẽ đóng vai Nhà Lữ Hành đi tìm người thân bị thất lạc và khám phá những bí ẩn của các vị thần nguyên tố.",
        features: ["Thế giới mở rộng lớn không giới hạn", "Hệ thống chiến đấu phản ứng nguyên tố", "Cốt truyện sâu sắc, âm nhạc tuyệt hảo"]
    },
    {
        id: 4,
        title: "FIFA Mobile",
        category: "the-thao",
        categoryName: "Thể thao",
        rating: "4.4★",
        image: "../assets/FIFA.jpg",
        downloadUrl: "https://play.google.com/store/apps/details?id=com.ea.gp.fifamobile",
        description: "Xây dựng đội hình trong mơ Ultimate Team của bạn và so tài trực tiếp với các đối thủ trên khắp thế giới trong tựa game mô phỏng bóng đá chân thực nhất.",
        features: ["Bản quyền hơn 15,000 cầu thủ thật", "Đồ họa nâng cấp 60 FPS mượt mà", "Chế độ quản lý câu lạc bộ chuyên nghiệp"]
    },
    {
        id: 5,
        title: "Call of Duty: Mobile",
        category: "hanh-dong",
        categoryName: "Hành động",
        rating: "4.8★",
        image: "../assets/call.jpg",        
        downloadUrl: "https://play.google.com/store/apps/details?id=com.garena.game.codm",
        description: "Call of Duty: Mobile mang lại trải nghiệm bắn súng góc nhìn thứ nhất (FPS) đỉnh cao ngay trên điện thoại với các bản đồ huyền thoại và chế độ Battle Royale 100 người.",
        features: ["Trải nghiệm súng đạn siêu chân thực", "Nhiều chế độ chơi Multiplayer hấp dẫn", "Hệ thống tùy biến vũ khí Gunsmith chuyên sâu"]
    },
    {
        id: 6,
        title: "Clash of Clans",
        category: "chien-thuat",
        categoryName: "Chiến thuật",
        rating: "4.6★",
        image: "../assets/clan.jpg",
        downloadUrl: "https://play.google.com/store/apps/details?id=com.supercell.clashofclans",
        description: "Hãy gia nhập hàng triệu người chơi trên toàn thế giới để xây dựng làng mạc, thành lập hội và tham gia vào những trận Bang Hội Chiến hoành tráng đầy tính chiến thuật.",
        features: ["Xây dựng và bảo vệ căn cứ của riêng bạn", "Huấn luyện quân đội độc đáo", "Tham gia Clan War liên lục địa"]
    },
    {
        id: 7,
        title: "Asphalt 9: Legends",
        category: "the-thao",
        categoryName: "Thể thao",
        rating: "4.5★",
        image: "../assets/A9.jpg",        
        downloadUrl: "https://play.google.com/store/apps/details?id=com.gameloft.android.ANMP.GloftA9HM",
        description: "Trở thành huyền thoại đua xe đường phố bằng cách lái những siêu xe thực tế đỉnh nhất từ Ferrari, Porsche, Lamborghini... trên các cung đường ngoạn mục.",
        features: ["Công nghệ đồ họa HDR như console", "Cơ chế điều khiển TouchDrive thông minh", "Nâng cấp và tùy biến diện mạo siêu xe"]
    },
    {
        id: 8,
        title: "Roblox",
        category: "nhap-vai",
        categoryName: "Nhập vai",
        rating: "4.5★",
        image: "../assets/roblox.jpg",        
        downloadUrl: "https://play.google.com/store/apps/details?id=com.roblox.client",
        description: "Roblox là vũ trụ ảo đỉnh cao cho phép bạn chơi, sáng tạo và chia sẻ trải nghiệm với bạn bè. Khám phá hàng triệu thế giới độc đáo do chính cộng đồng toàn cầu xây dựng.",
        features: ["Hàng triệu thế giới và chế độ chơi do người dùng sáng tạo", "Tự do tùy chỉnh ngoại hình và trang phục nhân vật", "Hỗ trợ chơi đa nền tảng PC, di động và console"]
    },    
    {
        id: 9,
        title: "Tốc Chiến ",
        category: "chien-thuat",
        categoryName: "Chiến thuật",
        rating: "4.3★",
        image: "../assets/LMHT.jpg",        
        downloadUrl: "https://play.google.com/store/apps/details?id=com.riotgames.league.wildriftvn",
        description: "Liên Minh Huyền Thoại: Tốc Chiến là tựa game MOBA 5v5 trên di động được tái xây dựng hoàn toàn từ phiên bản PC của Riot Games, mang đến trải nghiệm chiến đấu tốc độ cao với hệ thống điều khiển mượt mà. Các đặc điểm nổi bật: Đề cao kỹ năng và chiến thuật: Trò chơi đòi hỏi sự linh hoạt trong tư duy chiến thuật, khả năng tung kỹ năng định hướng chính xác và phối hợp đồng đội để lật ngược thế cờ. Sát cánh cùng bạn bè: Người chơi dễ dàng lập đội từ 2, 3 đến 5 người để cùng nhau leo hạng và phá hủy Nhà Chính của đối phương. Bể tướng phong phú: Sở hữu danh sách tướng đa dạng với nhiều phong cách chiến đấu khác nhau, đáp ứng mọi sở thích và lối chơi của game thủ. ",
        features: ["Cạnh tranh công bằng dựa trên kỹ năng", "Thời gian trận đấu tối ưu trên di động", "Cập nhật tướng liên tục"]
    },
    {
        id: 10,
        title: "Minecraft",
        category: "nhap-vai",
        categoryName: "Nhập vai",
        rating: "4.6★",
        image: "../assets/mncraft.jpg",        
        downloadUrl: "https://play.google.com/store/apps/details?id=com.mojang.minecraftpe",
        description: "Khám phá những thế giới vô tận và xây dựng mọi thứ từ những ngôi nhà đơn sơ nhất đến những tòa lâu đài nguy nga tráng lệ nhất trong chế độ Sáng tạo.",
        features: ["Chế độ Sinh tồn đầy thử thách", "Chế độ Sáng tạo không giới hạn tài nguyên", "Chơi cùng bạn bè đa nền tảng"]
    },
    {
        id: 11,
        title: "Garena Free Fire",
        category: "hanh-dong",
        categoryName: "Hành động",
        rating: "4.5★",
        image: "../assets/ff.jpg",        
        downloadUrl: "https://play.google.com/store/apps/details?id=com.dts.freefireth",
        description: "Free Fire là tựa game bắn súng sinh tồn trên di động nổi tiếng toàn cầu, đưa người chơi vào các trận chiến nhịp độ nhanh kéo dài 10 phút cùng 49 đối thủ khác trên một hoang đảo nhằm tìm ra người sống sót cuối cùng. Trò chơi sở hữu lối chơi sinh tồn thuần túy từ nhặt vũ khí, chạy bo, chiếm thính cho đến các chiến thuật phục kích, ẩn nấp, bên cạnh chế độ Tử Chiến 4v4 tốc độ cao cực kỳ kịch tính. Với đồ họa chân thực, mượt mà, dễ điều khiển cùng tính năng lập tổ đội 4 người hỗ trợ voice chat trực tiếp, game mang lại trải nghiệm phối hợp đồng đội đỉnh cao để cùng nhau chinh phục danh hiệu Booyah.",
        features: ["Nhịp độ trận đấu cực nhanh, gay cấn", "Hệ thống nhân vật có kỹ năng riêng biệt", "Đồ họa mượt mà tối ưu cho mọi cấu hình máy"]
    },
    {
        id: 12,
        title: "Candy Crush Saga",
        category: "giai-tri",
        categoryName: "Giải trí",
        rating: "4.6★",
        image: "../assets/ccs.jpg",        
        downloadUrl: "https://play.google.com/store/apps/details?id=com.king.candycrushsaga",
        description: "Bắt đầu chuyến phiêu lưu xếp kẹo ngọt huyền thoại ngọt ngào nhất! Ghép 3 hoặc nhiều viên kẹo cùng màu để chinh phục hàng ngàn cấp độ thử thách giải đố vui nhộn.",
        features: ["Hàng vạn màn chơi phong phú được cập nhật mỗi tuần", "Nhiều chế độ giải đố cực kỳ hack não", "Đồ họa rực rỡ và âm thanh vui tai"]
    },
    {
        id: 13,
        title: "Subway Surfers",
        category: "giai-tri",
        categoryName: "Giải trí",
        rating: "4.6★",
        image: "../assets/ss.jpg",         
        downloadUrl: "https://play.google.com/store/apps/details?id=com.kiloo.subwaysurf",
        description: "Hãy chạy thật nhanh hết sức có thể! Né tránh những đoàn tàu đang lao tới, giúp Jake, Tricky và Fresh chạy trốn khỏi gã thanh tra cục cằn cùng con chó của lão.",
        features: ["Lối chơi lướt ván đường ray vô tận hấp dẫn", "Đồ họa HD đầy màu sắc và sống động", "Nhiều trang phục và nhân vật độc đáo để mở khóa"]
    },
    {
        id: 14,
        title: "Plants vs. Zombies",
        category: "chien-thuat",
        categoryName: "Chiến thuật",
        rating: "4.4★",
        image: "../assets/plan-Zbi.jpg",        
        downloadUrl: "https://play.google.com/store/apps/details?id=com.ea.game.pvz2_row&pcampaignid=web_share",
        description: "Hãy sẵn sàng bảo vệ ngôi nhà của bạn khi một nhóm zombie vui nhộn chuẩn bị xâm chiếm! Sử dụng kho vũ khí gồm 49 loại cây đột biến để tiêu diệt 26 loại zombie.",
        features: ["Lối chơi thủ thành chiến thuật kinh điển gây nghiện", "Chinh phục hơn 50 cấp độ phiêu lưu", "Nhiều minigame giải đố vui nhộn đi kèm"]
    },
    {
    id: 15,
        title: "Block Blast!",
        category: "giai-tri",
        categoryName: "Giải trí",
        rating: "4.7★",
        image: "../assets/block.jpg",        
        downloadUrl: "https://play.google.com/store/apps/details?id=com.blockblast.vn&pcampaignid=web_share",
        description: "Block Blast là một tựa game xếp hình, ghép gạch cực cuốn và dễ chơi trên lưới 8x8, mang đến trải nghiệm vừa thư giãn vừa rèn luyện trí tuệ mọi lúc mọi nơi nhờ tính năng chơi ngoại tuyến không cần mạng. Người chơi chỉ cần kéo thả các khối màu hợp lý để hoàn thành hàng hoặc cột, tạo ra các chuỗi combo nổ tung rực rỡ nhằm ghi điểm số kỷ lục. Với nhiều chế độ chơi hấp dẫn như Chế độ phiêu lưu qua từng cấp độ riêng biệt, Thử thách cập nhật hàng tuần cùng mẹo chơi đòi hỏi tính toán bước đi thông minh để tránh tràn lưới, trò chơi được tối ưu hóa mượt mà trên mọi thiết bị di động để người chơi có thể giải trí thả ga bất cứ lúc nào.",
        features: ["Lối chơi giải đố khối gạch cổ điển kết hợp sáng tạo", "Không cần kết nối Wifi, chơi ngoại tuyến mọi lúc", "Đồ họa và hiệu ứng nổ khối vô cùng bắt mắt"]
    },
    {
        id: 16,
        title: "Play Together VNG",
        category: "nhap-vai",
        categoryName: "Nhập vai",
        rating: "4.4★",
        image: "../assets/Play-to.jpg", 
        downloadUrl: "https://play.google.com/store/apps/details?id=com.vng.playtogether",
        description: "Play Together là một tựa game thế giới ảo sôi động, nơi bạn có thể kết nối với bạn bè toàn cầu thông qua loạt hoạt động giải trí đa dạng như mua sắm, chơi mini-game tại Game Center, trốn tìm thây ma, câu cá, săn bắt côn trùng và khai thác thiên thạch để chế tạo vật phẩm giới hạn. Không chỉ dừng lại ở việc lập đội phiêu lưu đến các vùng đất mới hay truy tìm kho báu trên đảo hoang, trò chơi còn đề cao tính cá nhân hóa khi cho phép bạn tự do định hình phong cách bằng trang phục, siêu xe, thú cưng, cũng như thỏa sức sáng tạo để trang trí nhà cửa và tổ chức những bữa tiệc tại gia độc đáo theo ý thích.",
        features: ["Vũ trụ ảo mở rộng lớn tương tác thời gian thực", "Tự do trang trí ngôi nhà và sắm sửa siêu xe", "Nuôi dưỡng và huấn luyện thú cưng đáng yêu"]
    },
    {
        id: 17,
        title: "Thế Giới của Bé Gấu Trúc",
        category: "giai-tri",
        categoryName: "Giải trí",
        rating: "4.3★",
        image: "../assets/gau-truc.jpg", 
        downloadUrl: "https://play.google.com/store/apps/details?id=com.sinyee.babybus.world",
        description: "Trò chơi giáo dục bổ ích và an toàn thuộc series BabyBus dành cho trẻ nhỏ. Giúp trẻ khám phá thiên nhiên, học cách nấu ăn, quản lý siêu thị, và nuôi dưỡng lòng nhân ái thông qua các hoạt động tương tác.",
        features: ["Hơn 100 khu vực tương tác giáo dục thú vị", "Thiết kế đồ họa hoạt hình dễ thương, tươi sáng", "Học tập lành mạnh qua các trò chơi nhỏ đa dạng"]
    },
    {
        id: 18,
        title: "Zombie Tsunami",
        category: "hanh-dong",
        categoryName: "Hành động",
        rating: "4.6★",
        image: "../assets/zobi.jpg", 
        downloadUrl: "https://play.google.com/store/apps/details?id=net.mobigame.zombietsunami",
        description: "Nổi loạn khắp thành phố với binh đoàn thây ma của bạn! Biến những người dân đi đường thành zombie để tạo nên một cơn sóng thần thây ma khổng lồ, phá hủy mọi rào cản và phương tiện.",
        features: ["Lối chơi chạy vô tận (Runner) độc đáo và hài hước", "Hơn 10 loại biến dị sức mạnh thú vị (Ninja, Rồng, UFO...)", "Hơn 300 nhiệm vụ thử thách cực kỳ cuốn hút"]
    },
    {
        id: 19,
        title: "Khu Vườn Trên Mây - ZingPlay",
        category: "giai-tri",
        categoryName: "Giải trí",
        rating: "4.2★",
        image: "../assets/KVTM.jpg",
        downloadUrl: "https://play.google.com/store/apps/details?id=vn.kvtm.js&pcampaignid=web_share",
        description: "Trải nghiệm game nông trại huyền thoại của thế hệ trẻ Việt Nam. Bạn sẽ đồng hành cùng Jack và Red Bean xây dựng khu vườn lung linh trên những tầng mây, trồng hoa, thu hoạch và giao thương.",
        features: ["Đồ họa mang phong cách cổ tích Việt Nam dễ mến", "Trồng các loại cây hoa thần kỳ và chế tạo máy sản xuất", "Giao thương, kết bạn bốn phương qua hệ thống bang hội"]
    },
    {
        id: 20,
        title: "ZingSpeed Mobile",
        category: "the-thao",
        categoryName: "Thể thao",
        rating: "4.4★",
        image: "../assets/Zing.jpg",
        downloadUrl: "https://play.google.com/store/apps/details?id=com.vng.speedvn&pcampaignid=web_share",
        description: "Car Race Master 3D – ZingSpeed Mobile là tựa game đua xe ô tô số 1 Việt Nam, khéo léo kết hợp giữa những cuộc đua tốc độ kịch tính và thế giới thời trang, hẹn hò, mạng xã hội đầy sắc màu. Trò chơi mang đến trải nghiệm lái siêu xe chân thực qua nhiều chế độ đua (Đua Tốc Độ, Đua Đạo Cụ, Đua Đội) cùng các giải đấu thể thao sôi động, đặc biệt là sự kiện đồng hành cùng không khí WC 2026 đầy bùng nổ. Không chỉ dừng lại ở đường đua, game còn mở ra một 'mini world' thông qua chế độ Trang viên — nơi người chơi có thể tự do xây dựng nhà cửa, trồng trọt, nuôi thú cưng, đồng thời thỏa sức thể hiện cá tính với kho thời trang phong phú, kết bạn, hẹn hò và giao lưu trong một cộng đồng năng động, trẻ trung.",
        features: ["Thao tác Drift nguyên bản mượt mà cực sướng tay", "Hàng trăm mẫu siêu xe phân khối lớn và thời trang sành điệu", "Chế độ đua đạo cụ giải trí và đua xếp hạng nảy lửa"]
    },
    {
        id: 21,
        title: "Talking Tom Time Rush",
        category: "giai-tri",
        categoryName: "Giải trí",
        rating: "4.5★",
        image: "../assets/tom.jpg",        
        downloadUrl: "https://play.google.com/store/apps/details?id=com.outfit7.talkingtomtimerush",
        description: "Đồng hành cùng Talking Tom, Angela, Hank, Ben và Ginger tham gia vào cuộc rượt đuổi xuyên không gian và thời gian cực kỳ kỳ thú để ngăn chặn lũ mèo Rakoon tinh nghịch.",
        features: ["Khám phá thế giới đa vũ trụ rực rỡ sắc màu", "Sử dụng các phương tiện di chuyển siêu tốc độ độc lạ", "Mở khóa những bộ trang phục siêu anh hùng ngộ nghĩnh"]
    },
    {
        id: 22,
        title: "Fruit Ninja Classic",
        category: "giai-tri",
        categoryName: "Giải trí",
        rating: "4.4★",
        image: "../assets/FNC.jpg",        
        downloadUrl: "https://play.google.com/store/apps/details?id=com.halfbrick.fruitninja&pcampaignid=web_share",
        description: "Vuốt ngón tay để chém những loại hoa quả tươi ngon bay trên màn hình và tránh xa những quả bom nguy hiểm! Game chém hoa quả kinh điển giúp rèn luyện phản xạ tay mắt cực tốt.",
        features: ["Ba chế độ chơi gây nghiện: Classic, Zen và Arcade", "Hệ thống lưỡi kiếm và phông nền chém đa hiệu ứng đẹp mắt", "Đơn giản, trực quan, giải tỏa căng thẳng hiệu quả"]
    },
    {
        id: 23,
        title: "Cut the Rope",
        category: "giai-tri",
        categoryName: "Giải trí",
        rating: "4.6★",
        image: "../assets/cut.jpg",        
        downloadUrl: "https://play.google.com/store/apps/details?id=com.zeptolab.ctr.ads",
        description: "Cắt các sợi dây thừng một cách khéo léo để đưa viên kẹo ngọt ngào trực tiếp vào miệng của chú quái vật nhỏ Om Nom siêu dễ thương. Trò chơi giải đố vật lý đầy thử thách và thông minh.",
        features: ["Lối chơi giải đố vật lý sáng tạo đạt nhiều giải thưởng quốc tế", "Hàng trăm cấp độ thử thách tăng dần độ khó", "Cốt truyện hoạt hình ngắn Om Nom cực kỳ vui nhộn"]
    },
    {
        id: 24,
        title: "Honkai Impact 3-VN",
        category: "nhap-vai",
        categoryName: "Nhập vai",
        rating: "4.6★",
        image: "../assets/honkai.jpg",           
        downloadUrl: "https://play.google.com/store/apps/details?id=com.miHoYo.bh3oversea",
        description: "Tựa game hành động nhập vai phong cách Anime đỉnh cao của miHoYo. Chỉ huy các Valkyrie xinh đẹp chiến đấu chống lại thế lực 'Honkai' tàn phá thế giới bằng các đòn combo mãn nhãn.",
        features: ["Đồ họa 3D chuẩn Anime Nhật Bản đẹp không tì vết", "Hệ thống chiến đấu Hack 'n' Slash dồn dập, hồi hộp", "Cốt truyện sâu sắc lấy đi nhiều nước mắt của người chơi"]
    },
    {
        id: 25,
        title: "Đấu Trường Chân Lý ",
        category: "chien-thuat",
        categoryName: "Chiến thuật",
        rating: "4.5★",
        image: "../assets/ĐTCL.jpg",         
        downloadUrl: "https://play.google.com/store/apps/details?id=com.riotgames.league.teamfighttacticsvn",
        description: "Đấu Trường Chân Lý (ĐTCL) là tựa game chiến thuật tự động (Auto Battler) đa nền tảng (PC, Mac, di động), nơi người chơi cạnh tranh PvP để trở thành Chiến Thuật Gia trụ lại cuối cùng thông qua việc xây dựng đội hình từ một bể tướng chung, đòi hỏi tư duy xoay bài và ứng biến linh hoạt. Trò chơi luôn mang lại trải nghiệm mới mẻ nhờ các bản cập nhật thay đổi chủ đề và cơ chế liên tục theo mùa, kết hợp với hệ thống xếp hạng cạnh tranh từ Sắt đến Thách Đấu đầy thử thách. Bên cạnh yếu tố chiến thuật kịch tính cùng bạn bè, ĐTCL còn cho phép người chơi khẳng định phong cách cá nhân thông qua việc sưu tầm và tùy biến các Linh Thú, chưởng lực, hiệu ứng kết liễu và sàn đấu độc đáo.",
        features: ["Cạnh tranh chiến thuật đỉnh cao, không pay-to-win", "Cập nhật các mùa giải (Set) mới liên tục đổi mới meta", "Hệ thống Linh Thú và sàn đấu vô cùng cá tính, bắt mắt"]
    }
];

function createGameCard(game, pathPrefix = "") {
    return `
        <div class="col-md-4 col-sm-6 mb-4">
            <div class="card game-card h-100 text-white">
                <img src="${game.image}" class="card-img-top" alt="${game.title}">
                <div class="card-body d-flex flex-column">
                    <div class="d-flex justify-content-between align-items-center mb-2">
                        <span class="badge bg-danger">${game.categoryName}</span>
                        <small class="text-warning">${game.rating}</small>
                    </div>
                    <h5 class="card-title fw-bold">${game.title}</h5>
                    <p class="card-text text-secondary flex-grow-1">${game.description.substring(0, 100)}...</p>
                    <div class="mt-3 d-flex gap-2">
                        <a href="${pathPrefix}html/chi-tiet.html?id=${game.id}" class="btn btn-outline-light btn-sm flex-grow-1">Chi tiết</a>
                        <a href="${game.downloadUrl}" target="_blank" class="btn btn-danger btn-sm"><i class="bi bi-download"></i> Tải ngay</a>
                    </div>
                </div>
            </div>
        </div>
    `;
}