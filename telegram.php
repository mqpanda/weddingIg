<?php

/* https://api.telegram.org/bot5186120091:AAE6MBfdLE3tJCaCh6xvBEVwIQ09Io6GArg/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

$name = $_POST['na2130me'];
$presence = $_POST['for223m'];
$dop = $_POST['d321op'];

$token = "6271125696:AAF5jsdq1pengjYvfzw_LEqWLHboilT2BZ0";
$chat_id = "-994398559";
$arr = array(
  'Кто ответил:' => $name,
  'Присутствие: ' => $presence,
  'Дополнительно: ' => $dop,
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  header('Location: ./thx.html');
} else {
  echo "Error";
}
?>