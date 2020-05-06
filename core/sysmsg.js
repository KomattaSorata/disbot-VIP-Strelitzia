module.exports = {
  color: {
    error: 15158332,
    success: 3066993,
    info: 3447003,
    warning: 15105570,
  },

  error_message: {
    sendInDM: "#5chにポストしたいの場合は私にDMしてください！",
    not_initialized:
      "初回利用の前に先に `>sch init` を実行して、説明事項を確認してください。",
    already_initialized:
      "利用登録はもう既に完了しています。\n登録情報の指定や編集はできません。また、ハッシュIDの再発行はできません。（再発行の機能は実装予定です。）\nほかの実行できるコマンドについては `>sch help` から確認してください。",
    database_connection_error:
      "データベースへ接続できませんでした。時間が経ってからやり直してください。",
    post_message_empty:
      "投稿内容が必要です。 ```>sch post [メッセージ内容] ```で送信してください。",
  },

  success_messsage: {
    initialized:
      "確認ありがとうございます。登録が完了しました。\n`>sch help` でコマンド一覧を確認してください。\nまた、投稿する際は先ほど確認したガイドラインをしたがってください。",
    posted: "メッセージが投稿されました。",
  },

  warning_message: {
    invalid_args_commands:
      "無効なコマンド、または無効な変数が入っています。実行可能なコマンドは `>sch help` で確認してください。（利用登録は必要です。）",
  },

  informational_message: {
    initializing_title:
      "Strelitzia 初回利用登録についての説明事項（外部リンクへ繋ぎます）",
    initializing_description:
      "ようこそStrelitziaへ。上のリンクから説明事項を確認して、同意する場合、`>sch init agree` を返信して利用登録を進めてください。",
    Initializing_README_URL:
      "https://github.com/KomattaSorata/disbot-VIP-Strelitzia_S2/tree/master/public/User_Initializing_README.md",
    maintenanceAfterThreadReachLimit:
      "当スレットがリミットコメント数に足した後、新たのスレットが有効になる前にメインテナンスに入ります。メインテナンスが終わるまで、スレットの更新や投稿ができません。",
  },
  help_message: {
    main:
      "運営さんが怠惰だから何もヘルプ書いていない。```>sch post [メッセージ内容]```で何とか投稿してみたら？",
  },
};
