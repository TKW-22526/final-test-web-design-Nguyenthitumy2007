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
        description: "PUBG Mobile là tựa game bắn súng sinh tồn (Battle Royale) số một thế giới. 100 người chơi nhảy dù xuống một hòn đảo bị cô lập và chiến đấu đến người cuối cùng sống sót.",
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
        description: "Liên Minh Huyền Thoại: Tốc Chiến mang lối chơi MOBA 5v5 đậm tính chiến thuật và kỹ năng của LMHT PC lên nền tảng di động một cách mượt mà, hoàn hảo nhất.",
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
    }
];

// Hàm tạo HTML cho 1 thẻ game (Sử dụng lại ở nhiều trang)
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