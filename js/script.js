const listGames = [
    { 
        id: 1, 
        name: "Liên Quân Mobile", 
        genre: "MOBA", 
        url: "https://play.google.com/store/apps/details?id=com.garena.game.kgvn", 
        img: "../assets/lien-quan.jpg", 
        desc: "Tựa game chiến thuật đấu trường 5v5 đỉnh cao danh tiếng của Garena tại Việt Nam." 
    },
    { 
        id: 2, 
        name: "PUBG Mobile", 
        genre: "Sinh tồn", 
        url: "https://play.google.com/store/apps/details?id=com.vng.pubgmobile", 
        img: "../assets/pupg.jpg", 
        desc: "Game bắn súng sinh tồn nghẹt thở 100 người chơi chân thực đến từng chi tiết." 
    },
    { 
        id: 3, 
        name: "Free Fire", 
        genre: "Bắn súng", 
        url: "https://play.google.com/store/apps/details?id=com.dts.freefireth", 
        img: "../assets/ff.jpg", 
        desc: "Tựa game sinh tồn nhịp độ nhanh, mỗi trận đấu sống còn kéo dài vỏn vẹn 10 phút." },
    { id: 4, 
        name: "Subway Surfers", 
        genre: "Phổ thông", 
        url: "https://play.google.com/store/apps/details?id=com.kiloo.subwaysurf", 
        img: "../assets/ss.jpg", 
        desc: "Chạy trốn không ngừng nghỉ trên đường ray và né tránh gã thanh tra khó tính." 
    },
    { 
        id: 5, 
        name: "Candy Crush Saga", 
        genre: "Câu đố", 
        url: "https://play.google.com/store/apps/details?id=com.king.candycrushsaga", 
        img: "../assets/ccs.jpg", 
        desc: "Xếp kẹo ngọt huyền thoại với hàng ngàn màn chơi thách thức trí tuệ của bạn." 
    },
    { 
        id: 6, 
        name: "Minecraft", 
        genre: "Mô phỏng", 
        url: "https://play.google.com/store/apps/details?id=com.mojang.minecraftpe", 
        img: "../assets/mncraft.jpg", 
        desc: "Xây dựng thế giới của riêng bạn từ những khối vuông kỳ diệu không giới hạn." 
    },
    { 
        id: 7, 
        name: "Roblox", 
        genre: "Thế giới mở", 
        url: "https://play.google.com/store/apps/details?id=com.roblox.client", 
        img: "../assets/roblox.jpg", 
        desc: "Vũ trụ ảo tối thượng cho phép bạn chơi, sáng tạo và kết nối mọi lúc mọi nơi." 
    },
    { 
        id: 8, 
        name: "Clash of Clans", 
        genre: "Chiến thuật", 
        url: "https://play.google.com/store/apps/details?id=com.supercell.clashofclans", 
        img: "../assets/clan.jpg", 
        desc: "Xây dựng ngôi làng, huấn luyện binh lính và tham gia các cuộc chiến bang hội rực lửa." 
    },
    { 
        id: 9, 
        name: "Asphalt 9: Legends", 
        genre: "Đua xe", 
        url: "https://play.google.com/store/apps/details?id=com.gameloft.android.ANMP.GloftA9HM", 
        img: "../assets/A9.jpg", 
        desc: "Trải nghiệm xé gió cùng các siêu xe tốc độ đẳng cấp thế giới đến từ Gameloft." 
    },
    { 
        id: 10, 
        name: "Genshin Impact", 
        genre: "Nhập vai", 
        url: "https://play.google.com/store/apps/details?id=com.miHoYo.GenshinImpact", 
        img: "../assets/GShin.jpg", 
        desc: "Hành trình khám phá thế giới mở Teyvat kỳ ảo đầy bí ẩn cùng đồ họa anime đỉnh cao." 
    }
];

document.addEventListener("DOMContentLoaded", () => {
    const listContainer = document.getElementById("game-list-container");
    const detailContent = document.getElementById("detail-content");

    // XỬ LÝ TRANG SẢN PHẨM (KHO GAME)
    if (listContainer) {
        listGames.forEach(game => {
            listContainer.innerHTML += `
                <div class="col-lg-3 col-md-6">
                    <div class="card h-100 game-card text-light shadow-sm">
                        <img src="${game.img}" class="card-img-top" alt="${game.name}" style="height: 180px; object-fit: cover;">
                        <div class="card-body d-flex flex-column">
                            <span class="badge bg-info text-dark mb-2 align-self-start fw-bold">${game.genre}</span>
                            <h5 class="card-title fw-bold">${game.name}</h5>
                            <p class="card-text text-secondary text-truncate flex-grow-1 small">${game.desc}</p>
                            <div class="d-flex gap-2 mt-3">
                                <a href="chi-tiet.html?id=${game.id}" class="btn btn-sm btn-outline-info flex-grow-1 fw-bold">Chi Tiết</a>
                                <a href="${game.url}" target="_blank" class="btn btn-sm btn-success glow-btn"><i class="fa-brands fa-google-play"></i> Tải</a>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        });
    }

    // XỬ LÝ TRANG CHI TIẾT
    if (detailContent) {
        const params = new URLSearchParams(window.location.search);
        const gameId = parseInt(params.get("id"));
        const targetGame = listGames.find(g => g.id === gameId);

        if (targetGame) {
            detailContent.innerHTML = `
                <div class="col-md-5 text-center">
                    <img src="${targetGame.img}" alt="${targetGame.name}" class="img-fluid rounded-4 shadow border border-secondary" style="max-height: 400px; width: 100%; object-fit: cover;">
                </div>
                <div class="col-md-7">
                    <span class="badge bg-info text-dark text-uppercase fw-bold mb-2">${targetGame.genre}</span>
                    <h1 class="display-4 fw-bold mb-3">${targetGame.name}</h1>
                    <p class="lead text-secondary mb-4" style="line-height: 1.8;">${targetGame.desc} Bản cài đặt chính thức an toàn từ cửa hàng ứng dụng.</p>
                    <a href="${targetGame.url}" target="_blank" class="btn btn-success btn-lg px-5 py-3 fw-bold rounded-pill shadow-lg glow-btn">
                        <i class="fa-brands fa-google-play me-2"></i>TẢI NGAY TRÊN CH PLAY
                    </a>
                </div>
            `;
        } else {
            detailContent.innerHTML = `<div class="text-center w-100 py-5"><h3 class="text-danger">Không tìm thấy thông tin trò chơi!</h3></div>`;
        }
    }
});