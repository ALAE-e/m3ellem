<?php
// 1. معلومات السوارت د الداتابيز ف XAMPP
$host = "localhost";
$user = "root";       // الـ User الافتراضي
$password = "";       // الـ Password الافتراضي ديما خاوي
$dbname = "m3ellem_db"; // سمية الداتابيز ديالك

// 2. فتح الباب والاتصال بالـ MySQL
$conn = new mysqli($host, $user, $password, $dbname);

// نتأكدو واش كاين شي غلط ف الاتصال
if ($conn->connect_error) {
    die("خطأ في الاتصال بالداتابيز: " . $conn->connect_error);
}

// 3. نقبطو البيانات اللي جاية من الـ Form د الـ HTML
$user_input = $_POST['login_user'] ?? '';
$password_input = $_POST['login_password'] ?? '';

// 4. نتأكدو باللي الكليان ما صيفطش خانات خاويين
if (!empty($user_input) && !empty($password_input)) {
    
    // نوجدو السطر د الـ SQL باش نخشيو الداتا ف جدول demandes
    // (حطينا الحساب ف خانة nom والمودباس ف خانة telephone غير كـ تيست دابا)
    $sql = "INSERT INTO demandes (nom, telephone, adresse) VALUES (?, ?, 'تسجيل دخول من الصفحة الرئيسية')";
    
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ss", $user_input, $password_input);
    
    // 5. نفيذو الأمر ونشوفو واش تسيفت الداتا
    if ($stmt->execute()) {
        echo "<h3 style='color: green;'>🚀 تم استقبال البيانات وحفظها في الداتابيز بنجاح!</h3>";
        echo "الحساب: " . $user_input . "<br>";
        echo "<a href='index.html'>الرجوع للصفحة الرئيسية</a>";
    } else {
        echo "<h3 style='color: red;'>❌ وقع خطأ أثناء الحفظ في الداتابيز.</h3>";
    }
    
    $stmt->close();
} else {
    // يلا دخل لملف الـ PHP ديريكت بلا ما يعمر الفورم
    echo "<h3 style='color: orange;'>⚠️ المرجو ملء الحقول من صفحة الـ HTML أولاً.</h3>";
    echo "<a href='index.html'>اذهب إلى الصفحة الرئيسية</a>";
}

// نسدو الاتصال ديما ف اللخر للحماية
$conn->close();
?>