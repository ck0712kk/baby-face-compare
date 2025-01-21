document.addEventListener('DOMContentLoaded', function() {
    const fileInputs = {
        father: document.getElementById('fatherPhoto'),
        mother: document.getElementById('motherPhoto'),
        baby: document.getElementById('babyPhoto')
    };

    const previews = {
        father: document.getElementById('fatherPreview'),
        mother: document.getElementById('motherPreview'),
        baby: document.getElementById('babyPreview')
    };

    // 處理照片上傳和預覽
    Object.keys(fileInputs).forEach(key => {
        fileInputs[key].addEventListener('change', function(e) {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    previews[key].style.backgroundImage = `url(${e.target.result})`;
                }
                reader.readAsDataURL(file);
            }
        });
    });

    // 分析按鈕點擊事件
    document.getElementById('analyzeBtn').addEventListener('click', function() {
        // 檢查是否所有照片都已上傳
        const allPhotosUploaded = Object.values(fileInputs).every(input => input.files.length > 0);
        
        if (!allPhotosUploaded) {
            alert('請上傳所有照片！');
            return;
        }

        // 顯示結果區域
        document.getElementById('result').style.display = 'block';

        // 模擬分析過程（實際應用中這裡應該要接入真實的臉部比對 API）
        const fatherSimilarity = Math.random() * 100;
        const motherSimilarity = 100 - fatherSimilarity;

        // 更新相似度條
        document.getElementById('fatherSimilarity').style.width = `${fatherSimilarity}%`;
        document.getElementById('motherSimilarity').style.width = `${motherSimilarity}%`;
        
        // 更新百分比文字
        document.getElementById('fatherPercentage').textContent = `${Math.round(fatherSimilarity)}%`;
        document.getElementById('motherPercentage').textContent = `${Math.round(motherSimilarity)}%`;
    });
}); 