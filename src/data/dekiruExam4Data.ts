import { DekiruExamData } from '../types/dekiru';

export const dekiruExam4Data: DekiruExamData = {
  "schemaVersion": "2.0.0",
  "book": "できる日本語 初級",
  "exam": {
    "id": "dekiru-review-13-15",
    "title": "13〜15課 復習テスト",
    "lessonRange": [
      13,
      15
    ],
    "source": "actual-test-photo",
    "audioSkipped": true,
    "skippedSections": [
      {
        "section": 1,
        "reason": "CD/audio asli tidak tersedia, jadi bagian listening tidak dimasukkan."
      }
    ]
  },
  "furigana": {
    "format": "segment-based",
    "description": "Frontend menampilkan furigana hanya pada segment yang memiliki field reading.",
    "htmlExample": "<ruby>約束<rt>やくそく</rt></ruby>の<ruby>時間<rt>じかん</rt></ruby>"
  },
  "sections": [
    {
      "section": 2,
      "title": "ひらがなを1つ書く",
      "titleReading": "ひらがなをひとつかく",
      "instruction": {
        "text": "（　）にひらがなを1つ書いてください。",
        "segments": [
          {
            "text": "（　）にひらがなを1つ"
          },
          {
            "text": "書",
            "reading": "か"
          },
          {
            "text": "いてください。"
          }
        ]
      },
      "type": "particle-fill",
      "items": [
        {
          "id": "13-15-s2-q1",
          "question": {
            "text": "約束の時間（　）間に合いません。",
            "segments": [
              {
                "text": "約束",
                "reading": "やくそく"
              },
              {
                "text": "の"
              },
              {
                "text": "時間",
                "reading": "じかん"
              },
              {
                "text": "（　）"
              },
              {
                "text": "間",
                "reading": "ま"
              },
              {
                "text": "に"
              },
              {
                "text": "合",
                "reading": "あ"
              },
              {
                "text": "いません。"
              }
            ]
          },
          "answer": [
            "に"
          ],
          "completed": {
            "text": "約束の時間に間に合いません。",
            "segments": [
              {
                "text": "約束",
                "reading": "やくそく"
              },
              {
                "text": "の"
              },
              {
                "text": "時間",
                "reading": "じかん"
              },
              {
                "text": "に"
              },
              {
                "text": "間",
                "reading": "ま"
              },
              {
                "text": "に"
              },
              {
                "text": "合",
                "reading": "あ"
              },
              {
                "text": "いません。"
              }
            ]
          },
          "explanationId": "間に合います memakai に untuk batas waktu/target: 約束の時間に間に合います = sempat/tepat pada waktu janji.",
          "solvingSteps": [
            "Cari verba 間に合います.",
            "Ingat pola Nに間に合います.",
            "Jawab に."
          ],
          "grammarPoint": "Nに間に合います"
        },
        {
          "id": "13-15-s2-q2",
          "question": {
            "text": "A：北海道へ行ったことがありますか。\nB：いいえ、1回（　）ありません。",
            "segments": [
              {
                "text": "A："
              },
              {
                "text": "北海道",
                "reading": "ほっかいどう"
              },
              {
                "text": "へ"
              },
              {
                "text": "行",
                "reading": "い"
              },
              {
                "text": "ったことがありますか。\n"
              },
              {
                "text": "B：いいえ、"
              },
              {
                "text": "1回",
                "reading": "いっかい"
              },
              {
                "text": "（　）ありません。"
              }
            ]
          },
          "answer": [
            "も"
          ],
          "completed": {
            "text": "いいえ、1回もありません。",
            "segments": [
              {
                "text": "いいえ、"
              },
              {
                "text": "1回",
                "reading": "いっかい"
              },
              {
                "text": "もありません。"
              }
            ]
          },
          "explanationId": "数量 + も + negatif dapat berarti 'bahkan satu kali pun tidak'. 1回もありません = belum pernah satu kali pun.",
          "solvingSteps": [
            "Jawaban negatif ありません.",
            "Ada jumlah minimum 1回.",
            "Pola penekanan negatif → 1回もありません."
          ],
          "grammarPoint": "数量 + も + 否定"
        },
        {
          "id": "13-15-s2-q3",
          "question": {
            "text": "駅の前に新しいスーパー（　）できたそうです。",
            "segments": [
              {
                "text": "駅",
                "reading": "えき"
              },
              {
                "text": "の"
              },
              {
                "text": "前",
                "reading": "まえ"
              },
              {
                "text": "に"
              },
              {
                "text": "新",
                "reading": "あたら"
              },
              {
                "text": "しいスーパー（　）できたそうです。"
              }
            ]
          },
          "answer": [
            "が"
          ],
          "completed": {
            "text": "駅の前に新しいスーパーができたそうです。",
            "segments": [
              {
                "text": "駅",
                "reading": "えき"
              },
              {
                "text": "の"
              },
              {
                "text": "前",
                "reading": "まえ"
              },
              {
                "text": "に"
              },
              {
                "text": "新",
                "reading": "あたら"
              },
              {
                "text": "しいスーパーができたそうです。"
              }
            ]
          },
          "explanationId": "できる dalam arti 'terbentuk/dibuka' memakai subjek が: スーパーができました.",
          "solvingSteps": [
            "Cari verba できる.",
            "Benda/tempat yang baru muncul menjadi subjek.",
            "Gunakan が."
          ],
          "grammarPoint": "Nができます"
        },
        {
          "id": "13-15-s2-q4",
          "question": {
            "text": "A：これは「さくら」（　）（　）（　）歌です。\nB：いい歌ですね。初めて聞きました。",
            "segments": [
              {
                "text": "A：これは「さくら」（　）（　）（　）"
              },
              {
                "text": "歌",
                "reading": "うた"
              },
              {
                "text": "です。\n"
              },
              {
                "text": "B：いい"
              },
              {
                "text": "歌",
                "reading": "うた"
              },
              {
                "text": "ですね。"
              },
              {
                "text": "初",
                "reading": "はじ"
              },
              {
                "text": "めて"
              },
              {
                "text": "聞",
                "reading": "き"
              },
              {
                "text": "きました。"
              }
            ]
          },
          "answer": [
            "と",
            "い",
            "う"
          ],
          "completed": {
            "text": "これは「さくら」という歌です。",
            "segments": [
              {
                "text": "これは「さくら」という"
              },
              {
                "text": "歌",
                "reading": "うた"
              },
              {
                "text": "です。"
              }
            ]
          },
          "explanationId": "Nama/judul sebuah benda diperkenalkan dengan pola 「〜」というN: 「さくら」という歌.",
          "solvingSteps": [
            "Ada judul 「さくら」 dan nomina 歌.",
            "Pola penamaan = 〜というN.",
            "Isi tiga blank dengan と・い・う."
          ],
          "grammarPoint": "「〜」というN"
        },
        {
          "id": "13-15-s2-q5",
          "question": {
            "text": "これはアンナさん（　）作った料理です。",
            "segments": [
              {
                "text": "これはアンナさん（　）"
              },
              {
                "text": "作",
                "reading": "つく"
              },
              {
                "text": "った"
              },
              {
                "text": "料理",
                "reading": "りょうり"
              },
              {
                "text": "です。"
              }
            ]
          },
          "answer": [
            "が"
          ],
          "completed": {
            "text": "これはアンナさんが作った料理です。",
            "segments": [
              {
                "text": "これはアンナさんが"
              },
              {
                "text": "作",
                "reading": "つく"
              },
              {
                "text": "った"
              },
              {
                "text": "料理",
                "reading": "りょうり"
              },
              {
                "text": "です。"
              }
            ]
          },
          "explanationId": "Dalam klausa relatif, pelaku tindakan dapat ditandai が: アンナさんが作った料理 = masakan yang dibuat Anna.",
          "solvingSteps": [
            "作った menerangkan 料理.",
            "Pelaku yang membuat = アンナさん.",
            "Gunakan が."
          ],
          "grammarPoint": "普通形 + N / 主語が"
        },
        {
          "id": "13-15-s2-q6",
          "question": {
            "text": "風邪（　）学校を休みました。",
            "segments": [
              {
                "text": "風邪",
                "reading": "かぜ"
              },
              {
                "text": "（　）"
              },
              {
                "text": "学校",
                "reading": "がっこう"
              },
              {
                "text": "を"
              },
              {
                "text": "休",
                "reading": "やす"
              },
              {
                "text": "みました。"
              }
            ]
          },
          "answer": [
            "で"
          ],
          "completed": {
            "text": "風邪で学校を休みました。",
            "segments": [
              {
                "text": "風邪",
                "reading": "かぜ"
              },
              {
                "text": "で"
              },
              {
                "text": "学校",
                "reading": "がっこう"
              },
              {
                "text": "を"
              },
              {
                "text": "休",
                "reading": "やす"
              },
              {
                "text": "みました。"
              }
            ]
          },
          "explanationId": "で dapat menunjukkan sebab/alasan berupa nomina: 風邪で学校を休みました = absen sekolah karena flu.",
          "solvingSteps": [
            "風邪 adalah penyebab.",
            "Untuk sebab berupa nomina gunakan で.",
            "Jawab で."
          ],
          "grammarPoint": "Nで（理由）"
        },
        {
          "id": "13-15-s2-q7",
          "question": {
            "text": "今度、さくらホテル（　）泊まります。",
            "segments": [
              {
                "text": "今度",
                "reading": "こんど"
              },
              {
                "text": "、さくらホテル（　）"
              },
              {
                "text": "泊",
                "reading": "と"
              },
              {
                "text": "まります。"
              }
            ]
          },
          "answer": [
            "に"
          ],
          "completed": {
            "text": "今度、さくらホテルに泊まります。",
            "segments": [
              {
                "text": "今度",
                "reading": "こんど"
              },
              {
                "text": "、さくらホテルに"
              },
              {
                "text": "泊",
                "reading": "と"
              },
              {
                "text": "まります。"
              }
            ]
          },
          "explanationId": "Tempat menginap dengan 泊まります memakai に: ホテルに泊まります.",
          "solvingSteps": [
            "Cari verba 泊まります.",
            "Tempat yang ditinggali/menginap → に.",
            "Jawab に."
          ],
          "grammarPoint": "場所に泊まります"
        }
      ]
    },
    {
      "section": 3,
      "title": "正しい形に変える",
      "titleReading": "ただしいかたちにかえる",
      "instruction": {
        "text": "（　）の中を正しい形に変えてください。",
        "segments": [
          {
            "text": "（　）の"
          },
          {
            "text": "中",
            "reading": "なか"
          },
          {
            "text": "を"
          },
          {
            "text": "正",
            "reading": "ただ"
          },
          {
            "text": "しい"
          },
          {
            "text": "形",
            "reading": "かたち"
          },
          {
            "text": "に"
          },
          {
            "text": "変",
            "reading": "か"
          },
          {
            "text": "えてください。"
          }
        ]
      },
      "type": "conjugation",
      "items": [
        {
          "id": "13-15-s3-q1",
          "question": {
            "text": "A：来月、カルロスさんが（結婚します → ＿＿＿）そうですよ。\nB：えっ？そうなんですか。",
            "segments": [
              {
                "text": "A："
              },
              {
                "text": "来月",
                "reading": "らいげつ"
              },
              {
                "text": "、カルロスさんが（"
              },
              {
                "text": "結婚",
                "reading": "けっこん"
              },
              {
                "text": "します → ＿＿＿）そうですよ。\n"
              },
              {
                "text": "B：えっ？そうなんですか。"
              }
            ]
          },
          "answer": {
            "text": "結婚する",
            "segments": [
              {
                "text": "結婚",
                "reading": "けっこん"
              },
              {
                "text": "する"
              }
            ]
          },
          "explanationId": "Hearsay 〜そうです memakai bentuk biasa. 結婚します → 結婚するそうです.",
          "solvingSteps": [
            "Sesudah blank ada そうです (katanya).",
            "Gunakan bentuk biasa.",
            "します → する."
          ],
          "grammarPoint": "普通形 + そうです（伝聞）"
        },
        {
          "id": "13-15-s3-q2",
          "question": {
            "text": "A：おいしいレストランを（知ります → ＿＿＿）か。\nB：いいえ、（知ります → ＿＿＿）。",
            "segments": [
              {
                "text": "A：おいしいレストランを（"
              },
              {
                "text": "知",
                "reading": "し"
              },
              {
                "text": "ります → ＿＿＿）か。\n"
              },
              {
                "text": "B：いいえ、（"
              },
              {
                "text": "知",
                "reading": "し"
              },
              {
                "text": "ります → ＿＿＿）。"
              }
            ]
          },
          "answer": [
            {
              "text": "知っています",
              "segments": [
                {
                  "text": "知",
                  "reading": "し"
                },
                {
                  "text": "っています"
                }
              ]
            },
            {
              "text": "知りません",
              "segments": [
                {
                  "text": "知",
                  "reading": "し"
                },
                {
                  "text": "りません"
                }
              ]
            }
          ],
          "explanationId": "知る adalah verba yang keadaan 'tahu' dinyatakan dengan 知っています. Bentuk negatif lazimnya 知りません.",
          "solvingSteps": [
            "Pertanyaan 'apakah tahu?' → 知っていますか.",
            "Jawaban negatif → 知りません."
          ],
          "grammarPoint": "知っています / 知りません"
        },
        {
          "id": "13-15-s3-q3",
          "question": {
            "text": "A：オレンジは何の店ですか。\nB：オレンジはおいしいケーキを（売ります → ＿＿＿）店です。",
            "segments": [
              {
                "text": "A：オレンジは"
              },
              {
                "text": "何",
                "reading": "なん"
              },
              {
                "text": "の"
              },
              {
                "text": "店",
                "reading": "みせ"
              },
              {
                "text": "ですか。\n"
              },
              {
                "text": "B：オレンジはおいしいケーキを（"
              },
              {
                "text": "売",
                "reading": "う"
              },
              {
                "text": "ります → ＿＿＿）"
              },
              {
                "text": "店",
                "reading": "みせ"
              },
              {
                "text": "です。"
              }
            ]
          },
          "answer": {
            "text": "売っている",
            "segments": [
              {
                "text": "売",
                "reading": "う"
              },
              {
                "text": "っている"
              }
            ]
          },
          "explanationId": "Untuk menerangkan jenis toko berdasarkan aktivitas yang berlangsung, gunakan klausa relatif ケーキを売っている店 = toko yang menjual kue.",
          "solvingSteps": [
            "Blank langsung menerangkan 店.",
            "Gunakan bentuk biasa sebelum nomina.",
            "Untuk keadaan/aktivitas toko 'menjual' gunakan 売っている."
          ],
          "grammarPoint": "Vている + N"
        },
        {
          "id": "13-15-s3-q4",
          "question": {
            "text": "A：いっしょに「ほしの美術館」へ行きませんか。\n来週まで（無料です → ＿＿＿）そうですよ。\nB：いいですね。行きましょう。",
            "segments": [
              {
                "text": "A：いっしょに「ほしの"
              },
              {
                "text": "美術館",
                "reading": "びじゅつかん"
              },
              {
                "text": "」へ"
              },
              {
                "text": "行",
                "reading": "い"
              },
              {
                "text": "きませんか。\n"
              },
              {
                "text": "来週",
                "reading": "らいしゅう"
              },
              {
                "text": "まで（"
              },
              {
                "text": "無料",
                "reading": "むりょう"
              },
              {
                "text": "です → ＿＿＿）そうですよ。\n"
              },
              {
                "text": "B：いいですね。"
              },
              {
                "text": "行",
                "reading": "い"
              },
              {
                "text": "きましょう。"
              }
            ]
          },
          "answer": {
            "text": "無料だ",
            "segments": [
              {
                "text": "無料",
                "reading": "むりょう"
              },
              {
                "text": "だ"
              }
            ]
          },
          "explanationId": "Pada 〜そうです yang berarti 'katanya', noun/na-adjective memakai だ sebelum そうです: 無料だそうです.",
          "solvingSteps": [
            "Ini そうです = informasi yang didengar.",
            "無料 adalah noun/na-adjective.",
            "Bentuk biasa → 無料だ."
          ],
          "grammarPoint": "N / な形容詞 + だそうです"
        },
        {
          "id": "13-15-s3-q5",
          "question": {
            "text": "A：先週、おもしろい映画が（始まります → ＿＿＿）そうですよ。\nB：そうですか。\nA：週末、時間が（あります → ＿＿＿）ら、いっしょに見に行きませんか。\nB：いいですね。行きましょう。",
            "segments": [
              {
                "text": "A："
              },
              {
                "text": "先週",
                "reading": "せんしゅう"
              },
              {
                "text": "、おもしろい"
              },
              {
                "text": "映画",
                "reading": "えいが"
              },
              {
                "text": "が（"
              },
              {
                "text": "始",
                "reading": "はじ"
              },
              {
                "text": "まります → ＿＿＿）そうですよ。\n"
              },
              {
                "text": "B：そうですか。\n"
              },
              {
                "text": "A："
              },
              {
                "text": "週末",
                "reading": "しゅうまつ"
              },
              {
                "text": "、"
              },
              {
                "text": "時間",
                "reading": "じかん"
              },
              {
                "text": "が（あります → ＿＿＿）ら、いっしょに"
              },
              {
                "text": "見",
                "reading": "み"
              },
              {
                "text": "に"
              },
              {
                "text": "行",
                "reading": "い"
              },
              {
                "text": "きませんか。\n"
              },
              {
                "text": "B：いいですね。"
              },
              {
                "text": "行",
                "reading": "い"
              },
              {
                "text": "きましょう。"
              }
            ]
          },
          "answer": [
            {
              "text": "始まった",
              "segments": [
                {
                  "text": "始",
                  "reading": "はじ"
                },
                {
                  "text": "まった"
                }
              ]
            },
            {
              "text": "あった",
              "segments": [
                {
                  "text": "あった"
                }
              ]
            }
          ],
          "explanationId": "先週 menunjukkan masa lalu, jadi 始まったそうです. Kondisi 〜たら dibentuk dari bentuk lampau: あります → あったら.",
          "solvingSteps": [
            "Untuk hearsay, lihat waktu 先週 → 始まった.",
            "Untuk 〜たら, ubah あります ke あった + ら.",
            "Jawab 始まった / あった."
          ],
          "grammarPoint": "普通形 + そうです / 〜たら"
        },
        {
          "id": "13-15-s3-q6",
          "question": {
            "text": "天気が（いいです → ＿＿＿）ら、公園へ遊びに行きたいです。",
            "segments": [
              {
                "text": "天気",
                "reading": "てんき"
              },
              {
                "text": "が（いいです → ＿＿＿）ら、"
              },
              {
                "text": "公園",
                "reading": "こうえん"
              },
              {
                "text": "へ"
              },
              {
                "text": "遊",
                "reading": "あそ"
              },
              {
                "text": "びに"
              },
              {
                "text": "行",
                "reading": "い"
              },
              {
                "text": "きたいです。"
              }
            ]
          },
          "answer": {
            "text": "よかった",
            "segments": [
              {
                "text": "よかった"
              }
            ]
          },
          "completed": {
            "text": "天気がよかったら、公園へ遊びに行きたいです。",
            "segments": [
              {
                "text": "天気",
                "reading": "てんき"
              },
              {
                "text": "がよかったら、"
              },
              {
                "text": "公園",
                "reading": "こうえん"
              },
              {
                "text": "へ"
              },
              {
                "text": "遊",
                "reading": "あそ"
              },
              {
                "text": "びに"
              },
              {
                "text": "行",
                "reading": "い"
              },
              {
                "text": "きたいです。"
              }
            ]
          },
          "explanationId": "〜たら memakai bentuk lampau + ら. いいです mempunyai bentuk lampau よかった, sehingga よかったら.",
          "solvingSteps": [
            "Cari pola 〜たら.",
            "いい → よかった.",
            "Tambahkan ら → よかったら."
          ],
          "grammarPoint": "いい → よかったら"
        },
        {
          "id": "13-15-s3-q7",
          "question": {
            "text": "週末、（暇です → ＿＿＿）ら、いっしょに買い物に行きませんか。",
            "segments": [
              {
                "text": "週末",
                "reading": "しゅうまつ"
              },
              {
                "text": "、（"
              },
              {
                "text": "暇",
                "reading": "ひま"
              },
              {
                "text": "です → ＿＿＿）ら、いっしょに"
              },
              {
                "text": "買",
                "reading": "か"
              },
              {
                "text": "い"
              },
              {
                "text": "物",
                "reading": "もの"
              },
              {
                "text": "に"
              },
              {
                "text": "行",
                "reading": "い"
              },
              {
                "text": "きませんか。"
              }
            ]
          },
          "answer": {
            "text": "暇だった",
            "segments": [
              {
                "text": "暇",
                "reading": "ひま"
              },
              {
                "text": "だった"
              }
            ]
          },
          "completed": {
            "text": "週末、暇だったら、いっしょに買い物に行きませんか。",
            "segments": [
              {
                "text": "週末",
                "reading": "しゅうまつ"
              },
              {
                "text": "、"
              },
              {
                "text": "暇",
                "reading": "ひま"
              },
              {
                "text": "だったら、いっしょに"
              },
              {
                "text": "買",
                "reading": "か"
              },
              {
                "text": "い"
              },
              {
                "text": "物",
                "reading": "もの"
              },
              {
                "text": "に"
              },
              {
                "text": "行",
                "reading": "い"
              },
              {
                "text": "きませんか。"
              }
            ]
          },
          "explanationId": "Na-adjective/noun membentuk 〜たら dari bentuk lampau だった: 暇だったら.",
          "solvingSteps": [
            "暇 adalah na-adjective.",
            "Lampau bentuk biasa = 暇だった.",
            "Tambahkan ら → 暇だったら."
          ],
          "grammarPoint": "な形容詞 + だったら"
        },
        {
          "id": "13-15-s3-q8",
          "question": {
            "text": "A：雨が（降ります → ＿＿＿）も、試合はありますか。\nB：はい、あります。",
            "segments": [
              {
                "text": "A："
              },
              {
                "text": "雨",
                "reading": "あめ"
              },
              {
                "text": "が（"
              },
              {
                "text": "降",
                "reading": "ふ"
              },
              {
                "text": "ります → ＿＿＿）も、"
              },
              {
                "text": "試合",
                "reading": "しあい"
              },
              {
                "text": "はありますか。\n"
              },
              {
                "text": "B：はい、あります。"
              }
            ]
          },
          "answer": {
            "text": "降って",
            "segments": [
              {
                "text": "降",
                "reading": "ふ"
              },
              {
                "text": "って"
              }
            ]
          },
          "completed": {
            "text": "雨が降っても、試合はありますか。",
            "segments": [
              {
                "text": "雨",
                "reading": "あめ"
              },
              {
                "text": "が"
              },
              {
                "text": "降",
                "reading": "ふ"
              },
              {
                "text": "っても、"
              },
              {
                "text": "試合",
                "reading": "しあい"
              },
              {
                "text": "はありますか。"
              }
            ]
          },
          "explanationId": "〜ても berarti 'meskipun/walaupun'. Sebelum も gunakan bentuk て: 降ります → 降って.",
          "solvingSteps": [
            "Sesudah blank ada も.",
            "Pola = Vても.",
            "降ります → 降って."
          ],
          "grammarPoint": "Vても"
        }
      ]
    },
    {
      "section": 4,
      "title": "寮のルール",
      "titleReading": "りょうのルール",
      "instruction": {
        "text": "例のように口の中から正しいものを選んで、（　）に書いてください。",
        "segments": [
          {
            "text": "例",
            "reading": "れい"
          },
          {
            "text": "のように"
          },
          {
            "text": "口",
            "reading": "くち"
          },
          {
            "text": "の"
          },
          {
            "text": "中",
            "reading": "なか"
          },
          {
            "text": "から"
          },
          {
            "text": "正",
            "reading": "ただ"
          },
          {
            "text": "しいものを"
          },
          {
            "text": "選",
            "reading": "えら"
          },
          {
            "text": "んで、（　）に"
          },
          {
            "text": "書",
            "reading": "か"
          },
          {
            "text": "いてください。"
          }
        ]
      },
      "type": "grammar-choice",
      "choiceBank": [
        {
          "id": "a",
          "text": "はいけません"
        },
        {
          "id": "b",
          "text": "なければなりません"
        },
        {
          "id": "c",
          "text": "なくてもいいです"
        },
        {
          "id": "d",
          "text": "と思いました"
        }
      ],
      "passage": {
        "text": "私は寮に住んでいます。寮にいろいろなルールがあります。\n夜、ほかの人に迷惑ですから、9時前に洗濯をしなければなりません。\n毎月1回、8時半からみんなで寮の前を掃除します。でも、用事がある人や体の調子が悪い人は参加しなくてもいいです。\n寮の台所に大きい冷蔵庫があります。冷蔵庫に自分が買った物を入れるとき、名前を書かなければなりません。\n食事は寮の台所で作ります。危ないですから、自分の部屋で作ってはいけません。\n初めはちょっと変だと思いましたが、今は慣れました。",
        "segments": [
          {
            "text": "私",
            "reading": "わたし"
          },
          {
            "text": "は"
          },
          {
            "text": "寮",
            "reading": "りょう"
          },
          {
            "text": "に"
          },
          {
            "text": "住",
            "reading": "す"
          },
          {
            "text": "んでいます。"
          },
          {
            "text": "寮",
            "reading": "りょう"
          },
          {
            "text": "にいろいろなルールがあります。\n"
          },
          {
            "text": "夜",
            "reading": "よる"
          },
          {
            "text": "、ほかの"
          },
          {
            "text": "人",
            "reading": "ひと"
          },
          {
            "text": "に"
          },
          {
            "text": "迷惑",
            "reading": "めいわく"
          },
          {
            "text": "ですから、"
          },
          {
            "text": "9時前",
            "reading": "くじまえ"
          },
          {
            "text": "に"
          },
          {
            "text": "洗濯",
            "reading": "せんたく"
          },
          {
            "text": "をしなければなりません。\n"
          },
          {
            "text": "毎月",
            "reading": "まいつき"
          },
          {
            "text": "1回",
            "reading": "いっかい"
          },
          {
            "text": "、"
          },
          {
            "text": "8時半",
            "reading": "はちじはん"
          },
          {
            "text": "からみんなで"
          },
          {
            "text": "寮",
            "reading": "りょう"
          },
          {
            "text": "の"
          },
          {
            "text": "前",
            "reading": "まえ"
          },
          {
            "text": "を"
          },
          {
            "text": "掃除",
            "reading": "そうじ"
          },
          {
            "text": "します。でも、"
          },
          {
            "text": "用事",
            "reading": "ようじ"
          },
          {
            "text": "がある"
          },
          {
            "text": "人",
            "reading": "ひと"
          },
          {
            "text": "や"
          },
          {
            "text": "体",
            "reading": "からだ"
          },
          {
            "text": "の"
          },
          {
            "text": "調子",
            "reading": "ちょうし"
          },
          {
            "text": "が"
          },
          {
            "text": "悪",
            "reading": "わる"
          },
          {
            "text": "い"
          },
          {
            "text": "人",
            "reading": "ひと"
          },
          {
            "text": "は"
          },
          {
            "text": "参加",
            "reading": "さんか"
          },
          {
            "text": "しなくてもいいです。\n"
          },
          {
            "text": "寮",
            "reading": "りょう"
          },
          {
            "text": "の"
          },
          {
            "text": "台所",
            "reading": "だいどころ"
          },
          {
            "text": "に"
          },
          {
            "text": "大",
            "reading": "おお"
          },
          {
            "text": "きい"
          },
          {
            "text": "冷蔵庫",
            "reading": "れいぞうこ"
          },
          {
            "text": "があります。"
          },
          {
            "text": "冷蔵庫",
            "reading": "れいぞうこ"
          },
          {
            "text": "に"
          },
          {
            "text": "自分",
            "reading": "じぶん"
          },
          {
            "text": "が"
          },
          {
            "text": "買",
            "reading": "か"
          },
          {
            "text": "った"
          },
          {
            "text": "物",
            "reading": "もの"
          },
          {
            "text": "を"
          },
          {
            "text": "入",
            "reading": "い"
          },
          {
            "text": "れるとき、"
          },
          {
            "text": "名前",
            "reading": "なまえ"
          },
          {
            "text": "を"
          },
          {
            "text": "書",
            "reading": "か"
          },
          {
            "text": "かなければなりません。\n"
          },
          {
            "text": "食事",
            "reading": "しょくじ"
          },
          {
            "text": "は"
          },
          {
            "text": "寮",
            "reading": "りょう"
          },
          {
            "text": "の"
          },
          {
            "text": "台所",
            "reading": "だいどころ"
          },
          {
            "text": "で"
          },
          {
            "text": "作",
            "reading": "つく"
          },
          {
            "text": "ります。"
          },
          {
            "text": "危",
            "reading": "あぶ"
          },
          {
            "text": "ないですから、"
          },
          {
            "text": "自分",
            "reading": "じぶん"
          },
          {
            "text": "の"
          },
          {
            "text": "部屋",
            "reading": "へや"
          },
          {
            "text": "で"
          },
          {
            "text": "作",
            "reading": "つく"
          },
          {
            "text": "ってはいけません。\n"
          },
          {
            "text": "初",
            "reading": "はじ"
          },
          {
            "text": "めはちょっと"
          },
          {
            "text": "変",
            "reading": "へん"
          },
          {
            "text": "だと"
          },
          {
            "text": "思",
            "reading": "おも"
          },
          {
            "text": "いましたが、"
          },
          {
            "text": "今",
            "reading": "いま"
          },
          {
            "text": "は"
          },
          {
            "text": "慣",
            "reading": "な"
          },
          {
            "text": "れました。"
          }
        ]
      },
      "items": [
        {
          "id": "13-15-s4-q1",
          "base": {
            "text": "参加します",
            "segments": [
              {
                "text": "参加",
                "reading": "さんか"
              },
              {
                "text": "します"
              }
            ]
          },
          "answer": {
            "text": "参加しなくてもいいです",
            "segments": [
              {
                "text": "参加",
                "reading": "さんか"
              },
              {
                "text": "しなくてもいいです"
              }
            ]
          },
          "choice": "c",
          "explanationId": "用事がある人や体調が悪い人は参加する必要がありません. 〜なくてもいいです = tidak harus / boleh tidak.",
          "solvingSteps": [
            "Konteks memberi pengecualian aturan.",
            "Makna yang dibutuhkan = 'tidak perlu ikut'.",
            "Pilih なくてもいいです."
          ],
          "grammarPoint": "Vなくてもいいです"
        },
        {
          "id": "13-15-s4-q2",
          "base": {
            "text": "書きます",
            "segments": [
              {
                "text": "書",
                "reading": "か"
              },
              {
                "text": "きます"
              }
            ]
          },
          "answer": {
            "text": "書かなければなりません",
            "segments": [
              {
                "text": "書",
                "reading": "か"
              },
              {
                "text": "かなければなりません"
              }
            ]
          },
          "choice": "b",
          "explanationId": "Barang di kulkas harus diberi nama. 〜なければなりません = harus.",
          "solvingSteps": [
            "Ini aturan wajib.",
            "書きます → 書かない → 書かなければなりません."
          ],
          "grammarPoint": "Vなければなりません"
        },
        {
          "id": "13-15-s4-q3",
          "base": {
            "text": "作ります",
            "segments": [
              {
                "text": "作",
                "reading": "つく"
              },
              {
                "text": "ります"
              }
            ]
          },
          "answer": {
            "text": "作ってはいけません",
            "segments": [
              {
                "text": "作",
                "reading": "つく"
              },
              {
                "text": "ってはいけません"
              }
            ]
          },
          "choice": "a",
          "explanationId": "Karena berbahaya, memasak di kamar sendiri dilarang. Vてはいけません = tidak boleh.",
          "solvingSteps": [
            "Kata 危ないですから memberi alasan larangan.",
            "作ります → 作って.",
            "Tambahkan はいけません."
          ],
          "grammarPoint": "Vてはいけません"
        },
        {
          "id": "13-15-s4-q4",
          "base": {
            "text": "変です",
            "segments": [
              {
                "text": "変",
                "reading": "へん"
              },
              {
                "text": "です"
              }
            ]
          },
          "answer": {
            "text": "変だと思いました",
            "segments": [
              {
                "text": "変",
                "reading": "へん"
              },
              {
                "text": "だと"
              },
              {
                "text": "思",
                "reading": "おも"
              },
              {
                "text": "いました"
              }
            ]
          },
          "choice": "d",
          "explanationId": "Untuk menyatakan pendapat masa lalu: 普通形 + と思いました. Na-adjective 変です menjadi 変だ.",
          "solvingSteps": [
            "Konteks: 'awalnya saya berpikir...'.",
            "変です → bentuk biasa 変だ.",
            "Tambahkan と思いました."
          ],
          "grammarPoint": "普通形 + と思いました"
        }
      ]
    },
    {
      "section": 5,
      "title": "絵を見て文を書く",
      "titleReading": "えをみてぶんをかく",
      "instruction": {
        "text": "絵を見て、例のように文を書いてください。",
        "segments": [
          {
            "text": "絵",
            "reading": "え"
          },
          {
            "text": "を"
          },
          {
            "text": "見",
            "reading": "み"
          },
          {
            "text": "て、"
          },
          {
            "text": "例",
            "reading": "れい"
          },
          {
            "text": "のように"
          },
          {
            "text": "文",
            "reading": "ぶん"
          },
          {
            "text": "を"
          },
          {
            "text": "書",
            "reading": "か"
          },
          {
            "text": "いてください。"
          }
        ]
      },
      "type": "picture-writing",
      "items": [
        {
          "id": "13-15-s5-q1",
          "visual": {
            "description": "Seorang pelanggan menunjukkan gelas yang pecah/rusak kepada pegawai."
          },
          "dialogue": [
            {
              "speaker": "A",
              "content": {
                "text": "あのう、（　）。",
                "segments": [
                  {
                    "text": "あのう、（　）。"
                  }
                ]
              }
            },
            {
              "speaker": "店員",
              "content": {
                "text": "店員：あっ、すみません。",
                "segments": [
                  {
                    "text": "店員",
                    "reading": "てんいん"
                  },
                  {
                    "text": "：あっ、すみません。"
                  }
                ]
              }
            }
          ],
          "answer": {
            "text": "グラスがこわれています。",
            "segments": [
              {
                "text": "グラスがこわれています。"
              }
            ]
          },
          "explanationId": "〜ています dapat menyatakan keadaan hasil perubahan. Gelas sudah rusak, jadi グラスがこわれています。",
          "solvingSteps": [
            "Identifikasi keadaan benda pada gambar.",
            "Gunakan verba intransitif こわれます.",
            "Keadaan hasil → こわれています."
          ],
          "grammarPoint": "自動詞 + ています"
        },
        {
          "id": "13-15-s5-q2",
          "visual": {
            "description": "Seseorang jatuh/tergeletak di tanah."
          },
          "dialogue": [
            {
              "speaker": "A",
              "content": {
                "text": "あっ、（　）よ。",
                "segments": [
                  {
                    "text": "あっ、（　）よ。"
                  }
                ]
              }
            },
            {
              "speaker": "B",
              "content": {
                "text": "本当だ。大変！",
                "segments": [
                  {
                    "text": "本当",
                    "reading": "ほんとう"
                  },
                  {
                    "text": "だ。"
                  },
                  {
                    "text": "大変",
                    "reading": "たいへん"
                  },
                  {
                    "text": "！"
                  }
                ]
              }
            }
          ],
          "answer": {
            "text": "人がたおれています",
            "segments": [
              {
                "text": "人",
                "reading": "ひと"
              },
              {
                "text": "がたおれています"
              }
            ]
          },
          "explanationId": "Orang terlihat dalam keadaan sudah jatuh/tergeletak, sehingga gunakan たおれています.",
          "solvingSteps": [
            "Lihat kondisi orang.",
            "Verba たおれます → keadaan たおれています.",
            "Tambahkan 人が."
          ],
          "grammarPoint": "倒れています"
        },
        {
          "id": "13-15-s5-q3",
          "visual": {
            "description": "Sebuah pintu terlihat terbuka."
          },
          "dialogue": [
            {
              "speaker": "A",
              "content": {
                "text": "あれ？（　）。",
                "segments": [
                  {
                    "text": "あれ？（　）。"
                  }
                ]
              }
            },
            {
              "speaker": "B",
              "content": {
                "text": "本当だ。",
                "segments": [
                  {
                    "text": "本当",
                    "reading": "ほんとう"
                  },
                  {
                    "text": "だ。"
                  }
                ]
              }
            }
          ],
          "answer": {
            "text": "ドアが開いています",
            "segments": [
              {
                "text": "ドアが"
              },
              {
                "text": "開",
                "reading": "あ"
              },
              {
                "text": "いています"
              }
            ]
          },
          "explanationId": "Pintu berada dalam keadaan terbuka. 自動詞 開きます → 開いています.",
          "solvingSteps": [
            "Subjek = ドア.",
            "Gunakan 開きます untuk 'terbuka'.",
            "Keadaan hasil → 開いています."
          ],
          "grammarPoint": "開いています"
        },
        {
          "id": "13-15-s5-q4",
          "visual": {
            "description": "Toko memiliki shutter tertutup dan tanda CLOSED."
          },
          "dialogue": [
            {
              "speaker": "A",
              "content": {
                "text": "あっ、（　）。",
                "segments": [
                  {
                    "text": "あっ、（　）。"
                  }
                ]
              }
            },
            {
              "speaker": "B",
              "content": {
                "text": "本当だ。ほかのお店へ行きませんか。",
                "segments": [
                  {
                    "text": "本当",
                    "reading": "ほんとう"
                  },
                  {
                    "text": "だ。ほかのお"
                  },
                  {
                    "text": "店",
                    "reading": "みせ"
                  },
                  {
                    "text": "へ"
                  },
                  {
                    "text": "行",
                    "reading": "い"
                  },
                  {
                    "text": "きませんか。"
                  }
                ]
              }
            }
          ],
          "answer": {
            "text": "お店が閉まっています",
            "segments": [
              {
                "text": "お"
              },
              {
                "text": "店",
                "reading": "みせ"
              },
              {
                "text": "が"
              },
              {
                "text": "閉",
                "reading": "し"
              },
              {
                "text": "まっています"
              }
            ]
          },
          "explanationId": "Toko terlihat dalam keadaan tutup. 閉まります adalah intransitif; keadaan hasil → 閉まっています.",
          "solvingSteps": [
            "Gambar menunjukkan toko tertutup.",
            "Gunakan 閉まります, bukan 閉めます.",
            "Ubah ke 閉まっています."
          ],
          "grammarPoint": "閉まっています"
        },
        {
          "id": "13-15-s5-q5",
          "visual": {
            "description": "Banyak orang sedang mengantre."
          },
          "dialogue": [
            {
              "speaker": "A",
              "content": {
                "text": "あっ、（　）ね。",
                "segments": [
                  {
                    "text": "あっ、（　）ね。"
                  }
                ]
              }
            },
            {
              "speaker": "B",
              "content": {
                "text": "そうですね。どうしますか。",
                "segments": [
                  {
                    "text": "そうですね。どうしますか。"
                  }
                ]
              }
            },
            {
              "speaker": "A",
              "content": {
                "text": "待ちましょう。",
                "segments": [
                  {
                    "text": "待",
                    "reading": "ま"
                  },
                  {
                    "text": "ちましょう。"
                  }
                ]
              }
            }
          ],
          "answer": {
            "text": "たくさん人がならんでいます",
            "segments": [
              {
                "text": "たくさん"
              },
              {
                "text": "人",
                "reading": "ひと"
              },
              {
                "text": "がならんでいます"
              }
            ]
          },
          "explanationId": "Orang-orang sedang berbaris/mengantre, sehingga gunakan 人が並んでいます.",
          "solvingSteps": [
            "Identifikasi aktivitas kelompok orang: mengantre.",
            "ならびます → ならんでいます.",
            "Tambahkan たくさん人が."
          ],
          "grammarPoint": "並んでいます"
        },
        {
          "id": "13-15-s5-q6",
          "visual": {
            "description": "Sebuah dompet terlihat terjatuh di lantai dekat dua orang."
          },
          "dialogue": [
            {
              "speaker": "A",
              "content": {
                "text": "あっ、（　）。",
                "segments": [
                  {
                    "text": "あっ、（　）。"
                  }
                ]
              }
            },
            {
              "speaker": "B",
              "content": {
                "text": "本当だ。",
                "segments": [
                  {
                    "text": "本当",
                    "reading": "ほんとう"
                  },
                  {
                    "text": "だ。"
                  }
                ]
              }
            }
          ],
          "answer": {
            "text": "さいふが落ちています",
            "segments": [
              {
                "text": "さいふが"
              },
              {
                "text": "落",
                "reading": "お"
              },
              {
                "text": "ちています"
              }
            ]
          },
          "explanationId": "Dompet berada dalam keadaan jatuh/tertinggal di lantai. 落ちます → 落ちています.",
          "solvingSteps": [
            "Identifikasi benda: さいふ.",
            "Gunakan intransitif 落ちます.",
            "Keadaan hasil → 落ちています."
          ],
          "grammarPoint": "落ちています"
        }
      ]
    },
    {
      "section": 6,
      "title": "絵を見て文を書く",
      "titleReading": "えをみてぶんをかく",
      "instruction": {
        "text": "絵を見て文を書いてください。",
        "segments": [
          {
            "text": "絵",
            "reading": "え"
          },
          {
            "text": "を"
          },
          {
            "text": "見",
            "reading": "み"
          },
          {
            "text": "て"
          },
          {
            "text": "文",
            "reading": "ぶん"
          },
          {
            "text": "を"
          },
          {
            "text": "書",
            "reading": "か"
          },
          {
            "text": "いてください。"
          }
        ]
      },
      "type": "picture-dialogue",
      "items": [
        {
          "id": "13-15-s6-q1",
          "visual": {
            "description": "A berada dekat toilet/lampu dan tidak tahu cara menyalakan listrik; B menunjukkan tombol."
          },
          "dialogue": [
            {
              "speaker": "A",
              "content": {
                "text": "あれ？電気が……。",
                "segments": [
                  {
                    "text": "あれ？"
                  },
                  {
                    "text": "電気",
                    "reading": "でんき"
                  },
                  {
                    "text": "が……。"
                  }
                ]
              }
            },
            {
              "speaker": "B",
              "content": {
                "text": "あっ、そのボタンを（　）。",
                "segments": [
                  {
                    "text": "あっ、そのボタンを（　）。"
                  }
                ]
              }
            },
            {
              "speaker": "A",
              "content": {
                "text": "ありがとうございます。",
                "segments": [
                  {
                    "text": "ありがとうございます。"
                  }
                ]
              }
            }
          ],
          "answer": {
            "text": "押すと、電気がつきます",
            "segments": [
              {
                "text": "押",
                "reading": "お"
              },
              {
                "text": "すと、"
              },
              {
                "text": "電気",
                "reading": "でんき"
              },
              {
                "text": "がつきます"
              }
            ]
          },
          "explanationId": "〜と digunakan untuk hasil otomatis: ボタンを押すと、電気がつきます = kalau tombol ditekan, lampu menyala.",
          "solvingSteps": [
            "Gambar menunjukkan tombol sebagai pemicu.",
            "Hasilnya lampu menyala.",
            "Gunakan pola V辞書形 + と."
          ],
          "grammarPoint": "Vると、〜"
        },
        {
          "id": "13-15-s6-q2a",
          "visual": {
            "description": "B sedang mencari taman tempat bisa melakukan BBQ."
          },
          "dialogue": [
            {
              "speaker": "A",
              "content": {
                "text": "何をしていますか。",
                "segments": [
                  {
                    "text": "何",
                    "reading": "なに"
                  },
                  {
                    "text": "をしていますか。"
                  }
                ]
              }
            },
            {
              "speaker": "B",
              "content": {
                "text": "（　）。",
                "segments": [
                  {
                    "text": "（　）。"
                  }
                ]
              }
            }
          ],
          "answer": {
            "text": "バーベキューができる公園をさがしています",
            "segments": [
              {
                "text": "バーベキューができる"
              },
              {
                "text": "公園",
                "reading": "こうえん"
              },
              {
                "text": "をさがしています"
              }
            ]
          },
          "explanationId": "公園 diterangkan oleh klausa バーベキューができる. Seluruh frasa menjadi objek dari さがしています.",
          "solvingSteps": [
            "Yang dicari = 公園.",
            "Syarat taman = BBQ bisa dilakukan.",
            "Bentuk klausa relatif: バーベキューができる公園."
          ],
          "grammarPoint": "普通形 + N"
        },
        {
          "id": "13-15-s6-q2b",
          "visual": {
            "description": "Peta menunjukkan みどり公園 sekitar 5 menit jalan kaki dari stasiun."
          },
          "dialogue": [
            {
              "speaker": "B",
              "content": {
                "text": "Aさん、いい公園を知っていますか。",
                "segments": [
                  {
                    "text": "Aさん、いい"
                  },
                  {
                    "text": "公園",
                    "reading": "こうえん"
                  },
                  {
                    "text": "を"
                  },
                  {
                    "text": "知",
                    "reading": "し"
                  },
                  {
                    "text": "っていますか。"
                  }
                ]
              }
            },
            {
              "speaker": "A",
              "content": {
                "text": "うーん、みどり公園はどうですか。（　）。",
                "segments": [
                  {
                    "text": "うーん、みどり"
                  },
                  {
                    "text": "公園",
                    "reading": "こうえん"
                  },
                  {
                    "text": "はどうですか。（　）。"
                  }
                ]
              }
            },
            {
              "speaker": "B",
              "content": {
                "text": "へえ、いいですね。",
                "segments": [
                  {
                    "text": "へえ、いいですね。"
                  }
                ]
              }
            }
          ],
          "answer": {
            "text": "駅から歩いて5分ぐらいです",
            "segments": [
              {
                "text": "駅",
                "reading": "えき"
              },
              {
                "text": "から"
              },
              {
                "text": "歩",
                "reading": "ある"
              },
              {
                "text": "いて"
              },
              {
                "text": "5分",
                "reading": "ごふん"
              },
              {
                "text": "ぐらいです"
              }
            ]
          },
          "explanationId": "Peta menunjukkan taman sekitar 5 menit berjalan kaki dari stasiun. Pola alami: 駅から歩いて5分ぐらいです.",
          "solvingSteps": [
            "Baca peta: titik awal 駅.",
            "Moda = berjalan kaki → 歩いて.",
            "Durasi = 5分ぐらい."
          ],
          "grammarPoint": "場所から歩いて時間"
        }
      ]
    },
    {
      "section": 7,
      "title": "あなたの答え",
      "titleReading": "あなたのこたえ",
      "instruction": {
        "text": "あなたの答えを書いてください。",
        "segments": [
          {
            "text": "あなたの"
          },
          {
            "text": "答",
            "reading": "こた"
          },
          {
            "text": "えを"
          },
          {
            "text": "書",
            "reading": "か"
          },
          {
            "text": "いてください。"
          }
        ]
      },
      "type": "open-answer",
      "grading": "open",
      "items": [
        {
          "id": "13-15-s7-q1",
          "question": {
            "text": "日本の食べ物を食べたことがありますか。",
            "segments": [
              {
                "text": "日本",
                "reading": "にほん"
              },
              {
                "text": "の"
              },
              {
                "text": "食",
                "reading": "た"
              },
              {
                "text": "べ"
              },
              {
                "text": "物",
                "reading": "もの"
              },
              {
                "text": "を"
              },
              {
                "text": "食",
                "reading": "た"
              },
              {
                "text": "べたことがありますか。"
              }
            ]
          },
          "sampleAnswers": [
            {
              "text": "はい、何回もあります。",
              "segments": [
                {
                  "text": "はい、"
                },
                {
                  "text": "何回",
                  "reading": "なんかい"
                },
                {
                  "text": "もあります。"
                }
              ]
            },
            {
              "text": "はい、あります。ラーメンや寿司を食べたことがあります。",
              "segments": [
                {
                  "text": "はい、あります。ラーメンや"
                },
                {
                  "text": "寿司",
                  "reading": "すし"
                },
                {
                  "text": "を"
                },
                {
                  "text": "食",
                  "reading": "た"
                },
                {
                  "text": "べたことがあります。"
                }
              ]
            }
          ],
          "explanationId": "Pengalaman memakai Vたことがあります. Jika pernah berkali-kali, bisa menjawab 何回もあります.",
          "solvingSteps": [
            "Tentukan apakah pernah.",
            "Jika ya → はい、あります.",
            "Boleh tambahkan contoh makanan atau frekuensi."
          ],
          "grammarPoint": "Vたことがあります"
        },
        {
          "id": "13-15-s7-q2",
          "question": {
            "text": "日本の食べ物についてどう思いますか。",
            "segments": [
              {
                "text": "日本",
                "reading": "にほん"
              },
              {
                "text": "の"
              },
              {
                "text": "食",
                "reading": "た"
              },
              {
                "text": "べ"
              },
              {
                "text": "物",
                "reading": "もの"
              },
              {
                "text": "についてどう"
              },
              {
                "text": "思",
                "reading": "おも"
              },
              {
                "text": "いますか。"
              }
            ]
          },
          "sampleAnswers": [
            {
              "text": "インドネシア料理より味があまり濃くないですが、おいしいと思います。",
              "segments": [
                {
                  "text": "インドネシア"
                },
                {
                  "text": "料理",
                  "reading": "りょうり"
                },
                {
                  "text": "より"
                },
                {
                  "text": "味",
                  "reading": "あじ"
                },
                {
                  "text": "があまり"
                },
                {
                  "text": "濃",
                  "reading": "こ"
                },
                {
                  "text": "くないですが、おいしいと"
                },
                {
                  "text": "思",
                  "reading": "おも"
                },
                {
                  "text": "います。"
                }
              ]
            },
            {
              "text": "日本の食べ物はヘルシーで、おいしいと思います。",
              "segments": [
                {
                  "text": "日本",
                  "reading": "にほん"
                },
                {
                  "text": "の"
                },
                {
                  "text": "食",
                  "reading": "た"
                },
                {
                  "text": "べ"
                },
                {
                  "text": "物",
                  "reading": "もの"
                },
                {
                  "text": "はヘルシーで、おいしいと"
                },
                {
                  "text": "思",
                  "reading": "おも"
                },
                {
                  "text": "います。"
                }
              ]
            }
          ],
          "explanationId": "Pendapat memakai 普通形 + と思います. Untuk membandingkan bisa memakai Nより. 味が濃い = rasanya kuat/pekat.",
          "solvingSteps": [
            "Tentukan pendapat utama.",
            "Jika membandingkan, gunakan AよりB.",
            "Akhiri dengan 〜と思います."
          ],
          "grammarPoint": "〜について / Nより / 〜と思います"
        }
      ]
    },
    {
      "section": 8,
      "title": "読解：青春18きっぷ",
      "titleReading": "どっかい：せいしゅんじゅうはちきっぷ",
      "instruction": {
        "text": "次の文を読んでください。正しいものに○、間違っているものに×をつけてください。",
        "segments": [
          {
            "text": "次",
            "reading": "つぎ"
          },
          {
            "text": "の"
          },
          {
            "text": "文",
            "reading": "ぶん"
          },
          {
            "text": "を"
          },
          {
            "text": "読",
            "reading": "よ"
          },
          {
            "text": "んでください。"
          },
          {
            "text": "正",
            "reading": "ただ"
          },
          {
            "text": "しいものに○、"
          },
          {
            "text": "間違",
            "reading": "まちが"
          },
          {
            "text": "っているものに×をつけてください。"
          }
        ]
      },
      "type": "reading-true-false",
      "passage": {
        "text": "私のおすすめは青春18きっぷです。\n青春18きっぷは1日どこへでも行くことができるきっぷです。春休みや夏休みなど長い休みのとき、買うことができます。5枚で12,050円です。友達と旅行に行くとき、いっしょに使うこともできます。\n新幹線や特急電車に乗ることができませんが、旅行が好きな人にはおすすめです。電車の窓から景色を見たり、お弁当を食べたりすることができますから、楽しいです。\n時間がある人はぜひ青春18きっぷで旅行してください。",
        "segments": [
          {
            "text": "私",
            "reading": "わたし"
          },
          {
            "text": "のおすすめは"
          },
          {
            "text": "青春18",
            "reading": "せいしゅんじゅうはち"
          },
          {
            "text": "きっぷです。\n"
          },
          {
            "text": "青春18",
            "reading": "せいしゅんじゅうはち"
          },
          {
            "text": "きっぷは"
          },
          {
            "text": "1日",
            "reading": "いちにち"
          },
          {
            "text": "どこへでも"
          },
          {
            "text": "行",
            "reading": "い"
          },
          {
            "text": "くことができるきっぷです。"
          },
          {
            "text": "春休",
            "reading": "はるやす"
          },
          {
            "text": "みや"
          },
          {
            "text": "夏休",
            "reading": "なつやす"
          },
          {
            "text": "みなど"
          },
          {
            "text": "長",
            "reading": "なが"
          },
          {
            "text": "い"
          },
          {
            "text": "休",
            "reading": "やす"
          },
          {
            "text": "みのとき、"
          },
          {
            "text": "買",
            "reading": "か"
          },
          {
            "text": "うことができます。"
          },
          {
            "text": "5枚",
            "reading": "ごまい"
          },
          {
            "text": "で"
          },
          {
            "text": "12,050円",
            "reading": "いちまんにせんごじゅうえん"
          },
          {
            "text": "です。"
          },
          {
            "text": "友達",
            "reading": "ともだち"
          },
          {
            "text": "と"
          },
          {
            "text": "旅行",
            "reading": "りょこう"
          },
          {
            "text": "に"
          },
          {
            "text": "行",
            "reading": "い"
          },
          {
            "text": "くとき、いっしょに"
          },
          {
            "text": "使",
            "reading": "つか"
          },
          {
            "text": "うこともできます。\n"
          },
          {
            "text": "新幹線",
            "reading": "しんかんせん"
          },
          {
            "text": "や"
          },
          {
            "text": "特急電車",
            "reading": "とっきゅうでんしゃ"
          },
          {
            "text": "に"
          },
          {
            "text": "乗",
            "reading": "の"
          },
          {
            "text": "ることができませんが、"
          },
          {
            "text": "旅行",
            "reading": "りょこう"
          },
          {
            "text": "が"
          },
          {
            "text": "好",
            "reading": "す"
          },
          {
            "text": "きな"
          },
          {
            "text": "人",
            "reading": "ひと"
          },
          {
            "text": "にはおすすめです。"
          },
          {
            "text": "電車",
            "reading": "でんしゃ"
          },
          {
            "text": "の"
          },
          {
            "text": "窓",
            "reading": "まど"
          },
          {
            "text": "から"
          },
          {
            "text": "景色",
            "reading": "けしき"
          },
          {
            "text": "を"
          },
          {
            "text": "見",
            "reading": "み"
          },
          {
            "text": "たり、お"
          },
          {
            "text": "弁当",
            "reading": "べんとう"
          },
          {
            "text": "を"
          },
          {
            "text": "食",
            "reading": "た"
          },
          {
            "text": "べたりすることができますから、"
          },
          {
            "text": "楽",
            "reading": "たの"
          },
          {
            "text": "しいです。\n"
          },
          {
            "text": "時間",
            "reading": "じかん"
          },
          {
            "text": "がある"
          },
          {
            "text": "人",
            "reading": "ひと"
          },
          {
            "text": "はぜひ"
          },
          {
            "text": "青春18",
            "reading": "せいしゅんじゅうはち"
          },
          {
            "text": "きっぷで"
          },
          {
            "text": "旅行",
            "reading": "りょこう"
          },
          {
            "text": "してください。"
          }
        ]
      },
      "readingStrategy": [
        "Tandai angka, jumlah lembar, jenis kereta, dan kapan tiket bisa dibeli.",
        "Bedakan '5枚で12,050円' dari '1枚で12,050円'.",
        "Perhatikan bentuk negatif seperti 乗ることができません.",
        "Cari bukti langsung di teks sebelum memilih ○ atau ×."
      ],
      "items": [
        {
          "id": "13-15-s8-example",
          "isExample": true,
          "statement": {
            "text": "春休みや夏休みに買うことができます。",
            "segments": [
              {
                "text": "春休",
                "reading": "はるやす"
              },
              {
                "text": "みや"
              },
              {
                "text": "夏休",
                "reading": "なつやす"
              },
              {
                "text": "みに"
              },
              {
                "text": "買",
                "reading": "か"
              },
              {
                "text": "うことができます。"
              }
            ]
          },
          "answer": "○",
          "explanationId": "Teks mengatakan 春休みや夏休みなど長い休みのとき、買うことができます."
        },
        {
          "id": "13-15-s8-q1",
          "statement": {
            "text": "1枚で12,050円です。",
            "segments": [
              {
                "text": "1枚",
                "reading": "いちまい"
              },
              {
                "text": "で"
              },
              {
                "text": "12,050円",
                "reading": "いちまんにせんごじゅうえん"
              },
              {
                "text": "です。"
              }
            ]
          },
          "answer": "×",
          "explanationId": "Teks mengatakan 5枚で12,050円です, bukan 1枚.",
          "solvingSteps": [
            "Cari angka 12,050円.",
            "Teks memasangkannya dengan 5枚.",
            "Soal mengatakan 1枚 → ×."
          ]
        },
        {
          "id": "13-15-s8-q2",
          "statement": {
            "text": "友達と5人で1日旅行することができます。",
            "segments": [
              {
                "text": "友達",
                "reading": "ともだち"
              },
              {
                "text": "と"
              },
              {
                "text": "5人",
                "reading": "ごにん"
              },
              {
                "text": "で"
              },
              {
                "text": "1日",
                "reading": "いちにち"
              },
              {
                "text": "旅行",
                "reading": "りょこう"
              },
              {
                "text": "することができます。"
              }
            ]
          },
          "answer": "○",
          "explanationId": "Tiket terdiri dari 5 lembar dan teks menyebut bisa digunakan bersama teman. Jadi lima orang dapat menggunakan lima lembar untuk satu hari.",
          "solvingSteps": [
            "Teks: 5枚.",
            "Teks: 友達といっしょに使うこともできます.",
            "5 orang memakai 5 lembar untuk satu hari sesuai informasi → ○."
          ]
        },
        {
          "id": "13-15-s8-q3",
          "statement": {
            "text": "新幹線に乗って遠い所へ行くことができます。",
            "segments": [
              {
                "text": "新幹線",
                "reading": "しんかんせん"
              },
              {
                "text": "に"
              },
              {
                "text": "乗",
                "reading": "の"
              },
              {
                "text": "って"
              },
              {
                "text": "遠",
                "reading": "とお"
              },
              {
                "text": "い"
              },
              {
                "text": "所",
                "reading": "ところ"
              },
              {
                "text": "へ"
              },
              {
                "text": "行",
                "reading": "い"
              },
              {
                "text": "くことができます。"
              }
            ]
          },
          "answer": "×",
          "explanationId": "Teks secara eksplisit mengatakan 新幹線や特急電車に乗ることができません.",
          "solvingSteps": [
            "Cari 新幹線 dalam teks.",
            "Ada できません = tidak bisa.",
            "Pernyataan mengatakan bisa → ×."
          ]
        }
      ]
    }
  ]
};
