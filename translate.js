// translate.js - Multi-language support (14 languages) with IP detection & RTL for Arabic
(function() {
    // Translation dictionary - 14 languages
    const translations = {
        en: {
            brand_title: "Webmail Gateway",
            brand_subtitle: "Secure access for 150+ providers • Roundcube, Zimbra, Gmail, Outlook & more",
            signin_title: "Sign in to Webmail",
            keepme_label: "Keep me signed in (uncheck on shared devices)",
            continue_btn: "Continue →",
            forgot_link: "❓ Forgot your email / domain?",
            password_title: "Enter Password",
            show_password: "Show password",
            access_btn: "Access Webmail",
            different_account: "↻ Use a different account",
            sidebar_title: "📬 Select Webmail Client",
            banner_title: "Multi‑tenant Webmail Hub",
            banner_text: "Click button to explore 150+ webmail providers — Use default or IMAP if you can't find your provider.",
            modal_title: "🌐 150+ Webmail Providers (Asia, Europe, US)",
            modal_button: "📋 Supported providers (150+)",
            email_placeholder: "user@domain.com",
            password_placeholder: "Password",
            provider_badge_suffix: "secure gateway",
            forgot_alert: "Contact your email provider's support for recovery.",
            error_invalid_email: "is not a valid email address. Example: name@domain.com",
            error_email_required: "Please enter your email address.",
            error_password_required: "Password required.",
            error_auth: "Authentication error for",
            error_retry: "Re-enter password.",
            error_invalid_session: "Invalid email session. Please restart.",
            direction: "ltr"
        },
        es: {
            brand_title: "Portal de Correo Web",
            brand_subtitle: "Acceso seguro para 150+ proveedores • Roundcube, Zimbra, Gmail, Outlook y más",
            signin_title: "Iniciar sesión en Webmail",
            keepme_label: "Mantenerme conectado (desmarcar en dispositivos compartidos)",
            continue_btn: "Continuar →",
            forgot_link: "❓ ¿Olvidó su email o dominio?",
            password_title: "Ingrese su contraseña",
            show_password: "Mostrar contraseña",
            access_btn: "Acceder al Webmail",
            different_account: "↻ Usar otra cuenta",
            sidebar_title: "📬 Seleccione cliente de correo",
            banner_title: "Centro de correo web multi-tenant",
            banner_text: "Haga clic para explorar 150+ proveedores — Use el predeterminado o IMAP si no encuentra su proveedor.",
            modal_title: "🌐 150+ Proveedores de correo web (Asia, Europa, EE. UU.)",
            modal_button: "📋 Proveedores compatibles (150+)",
            email_placeholder: "usuario@dominio.com",
            password_placeholder: "Contraseña",
            provider_badge_suffix: "acceso seguro",
            forgot_alert: "Comuníquese con el soporte de su proveedor de correo electrónico para recuperarlo.",
            error_invalid_email: "no es una dirección de correo válida. Ejemplo: nombre@dominio.com",
            error_email_required: "Por favor ingrese su dirección de correo electrónico.",
            error_password_required: "Contraseña requerida.",
            error_auth: "Error de autenticación para",
            error_retry: "Vuelva a ingresar la contraseña.",
            error_invalid_session: "Sesión de correo inválida. Por favor reinicie.",
            direction: "ltr"
        },
        fr: {
            brand_title: "Passerelle Webmail",
            brand_subtitle: "Accès sécurisé pour 150+ fournisseurs • Roundcube, Zimbra, Gmail, Outlook et plus",
            signin_title: "Connectez-vous au Webmail",
            keepme_label: "Rester connecté (décocher sur les appareils partagés)",
            continue_btn: "Continuer →",
            forgot_link: "❓ Email ou domaine oublié ?",
            password_title: "Entrez votre mot de passe",
            show_password: "Afficher le mot de passe",
            access_btn: "Accéder au Webmail",
            different_account: "↻ Utiliser un autre compte",
            sidebar_title: "📬 Sélectionnez un client Webmail",
            banner_title: "Hub Webmail multi-tenant",
            banner_text: "Cliquez pour explorer 150+ fournisseurs — Utilisez le fournisseur par défaut ou IMAP si vous ne trouvez pas le vôtre.",
            modal_title: "🌐 150+ Fournisseurs de messagerie (Asie, Europe, États-Unis)",
            modal_button: "📋 Fournisseurs supportés (150+)",
            email_placeholder: "utilisateur@domaine.com",
            password_placeholder: "Mot de passe",
            provider_badge_suffix: "passerelle sécurisée",
            forgot_alert: "Contactez le support de votre fournisseur de messagerie pour la récupération.",
            error_invalid_email: "n'est pas une adresse email valide. Exemple : nom@domaine.com",
            error_email_required: "Veuillez saisir votre adresse email.",
            error_password_required: "Mot de passe requis.",
            error_auth: "Erreur d'authentification pour",
            error_retry: "Ressaisissez le mot de passe.",
            error_invalid_session: "Session email invalide. Veuillez redémarrer.",
            direction: "ltr"
        },
        de: {
            brand_title: "Webmail Gateway",
            brand_subtitle: "Sicherer Zugang für 150+ Anbieter • Roundcube, Zimbra, Gmail, Outlook & mehr",
            signin_title: "Bei Webmail anmelden",
            keepme_label: "Angemeldet bleiben (auf gemeinsam genutzten Geräten deaktivieren)",
            continue_btn: "Weiter →",
            forgot_link: "❓ E-Mail oder Domain vergessen?",
            password_title: "Passwort eingeben",
            show_password: "Passwort anzeigen",
            access_btn: "Zugang zum Webmail",
            different_account: "↻ Ein anderes Konto verwenden",
            sidebar_title: "📬 Wählen Sie einen Webmail-Client",
            banner_title: "Multi-Mandanten-Webmail-Hub",
            banner_text: "Klicken Sie hier, um 150+ Anbieter zu erkunden — Verwenden Sie Standard oder IMAP, wenn Sie Ihren Anbieter nicht finden.",
            modal_title: "🌐 150+ Webmail-Anbieter (Asien, Europa, USA)",
            modal_button: "📋 Unterstützte Anbieter (150+)",
            email_placeholder: "benutzer@domain.com",
            password_placeholder: "Passwort",
            provider_badge_suffix: "sicherer Zugang",
            forgot_alert: "Kontaktieren Sie den Support Ihres E-Mail-Anbieters für die Wiederherstellung.",
            error_invalid_email: "ist keine gültige E-Mail-Adresse. Beispiel: name@domain.com",
            error_email_required: "Bitte geben Sie Ihre E-Mail-Adresse ein.",
            error_password_required: "Passwort erforderlich.",
            error_auth: "Authentifizierungsfehler für",
            error_retry: "Passwort erneut eingeben.",
            error_invalid_session: "Ungültige E-Mail-Sitzung. Bitte neu starten.",
            direction: "ltr"
        },
        zh: {
            brand_title: "网页邮件网关",
            brand_subtitle: "150+ 提供商的安全访问 • 亚洲、欧洲、美国 • Roundcube、Zimbra、Gmail、Outlook 等",
            signin_title: "登录网页邮箱",
            keepme_label: "保持登录状态（共享设备请取消勾选）",
            continue_btn: "继续 →",
            forgot_link: "❓ 忘记邮箱或域名？",
            password_title: "输入密码",
            show_password: "显示密码",
            access_btn: "访问网页邮箱",
            different_account: "↻ 使用其他账户",
            sidebar_title: "📬 选择网页邮件客户端",
            banner_title: "多租户网页邮件中心",
            banner_text: "点击按钮探索150+邮件提供商 — 如果找不到您的提供商，请使用默认或IMAP。",
            modal_title: "🌐 150+ 网页邮件提供商（亚洲、欧洲、美国）",
            modal_button: "📋 支持的提供商 (150+)",
            email_placeholder: "用户@域名.com",
            password_placeholder: "密码",
            provider_badge_suffix: "安全网关",
            forgot_alert: "请联系您的电子邮件提供商支持以恢复。",
            error_invalid_email: "不是有效的电子邮件地址。示例：name@domain.com",
            error_email_required: "请输入您的电子邮件地址。",
            error_password_required: "需要密码。",
            error_auth: "身份验证错误：",
            error_retry: "请重新输入密码。",
            error_invalid_session: "无效的电子邮件会话。请重新开始。",
            direction: "ltr"
        },
        ja: {
            brand_title: "ウェブメールゲートウェイ",
            brand_subtitle: "150以上のプロバイダーの安全なアクセス • アジア、ヨーロッパ、アメリカ • Roundcube、Zimbra、Gmail、Outlookなど",
            signin_title: "ウェブメールにサインイン",
            keepme_label: "ログイン状態を保持する（共有デバイスではチェックを外してください）",
            continue_btn: "続行 →",
            forgot_link: "❓ メールアドレス/ドメインをお忘れですか？",
            password_title: "パスワードを入力",
            show_password: "パスワードを表示",
            access_btn: "ウェブメールにアクセス",
            different_account: "↻ 別のアカウントを使用する",
            sidebar_title: "📬 ウェブメールクライアントを選択",
            banner_title: "マルチテナントウェブメールハブ",
            banner_text: "ボタンをクリックして150以上のプロバイダーを探索 — プロバイダーが見つからない場合はデフォルトまたはIMAPを使用してください。",
            modal_title: "🌐 150以上のウェブメールプロバイダー（アジア、ヨーロッパ、アメリカ）",
            modal_button: "📋 対応プロバイダー (150+)",
            email_placeholder: "ユーザー@ドメイン.com",
            password_placeholder: "パスワード",
            provider_badge_suffix: "セキュアゲートウェイ",
            forgot_alert: "復旧については、メールプロバイダーのサポートにお問い合わせください。",
            error_invalid_email: "は有効なメールアドレスではありません。例：name@domain.com",
            error_email_required: "メールアドレスを入力してください。",
            error_password_required: "パスワードが必要です。",
            error_auth: "認証エラー：",
            error_retry: "パスワードを再入力してください。",
            error_invalid_session: "無効なメールセッションです。再起動してください。",
            direction: "ltr"
        },
        ru: {
            brand_title: "Веб-почтовый шлюз",
            brand_subtitle: "Безопасный доступ к 150+ провайдерам • Roundcube, Zimbra, Gmail, Outlook и другие",
            signin_title: "Войти в веб-почту",
            keepme_label: "Оставаться в системе (снимите флажок на общих устройствах)",
            continue_btn: "Продолжить →",
            forgot_link: "❓ Забыли email или домен?",
            password_title: "Введите пароль",
            show_password: "Показать пароль",
            access_btn: "Доступ к веб-почте",
            different_account: "↻ Использовать другую учетную запись",
            sidebar_title: "📬 Выберите веб-почтовый клиент",
            banner_title: "Мультитенантный веб-почтовый хаб",
            banner_text: "Нажмите, чтобы просмотреть 150+ провайдеров — Используйте стандартный или IMAP, если не нашли своего провайдера.",
            modal_title: "🌐 150+ веб-почтовых провайдеров (Азия, Европа, США)",
            modal_button: "📋 Поддерживаемые провайдеры (150+)",
            email_placeholder: "пользователь@домен.com",
            password_placeholder: "Пароль",
            provider_badge_suffix: "безопасный шлюз",
            forgot_alert: "Обратитесь в службу поддержки вашего почтового провайдера для восстановления.",
            error_invalid_email: "не является действительным адресом электронной почты. Пример: name@domain.com",
            error_email_required: "Пожалуйста, введите ваш email.",
            error_password_required: "Требуется пароль.",
            error_auth: "Ошибка аутентификации для",
            error_retry: "Повторно введите пароль.",
            error_invalid_session: "Недействительная сессия email. Пожалуйста, перезапустите.",
            direction: "ltr"
        },
        // NEW LANGUAGES:
        it: {
            brand_title: "Gateway Webmail",
            brand_subtitle: "Accesso sicuro per 150+ provider • Roundcube, Zimbra, Gmail, Outlook e altro",
            signin_title: "Accedi alla Webmail",
            keepme_label: "Mantieni l'accesso (deseleziona su dispositivi condivisi)",
            continue_btn: "Continua →",
            forgot_link: "❓ Hai dimenticato email o dominio?",
            password_title: "Inserisci password",
            show_password: "Mostra password",
            access_btn: "Accedi alla Webmail",
            different_account: "↻ Usa un altro account",
            sidebar_title: "📬 Seleziona client Webmail",
            banner_title: "Hub Webmail multi-tenant",
            banner_text: "Clicca per esplorare 150+ provider — Usa predefinito o IMAP se non trovi il tuo provider.",
            modal_title: "🌐 150+ Provider Webmail (Asia, Europa, USA)",
            modal_button: "📋 Provider supportati (150+)",
            email_placeholder: "utente@dominio.com",
            password_placeholder: "Password",
            provider_badge_suffix: "gateway sicuro",
            forgot_alert: "Contatta il supporto del tuo provider email per il recupero.",
            error_invalid_email: "non è un indirizzo email valido. Esempio: nome@dominio.com",
            error_email_required: "Inserisci il tuo indirizzo email.",
            error_password_required: "Password richiesta.",
            error_auth: "Errore di autenticazione per",
            error_retry: "Reinserisci la password.",
            error_invalid_session: "Sessione email non valida. Riavvia.",
            direction: "ltr"
        },
        pt: {
            brand_title: "Gateway Webmail",
            brand_subtitle: "Acesso seguro para 150+ provedores • Roundcube, Zimbra, Gmail, Outlook e mais",
            signin_title: "Entrar no Webmail",
            keepme_label: "Manter-me conectado (desmarcar em dispositivos compartilhados)",
            continue_btn: "Continuar →",
            forgot_link: "❓ Esqueceu seu email ou domínio?",
            password_title: "Digite a senha",
            show_password: "Mostrar senha",
            access_btn: "Acessar Webmail",
            different_account: "↻ Usar outra conta",
            sidebar_title: "📬 Selecione o cliente Webmail",
            banner_title: "Hub Webmail multi-tenant",
            banner_text: "Clique para explorar 150+ provedores — Use padrão ou IMAP se não encontrar seu provedor.",
            modal_title: "🌐 150+ Provedores Webmail (Ásia, Europa, EUA)",
            modal_button: "📋 Provedores suportados (150+)",
            email_placeholder: "usuario@dominio.com",
            password_placeholder: "Senha",
            provider_badge_suffix: "gateway seguro",
            forgot_alert: "Contate o suporte do seu provedor de email para recuperação.",
            error_invalid_email: "não é um endereço de email válido. Exemplo: nome@dominio.com",
            error_email_required: "Por favor, insira seu endereço de email.",
            error_password_required: "Senha necessária.",
            error_auth: "Erro de autenticação para",
            error_retry: "Insira a senha novamente.",
            error_invalid_session: "Sessão de email inválida. Reinicie.",
            direction: "ltr"
        },
        nl: {
            brand_title: "Webmail Gateway",
            brand_subtitle: "Veilige toegang voor 150+ providers • Roundcube, Zimbra, Gmail, Outlook en meer",
            signin_title: "Inloggen bij Webmail",
            keepme_label: "Ingelogd blijven (uitvinken op gedeelde apparaten)",
            continue_btn: "Doorgaan →",
            forgot_link: "❓ E-mail of domein vergeten?",
            password_title: "Voer wachtwoord in",
            show_password: "Toon wachtwoord",
            access_btn: "Toegang tot Webmail",
            different_account: "↻ Een andere account gebruiken",
            sidebar_title: "📬 Selecteer Webmail-client",
            banner_title: "Multi-tenant Webmail Hub",
            banner_text: "Klik om 150+ providers te verkennen — Gebruik standaard of IMAP als je je provider niet kunt vinden.",
            modal_title: "🌐 150+ Webmail Providers (Azië, Europa, VS)",
            modal_button: "📋 Ondersteunde providers (150+)",
            email_placeholder: "gebruiker@domein.com",
            password_placeholder: "Wachtwoord",
            provider_badge_suffix: "veilige gateway",
            forgot_alert: "Neem contact op met de ondersteuning van je e-mailprovider voor herstel.",
            error_invalid_email: "is geen geldig e-mailadres. Voorbeeld: naam@domein.com",
            error_email_required: "Voer je e-mailadres in.",
            error_password_required: "Wachtwoord vereist.",
            error_auth: "Authenticatiefout voor",
            error_retry: "Voer opnieuw wachtwoord in.",
            error_invalid_session: "Ongeldige e-mailsessie. Herstart.",
            direction: "ltr"
        },
        pl: {
            brand_title: "Brama Poczty Web",
            brand_subtitle: "Bezpieczny dostęp do 150+ dostawców • Roundcube, Zimbra, Gmail, Outlook i więcej",
            signin_title: "Zaloguj się do Poczty Web",
            keepme_label: "Pozostań zalogowany (odznacz na współdzielonych urządzeniach)",
            continue_btn: "Kontynuuj →",
            forgot_link: "❓ Zapomniałeś emaila lub domeny?",
            password_title: "Wprowadź hasło",
            show_password: "Pokaż hasło",
            access_btn: "Dostęp do Poczty Web",
            different_account: "↻ Użyj innego konta",
            sidebar_title: "📬 Wybierz klienta Poczty Web",
            banner_title: "Wielodostępne centrum poczty web",
            banner_text: "Kliknij, aby poznać 150+ dostawców — Użyj domyślnego lub IMAP, jeśli nie znajdziesz swojego dostawcy.",
            modal_title: "🌐 150+ Dostawców Poczty Web (Azja, Europa, USA)",
            modal_button: "📋 Obsługiwani dostawcy (150+)",
            email_placeholder: "użytkownik@domena.com",
            password_placeholder: "Hasło",
            provider_badge_suffix: "bezpieczna brama",
            forgot_alert: "Skontaktuj się z pomocą techniczną swojego dostawcy poczty w celu odzyskania.",
            error_invalid_email: "nie jest prawidłowym adresem email. Przykład: nazwa@domena.com",
            error_email_required: "Wprowadź swój adres email.",
            error_password_required: "Hasło wymagane.",
            error_auth: "Błąd uwierzytelniania dla",
            error_retry: "Wprowadź hasło ponownie.",
            error_invalid_session: "Nieprawidłowa sesja email. Uruchom ponownie.",
            direction: "ltr"
        },
        tr: {
            brand_title: "Webmail Ağ Geçidi",
            brand_subtitle: "150+ sağlayıcı için güvenli erişim • Roundcube, Zimbra, Gmail, Outlook ve daha fazlası",
            signin_title: "Webmail'e Giriş Yap",
            keepme_label: "Oturumu açık tut (paylaşılan cihazlarda işareti kaldırın)",
            continue_btn: "Devam →",
            forgot_link: "❓ E-posta veya alan adınızı mı unuttunuz?",
            password_title: "Şifrenizi girin",
            show_password: "Şifreyi göster",
            access_btn: "Webmail'e Eriş",
            different_account: "↻ Farklı bir hesap kullan",
            sidebar_title: "📬 Webmail İstemcisi Seçin",
            banner_title: "Çok kiracılı Webmail Merkezi",
            banner_text: "150+ sağlayıcıyı keşfetmek için tıklayın — Sağlayıcınızı bulamazsanız varsayılan veya IMAP kullanın.",
            modal_title: "🌐 150+ Webmail Sağlayıcısı (Asya, Avrupa, ABD)",
            modal_button: "📋 Desteklenen sağlayıcılar (150+)",
            email_placeholder: "kullanici@alanadı.com",
            password_placeholder: "Şifre",
            provider_badge_suffix: "güvenli ağ geçidi",
            forgot_alert: "Kurtarma için e-posta sağlayıcınızın desteğiyle iletişime geçin.",
            error_invalid_email: "geçerli bir e-posta adresi değil. Örnek: isim@alanadı.com",
            error_email_required: "Lütfen e-posta adresinizi girin.",
            error_password_required: "Şifre gerekli.",
            error_auth: "Kimlik doğrulama hatası:",
            error_retry: "Şifreyi yeniden girin.",
            error_invalid_session: "Geçersiz e-posta oturumu. Lütfen yeniden başlatın.",
            direction: "ltr"
        },
        ko: {
            brand_title: "웹메일 게이트웨이",
            brand_subtitle: "150+ 제공업체의 안전한 접근 •  Roundcube, Zimbra, Gmail, Outlook 등",
            signin_title: "웹메일 로그인",
            keepme_label: "로그인 상태 유지 (공유 기기에서는 체크 해제)",
            continue_btn: "계속 →",
            forgot_link: "❓ 이메일 또는 도메인을 잊으셨나요?",
            password_title: "비밀번호 입력",
            show_password: "비밀번호 표시",
            access_btn: "웹메일 접속",
            different_account: "↻ 다른 계정 사용",
            sidebar_title: "📬 웹메일 클라이언트 선택",
            banner_title: "멀티 테넌트 웹메일 허브",
            banner_text: "버튼을 클릭하여 150+ 제공업체 탐색 — 제공업체를 찾을 수 없으면 기본 또는 IMAP을 사용하세요.",
            modal_title: "🌐 150+ 웹메일 제공업체 (아시아, 유럽, 미국)",
            modal_button: "📋 지원되는 제공업체 (150+)",
            email_placeholder: "사용자@도메인.com",
            password_placeholder: "비밀번호",
            provider_badge_suffix: "보안 게이트웨이",
            forgot_alert: "복구를 위해 이메일 제공업체 지원에 문의하세요.",
            error_invalid_email: "유효한 이메일 주소가 아닙니다. 예: name@domain.com",
            error_email_required: "이메일 주소를 입력하세요.",
            error_password_required: "비밀번호가 필요합니다.",
            error_auth: "인증 오류:",
            error_retry: "비밀번호를 다시 입력하세요.",
            error_invalid_session: "잘못된 이메일 세션입니다. 다시 시작하세요.",
            direction: "ltr"
        },
        ar: {
            brand_title: "بوابة البريد الإلكتروني",
            brand_subtitle: "وصول آمن لأكثر من 150 مزود •  Roundcube، Zimbra، Gmail، Outlook والمزيد",
            signin_title: "تسجيل الدخول إلى البريد الإلكتروني",
            keepme_label: "ابقني مسجلاً (قم بإلغاء التحديد على الأجهزة المشتركة)",
            continue_btn: "استمر ←",
            forgot_link: "❓ نسيت بريدك الإلكتروني أو النطاق؟",
            password_title: "أدخل كلمة المرور",
            show_password: "إظهار كلمة المرور",
            access_btn: "الوصول إلى البريد الإلكتروني",
            different_account: "↻ استخدام حساب مختلف",
            sidebar_title: "📬 اختر عميل البريد الإلكتروني",
            banner_title: "مركز البريد الإلكتروني متعدد المستأجرين",
            banner_text: "انقر لاستكشاف أكثر من 150 مزودًا — استخدم الخيار الافتراضي أو IMAP إذا لم تجد مزودك.",
            modal_title: "🌐 أكثر من 150 مزود بريد إلكتروني (آسيا، أوروبا، أمريكا)",
            modal_button: "📋 المزودون المدعومون (150+)",
            email_placeholder: "مستخدم@النطاق.com",
            password_placeholder: "كلمة المرور",
            provider_badge_suffix: "بوابة آمنة",
            forgot_alert: "اتصل بدعم مزود البريد الإلكتروني الخاص بك للاسترداد.",
            error_invalid_email: "ليس عنوان بريد إلكتروني صالحًا. مثال: name@domain.com",
            error_email_required: "الرجاء إدخال عنوان بريدك الإلكتروني.",
            error_password_required: "كلمة المرور مطلوبة.",
            error_auth: "خطأ في المصادقة لـ",
            error_retry: "أعد إدخال كلمة المرور.",
            error_invalid_session: "جلسة بريد إلكتروني غير صالحة. الرجاء إعادة التشغيل.",
            direction: "rtl"
        }
    };

    let currentLang = 'en';

    function setDirection(dir) {
        const body = document.body;
        if (dir === 'rtl') {
            body.style.direction = 'rtl';
            body.style.textAlign = 'right';
            // Adjust input icons for RTL
            const style = document.createElement('style');
            style.id = 'rtl-style';
            style.textContent = `.input-group .icon { left: auto; right: 1rem; } .input-group input { padding: 0.85rem 3rem 0.85rem 0.85rem; }`;
            if (!document.getElementById('rtl-style')) document.head.appendChild(style);
        } else {
            body.style.direction = 'ltr';
            body.style.textAlign = 'left';
            const rtlStyle = document.getElementById('rtl-style');
            if (rtlStyle) rtlStyle.remove();
        }
    }

    function applyTranslations() {
        const t = translations[currentLang];
        if (!t) return;
        document.documentElement.lang = currentLang;
        setDirection(t.direction);
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (t[key] !== undefined) {
                if (el.tagName === 'INPUT' && el.placeholder !== undefined) {
                    el.placeholder = t[key];
                } else {
                    el.innerText = t[key];
                }
            }
        });
        const badge = document.querySelector('.provider-context');
        if (badge && window.currentSelectedProvider) {
            badge.innerHTML = `🔐 ${window.currentSelectedProvider} ${t.provider_badge_suffix}`;
        }
    }

    async function detectLanguage() {
        try {
            const res = await fetch('https://ipapi.co/json/');
            const data = await res.json();
            const country = data.country_code;
            const map = {
                US:'en', GB:'en', AU:'en', CA:'en', IN:'en',
                ES:'es', MX:'es', AR:'es', CO:'es',
                FR:'fr', BE:'fr', CH:'fr',
                DE:'de', AT:'de',
                CN:'zh', TW:'zh', SG:'zh',
                JP:'ja',
                RU:'ru', BY:'ru', KZ:'ru',
                IT:'it', VA:'it', SM:'it',
                PT:'pt', BR:'pt', AO:'pt', MZ:'pt',
                NL:'nl', BE_nl:'nl',
                PL:'pl',
                TR:'tr',
                KR:'ko', KP:'ko',
                SA:'ar', AE:'ar', EG:'ar', IQ:'ar', JO:'ar', KW:'ar', LB:'ar', LY:'ar', MA:'ar', OM:'ar', QA:'ar', SY:'ar', TN:'ar', YE:'ar', DZ:'ar', BH:'ar'
            };
            if (map[country]) currentLang = map[country];
            else currentLang = navigator.language.split('-')[0];
        } catch(e) {
            currentLang = navigator.language.split('-')[0];
        }
        if (!translations[currentLang]) currentLang = 'en';
        applyTranslations();
    }

    function addLanguageSwitcher() {
        const container = document.getElementById('langSwitcherContainer');
        if (!container) return;
        const select = document.createElement('select');
        select.id = 'langSwitcher';
        const languages = [
            { code: 'en', name: 'English' }, { code: 'es', name: 'Español' },
            { code: 'fr', name: 'Français' }, { code: 'de', name: 'Deutsch' },
            { code: 'zh', name: '中文' }, { code: 'ja', name: '日本語' },
            { code: 'ru', name: 'Русский' }, { code: 'it', name: 'Italiano' },
            { code: 'pt', name: 'Português' }, { code: 'nl', name: 'Nederlands' },
            { code: 'pl', name: 'Polski' }, { code: 'tr', name: 'Türkçe' },
            { code: 'ko', name: '한국어' }, { code: 'ar', name: 'العربية' }
        ];
        languages.forEach(lang => {
            const opt = document.createElement('option');
            opt.value = lang.code;
            opt.textContent = lang.name;
            if (lang.code === currentLang) opt.selected = true;
            select.appendChild(opt);
        });
        select.addEventListener('change', (e) => {
            currentLang = e.target.value;
            applyTranslations();
            window.dispatchEvent(new CustomEvent('language-changed', { detail: { lang: currentLang } }));
        });
        container.appendChild(select);
    }

    // Expose translation function globally
    window.i18n = {
        t: (key) => {
            const t = translations[currentLang];
            return t && t[key] !== undefined ? t[key] : key;
        },
        getCurrentLang: () => currentLang
    };

    (async function() {
        await detectLanguage();
        addLanguageSwitcher();
        window.dispatchEvent(new Event('i18n-ready'));
        window.addEventListener('language-changed', () => {
            applyTranslations();
            if (window.currentSelectedProvider) {
                const t = translations[currentLang];
                const badgeDiv = document.getElementById('providerBadgeContainer');
                if (badgeDiv) {
                    badgeDiv.innerHTML = `<div class="provider-context">🔐 ${window.currentSelectedProvider} ${t.provider_badge_suffix}</div>`;
                }
                const titleElem = document.getElementById('formTitle');
                if (titleElem) titleElem.innerText = `${t('signin_title')} (${window.currentSelectedProvider})`;
            }
        });
    })();
})();