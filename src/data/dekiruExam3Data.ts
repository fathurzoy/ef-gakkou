import { DekiruExamData } from '../types/dekiru';

export const dekiruExam3Data: DekiruExamData = {
  "schemaVersion": "2.0.0",
  "book": "できる日本語 初級",
  "exam": {
    "id": "dekiru-review-7-9",
    "title": "7〜9課 復習テスト",
    "lessonRange": [
      7,
      9
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
    "htmlExample": "<ruby>友達<rt>ともだち</rt></ruby>の<ruby>誕生日<rt>たんじょうび</rt></ruby>"
  },
  "sections": [
    {
      "section": 2,
      "title": "絵を見てことばを書く",
      "titleReading": "えをみてことばをかく",
      "instruction": {
        "text": "絵を見て、（　）に言葉を書いてください。",
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
            "text": "て、（　）に"
          },
          {
            "text": "言葉",
            "reading": "ことば"
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
      "type": "picture-vocabulary",
      "items": [
        {
          "id": "7-9-s2-q1",
          "visual": {
            "description": "Gambar sebuah kamera."
          },
          "question": {
            "text": "新しい（　）がほしいです。",
            "segments": [
              {
                "text": "新",
                "reading": "あたら"
              },
              {
                "text": "しい（　）がほしいです。"
              }
            ]
          },
          "answer": {
            "text": "カメラ",
            "segments": [
              {
                "text": "カメラ"
              }
            ]
          },
          "meaningId": "Saya ingin kamera baru.",
          "explanationId": "Gambar menunjukkan kamera, jadi kalimatnya 新しいカメラがほしいです。",
          "solvingSteps": [
            "Lihat benda pada gambar.",
            "Masukkan nama benda itu ke sebelum がほしいです.",
            "Jawab カメラ."
          ],
          "vocabularyPoint": "カメラ"
        },
        {
          "id": "7-9-s2-q2",
          "visual": {
            "description": "Gambar sebuah gelas/cup."
          },
          "question": {
            "text": "すみません、（　）を取ってください。",
            "segments": [
              {
                "text": "すみません、（　）を"
              },
              {
                "text": "取",
                "reading": "と"
              },
              {
                "text": "ってください。"
              }
            ]
          },
          "answer": {
            "text": "コップ",
            "segments": [
              {
                "text": "コップ"
              }
            ]
          },
          "meaningId": "Permisi, tolong ambilkan gelas itu.",
          "explanationId": "Gambar menunjukkan コップ. Polanya Nを取ってください = tolong ambil N.",
          "solvingSteps": [
            "Identifikasi benda pada gambar.",
            "を menunjukkan benda itu adalah objek dari 取ってください.",
            "Jawab コップ."
          ],
          "vocabularyPoint": "コップ"
        },
        {
          "id": "7-9-s2-q3",
          "visual": {
            "description": "Gambar seseorang memberikan kotak hadiah kepada orang lain."
          },
          "question": {
            "text": "友達の誕生日（　）を買いに行きます。",
            "segments": [
              {
                "text": "友達",
                "reading": "ともだち"
              },
              {
                "text": "の"
              },
              {
                "text": "誕生日",
                "reading": "たんじょうび"
              },
              {
                "text": "（　）を"
              },
              {
                "text": "買",
                "reading": "か"
              },
              {
                "text": "いに"
              },
              {
                "text": "行",
                "reading": "い"
              },
              {
                "text": "きます。"
              }
            ]
          },
          "answer": {
            "text": "プレゼント",
            "segments": [
              {
                "text": "プレゼント"
              }
            ]
          },
          "meaningId": "Saya pergi membeli hadiah ulang tahun untuk teman.",
          "explanationId": "Gambar menunjukkan hadiah. 誕生日プレゼント berarti hadiah ulang tahun.",
          "solvingSteps": [
            "Perhatikan konteks 誕生日.",
            "Benda yang biasa dibeli untuk ulang tahun adalah プレゼント.",
            "Lengkapi menjadi 誕生日プレゼントを買いに行きます."
          ],
          "vocabularyPoint": "誕生日プレゼント"
        }
      ]
    },
    {
      "section": 3,
      "title": "助詞",
      "titleReading": "じょし",
      "instruction": {
        "text": "（　）にひらがなを1つ書いてください。×もあります。",
        "segments": [
          {
            "text": "（　）にひらがなを1つ"
          },
          {
            "text": "書",
            "reading": "か"
          },
          {
            "text": "いてください。×もあります。"
          }
        ]
      },
      "type": "particle-fill",
      "items": [
        {
          "id": "7-9-s3-q1",
          "question": {
            "text": "このナイフ（　）肉を切ってください。",
            "segments": [
              {
                "text": "このナイフ（　）"
              },
              {
                "text": "肉",
                "reading": "にく"
              },
              {
                "text": "を"
              },
              {
                "text": "切",
                "reading": "き"
              },
              {
                "text": "ってください。"
              }
            ]
          },
          "answer": [
            "で"
          ],
          "completed": {
            "text": "このナイフで肉を切ってください。",
            "segments": [
              {
                "text": "このナイフで"
              },
              {
                "text": "肉",
                "reading": "にく"
              },
              {
                "text": "を"
              },
              {
                "text": "切",
                "reading": "き"
              },
              {
                "text": "ってください。"
              }
            ]
          },
          "explanationId": "で menunjukkan alat yang digunakan untuk melakukan tindakan. ナイフで切ります = memotong dengan pisau.",
          "solvingSteps": [
            "Cari benda sebelum blank: ナイフ.",
            "ナイフ adalah alat.",
            "Partikel untuk alat = で."
          ],
          "grammarPoint": "道具で V"
        },
        {
          "id": "7-9-s3-q2",
          "question": {
            "text": "私は兄（　）2人（　）岡谷（　）住んでいます。",
            "segments": [
              {
                "text": "私",
                "reading": "わたし"
              },
              {
                "text": "は"
              },
              {
                "text": "兄",
                "reading": "あに"
              },
              {
                "text": "（　）"
              },
              {
                "text": "2人",
                "reading": "ふたり"
              },
              {
                "text": "（　）"
              },
              {
                "text": "岡谷",
                "reading": "おかや"
              },
              {
                "text": "（　）"
              },
              {
                "text": "住",
                "reading": "す"
              },
              {
                "text": "んでいます。"
              }
            ]
          },
          "answer": [
            "と",
            "で",
            "に"
          ],
          "completed": {
            "text": "私は兄と2人で岡谷に住んでいます。",
            "segments": [
              {
                "text": "私",
                "reading": "わたし"
              },
              {
                "text": "は"
              },
              {
                "text": "兄",
                "reading": "あに"
              },
              {
                "text": "と"
              },
              {
                "text": "2人",
                "reading": "ふたり"
              },
              {
                "text": "で"
              },
              {
                "text": "岡谷",
                "reading": "おかや"
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
              }
            ]
          },
          "explanationId": "兄と = bersama kakak laki-laki. 2人で = berdua. Tempat tinggal dengan 住んでいます memakai に: 岡谷に住んでいます。",
          "solvingSteps": [
            "Orang yang bersama kita → と.",
            "Jumlah orang yang melakukan/berada bersama → 2人で.",
            "Tempat tinggal sebelum 住んでいます → に."
          ],
          "grammarPoint": "Nと / 人数で / 場所に住んでいます"
        },
        {
          "id": "7-9-s3-q3",
          "question": {
            "text": "1週間（　）、2回（　）レストランで食事をします。",
            "segments": [
              {
                "text": "1週間",
                "reading": "いっしゅうかん"
              },
              {
                "text": "（　）、"
              },
              {
                "text": "2回",
                "reading": "にかい"
              },
              {
                "text": "（　）"
              },
              {
                "text": "レストランで"
              },
              {
                "text": "食事",
                "reading": "しょくじ"
              },
              {
                "text": "をします。"
              }
            ]
          },
          "answer": [
            "に",
            "×"
          ],
          "completed": {
            "text": "1週間に、2回レストランで食事をします。",
            "segments": [
              {
                "text": "1週間",
                "reading": "いっしゅうかん"
              },
              {
                "text": "に、"
              },
              {
                "text": "2回",
                "reading": "にかい"
              },
              {
                "text": "レストランで"
              },
              {
                "text": "食事",
                "reading": "しょくじ"
              },
              {
                "text": "をします。"
              }
            ]
          },
          "explanationId": "Frekuensi dinyatakan dengan pola 期間に回数: 1週間に2回. Setelah 2回 tidak perlu partikel.",
          "solvingSteps": [
            "Cari pola frekuensi: 'dalam satu minggu, dua kali'.",
            "Gunakan 期間に回数.",
            "Jadi 1週間に2回 dan blank kedua = ×."
          ],
          "grammarPoint": "期間に 回数"
        },
        {
          "id": "7-9-s3-q4",
          "question": {
            "text": "A：どうやってほしの美術館へ行きますか。\nB：駅から3番のバス（　）乗って、ほしの美術館前（　）降ります。",
            "segments": [
              {
                "text": "A：どうやってほしの"
              },
              {
                "text": "美術館",
                "reading": "びじゅつかん"
              },
              {
                "text": "へ"
              },
              {
                "text": "行",
                "reading": "い"
              },
              {
                "text": "きますか。\n"
              },
              {
                "text": "B："
              },
              {
                "text": "駅",
                "reading": "えき"
              },
              {
                "text": "から"
              },
              {
                "text": "3番",
                "reading": "さんばん"
              },
              {
                "text": "のバス（　）"
              },
              {
                "text": "乗",
                "reading": "の"
              },
              {
                "text": "って、"
              },
              {
                "text": "ほしの"
              },
              {
                "text": "美術館前",
                "reading": "びじゅつかんまえ"
              },
              {
                "text": "（　）"
              },
              {
                "text": "降",
                "reading": "お"
              },
              {
                "text": "ります。"
              }
            ]
          },
          "answer": [
            "に",
            "で"
          ],
          "completed": {
            "text": "駅から3番のバスに乗って、ほしの美術館前で降ります。",
            "segments": [
              {
                "text": "駅",
                "reading": "えき"
              },
              {
                "text": "から"
              },
              {
                "text": "3番",
                "reading": "さんばん"
              },
              {
                "text": "のバスに"
              },
              {
                "text": "乗",
                "reading": "の"
              },
              {
                "text": "って、"
              },
              {
                "text": "ほしの"
              },
              {
                "text": "美術館前",
                "reading": "びじゅつかんまえ"
              },
              {
                "text": "で"
              },
              {
                "text": "降",
                "reading": "お"
              },
              {
                "text": "ります。"
              }
            ]
          },
          "explanationId": "Kendaraan yang dinaiki memakai に: バスに乗ります. Tempat turun memakai で: 美術館前で降ります。",
          "solvingSteps": [
            "乗ります berpasangan dengan kendaraan + に.",
            "降ります berpasangan dengan tempat turun + で.",
            "Jawab に, で."
          ],
          "grammarPoint": "乗り物に乗ります / 場所で降ります"
        }
      ]
    },
    {
      "section": 4,
      "title": "場所とあります・います",
      "titleReading": "ばしょとあります・います",
      "instruction": {
        "text": "（　）に言葉を書いてください。［　］の正しいほうに○をつけてください。",
        "segments": [
          {
            "text": "（　）に"
          },
          {
            "text": "言葉",
            "reading": "ことば"
          },
          {
            "text": "を"
          },
          {
            "text": "書",
            "reading": "か"
          },
          {
            "text": "いてください。［　］の"
          },
          {
            "text": "正",
            "reading": "ただ"
          },
          {
            "text": "しいほうに○をつけてください。"
          }
        ]
      },
      "type": "location-existence",
      "items": [
        {
          "id": "7-9-s4-q1",
          "visual": {
            "description": "Diagram menunjukkan 喫茶店 berada di atas コンビニ."
          },
          "question": {
            "text": "喫茶店はコンビニの（　）に［います・あります］。",
            "segments": [
              {
                "text": "喫茶店",
                "reading": "きっさてん"
              },
              {
                "text": "はコンビニの（　）に［います・あります］。"
              }
            ]
          },
          "answer": {
            "location": {
              "text": "上",
              "segments": [
                {
                  "text": "上",
                  "reading": "うえ"
                }
              ]
            },
            "existence": "あります"
          },
          "completed": {
            "text": "喫茶店はコンビニの上にあります。",
            "segments": [
              {
                "text": "喫茶店",
                "reading": "きっさてん"
              },
              {
                "text": "はコンビニの"
              },
              {
                "text": "上",
                "reading": "うえ"
              },
              {
                "text": "にあります。"
              }
            ]
          },
          "explanationId": "喫茶店 adalah tempat/benda tak hidup, jadi gunakan あります. Posisi pada diagram adalah 上（うえ）.",
          "solvingSteps": [
            "Lihat posisi relatif pada gambar: 喫茶店 berada di atas コンビニ → 上.",
            "Tentukan hidup/tidak hidup: 喫茶店 bukan makhluk hidup → あります."
          ],
          "grammarPoint": "Nの上にあります"
        },
        {
          "id": "7-9-s4-q2",
          "visual": {
            "description": "Diagram menunjukkan 西川さん berada di depan rumah sakit."
          },
          "question": {
            "text": "西川さんは病院の（　）に［います・あります］。",
            "segments": [
              {
                "text": "西川",
                "reading": "にしかわ"
              },
              {
                "text": "さんは"
              },
              {
                "text": "病院",
                "reading": "びょういん"
              },
              {
                "text": "の（　）に［います・あります］。"
              }
            ]
          },
          "answer": {
            "location": {
              "text": "前",
              "segments": [
                {
                  "text": "前",
                  "reading": "まえ"
                }
              ]
            },
            "existence": "います"
          },
          "completed": {
            "text": "西川さんは病院の前にいます。",
            "segments": [
              {
                "text": "西川",
                "reading": "にしかわ"
              },
              {
                "text": "さんは"
              },
              {
                "text": "病院",
                "reading": "びょういん"
              },
              {
                "text": "の"
              },
              {
                "text": "前",
                "reading": "まえ"
              },
              {
                "text": "にいます。"
              }
            ]
          },
          "explanationId": "西川さん adalah orang, jadi gunakan います. Pada gambar ia berada di 前（まえ） = depan rumah sakit.",
          "solvingSteps": [
            "Lihat posisi orang terhadap 病院 → 前.",
            "Karena subjeknya orang → います."
          ],
          "grammarPoint": "人は Nの前にいます"
        },
        {
          "id": "7-9-s4-q3",
          "visual": {
            "description": "Diagram berurutan: 銀行 — コンビニ — 喫茶店."
          },
          "question": {
            "text": "コンビニは銀行と喫茶店の（　）に［います・あります］。",
            "segments": [
              {
                "text": "コンビニは"
              },
              {
                "text": "銀行",
                "reading": "ぎんこう"
              },
              {
                "text": "と"
              },
              {
                "text": "喫茶店",
                "reading": "きっさてん"
              },
              {
                "text": "の（　）に［います・あります］。"
              }
            ]
          },
          "answer": {
            "location": {
              "text": "間",
              "segments": [
                {
                  "text": "間",
                  "reading": "あいだ"
                }
              ]
            },
            "existence": "あります"
          },
          "completed": {
            "text": "コンビニは銀行と喫茶店の間にあります。",
            "segments": [
              {
                "text": "コンビニは"
              },
              {
                "text": "銀行",
                "reading": "ぎんこう"
              },
              {
                "text": "と"
              },
              {
                "text": "喫茶店",
                "reading": "きっさてん"
              },
              {
                "text": "の"
              },
              {
                "text": "間",
                "reading": "あいだ"
              },
              {
                "text": "にあります。"
              }
            ]
          },
          "explanationId": "間（あいだ） berarti 'di antara'. コンビニ adalah tempat/benda tak hidup sehingga memakai あります.",
          "solvingSteps": [
            "Diagram menempatkan コンビニ di tengah dua tempat.",
            "Di antara A dan B = AとBの間.",
            "コンビニ bukan makhluk hidup → あります."
          ],
          "grammarPoint": "AとBの間にあります"
        }
      ]
    },
    {
      "section": 5,
      "title": "正しいものを選ぶ",
      "titleReading": "ただしいものをえらぶ",
      "instruction": {
        "text": "どちらがいいですか。正しいほうに○をつけてください。",
        "segments": [
          {
            "text": "どちらがいいですか。"
          },
          {
            "text": "正",
            "reading": "ただ"
          },
          {
            "text": "しいほうに○をつけてください。"
          }
        ]
      },
      "type": "multiple-choice",
      "items": [
        {
          "id": "7-9-s5-q1",
          "question": {
            "text": "私の［父・お父さん］は会社員です。",
            "segments": [
              {
                "text": "私",
                "reading": "わたし"
              },
              {
                "text": "の［"
              },
              {
                "text": "父",
                "reading": "ちち"
              },
              {
                "text": "・お"
              },
              {
                "text": "父",
                "reading": "とう"
              },
              {
                "text": "さん］は"
              },
              {
                "text": "会社員",
                "reading": "かいしゃいん"
              },
              {
                "text": "です。"
              }
            ]
          },
          "choices": [
            "父",
            "お父さん"
          ],
          "answer": "父",
          "answerRuby": {
            "text": "父",
            "segments": [
              {
                "text": "父",
                "reading": "ちち"
              }
            ]
          },
          "explanationId": "Saat membicarakan ayah sendiri kepada orang lain, gunakan 父（ちち）. お父さん biasanya untuk ayah orang lain atau saat memanggil ayah.",
          "solvingSteps": [
            "Ada 私の, jadi membicarakan keluarga sendiri.",
            "Gunakan bentuk rendah/keluarga sendiri → 父."
          ],
          "grammarPoint": "父 vs お父さん"
        },
        {
          "id": "7-9-s5-q2",
          "question": {
            "text": "A：Bさんのかばんは［どれ・どの］ですか。\nB：それです。［それ・その］黒いかばんです。",
            "segments": [
              {
                "text": "A：Bさんのかばんは［どれ・どの］ですか。\n"
              },
              {
                "text": "B：それです。［それ・その］"
              },
              {
                "text": "黒",
                "reading": "くろ"
              },
              {
                "text": "いかばんです。"
              }
            ]
          },
          "choices": {
            "blank1": [
              "どれ",
              "どの"
            ],
            "blank2": [
              "それ",
              "その"
            ]
          },
          "answer": [
            "どれ",
            "その"
          ],
          "explanationId": "どれ dapat berdiri sendiri, sedangkan どの harus diikuti nomina. Pada kalimat kedua, 黒いかばん adalah nomina yang diterangkan, sehingga gunakan その.",
          "solvingSteps": [
            "Blank 1 langsung diikuti ですか → harus bisa berdiri sendiri → どれ.",
            "Blank 2 diikuti 黒いかばん → gunakan その + nomina."
          ],
          "grammarPoint": "どれ / どのN・それ / そのN"
        },
        {
          "id": "7-9-s5-q3",
          "question": {
            "text": "A：紅茶は［まだ・もう］ありますか。\nB：あ、［まだ・もう］ありません。コーヒーはどうですか。",
            "segments": [
              {
                "text": "A："
              },
              {
                "text": "紅茶",
                "reading": "こうちゃ"
              },
              {
                "text": "は［まだ・もう］ありますか。\n"
              },
              {
                "text": "B：あ、［まだ・もう］ありません。コーヒーはどうですか。"
              }
            ]
          },
          "choices": {
            "blank1": [
              "まだ",
              "もう"
            ],
            "blank2": [
              "まだ",
              "もう"
            ]
          },
          "answer": [
            "まだ",
            "もう"
          ],
          "explanationId": "まだありますか = apakah masih ada? もうありません = sudah tidak ada lagi.",
          "solvingSteps": [
            "Pertanyaan mengecek apakah stok masih ada → まだありますか.",
            "Jawaban mengatakan sudah habis → もうありません."
          ],
          "grammarPoint": "まだあります / もうありません"
        },
        {
          "id": "7-9-s5-q4",
          "question": {
            "text": "A：かわいい財布ですね。\nB：ありがとうございます。父に［くれました・もらいました］。",
            "segments": [
              {
                "text": "A：かわいい"
              },
              {
                "text": "財布",
                "reading": "さいふ"
              },
              {
                "text": "ですね。\n"
              },
              {
                "text": "B：ありがとうございます。"
              },
              {
                "text": "父",
                "reading": "ちち"
              },
              {
                "text": "に［くれました・もらいました］。"
              }
            ]
          },
          "choices": [
            "くれました",
            "もらいました"
          ],
          "answer": "もらいました",
          "explanationId": "Pembicara menerima dompet dari ayahnya. Dari sudut penerima gunakan もらいました: 父にもらいました。",
          "solvingSteps": [
            "Tentukan arah pemberian: ayah → saya.",
            "Subjek tersirat adalah saya sebagai penerima.",
            "Gunakan Nにもらいました."
          ],
          "grammarPoint": "Nにもらいました"
        },
        {
          "id": "7-9-s5-q5",
          "question": {
            "text": "去年の私の誕生日に、友達が時計を［あげました・くれました］。",
            "segments": [
              {
                "text": "去年",
                "reading": "きょねん"
              },
              {
                "text": "の"
              },
              {
                "text": "私",
                "reading": "わたし"
              },
              {
                "text": "の"
              },
              {
                "text": "誕生日",
                "reading": "たんじょうび"
              },
              {
                "text": "に、"
              },
              {
                "text": "友達",
                "reading": "ともだち"
              },
              {
                "text": "が"
              },
              {
                "text": "時計",
                "reading": "とけい"
              },
              {
                "text": "を［あげました・くれました］。"
              }
            ]
          },
          "choices": [
            "あげました",
            "くれました"
          ],
          "answer": "くれました",
          "explanationId": "Teman memberi jam kepada pembicara ('saya'). Jika orang lain memberi sesuatu kepada saya/kelompok saya, gunakan くれました。",
          "solvingSteps": [
            "Pemberi = 友達.",
            "Penerima = 私.",
            "Orang lain memberi kepada saya → くれました."
          ],
          "grammarPoint": "Nが私に〜をくれました"
        }
      ]
    },
    {
      "section": 6,
      "title": "形を変える",
      "titleReading": "かたちをかえる",
      "instruction": {
        "text": "（　）に書いてください。",
        "segments": [
          {
            "text": "（　）に"
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
      "type": "conjugation",
      "items": [
        {
          "id": "7-9-s6-q1",
          "question": {
            "text": "A：昨日はいそがしかったですか。\nB：いいえ、あまり（いそがしいです → ＿＿＿）。",
            "segments": [
              {
                "text": "A："
              },
              {
                "text": "昨日",
                "reading": "きのう"
              },
              {
                "text": "はいそがしかったですか。\n"
              },
              {
                "text": "B：いいえ、あまり（いそがしいです → ＿＿＿）。"
              }
            ]
          },
          "answer": {
            "text": "いそがしくなかったです",
            "segments": [
              {
                "text": "いそがしくなかったです"
              }
            ]
          },
          "explanationId": "あまり biasanya dipakai dengan bentuk negatif. Karena pertanyaannya tentang kemarin, gunakan negatif lampau i-adjective: いそがしい → いそがしくなかったです.",
          "solvingSteps": [
            "Cari kata waktu: 昨日 → masa lalu.",
            "Ada あまり → bentuk negatif.",
            "i-adjective negatif lampau: 〜くなかったです."
          ],
          "grammarPoint": "い形容詞・過去否定"
        },
        {
          "id": "7-9-s6-q2",
          "question": {
            "text": "A：横浜の海はきれいですか。\nB：いいえ、あまり（きれいです → ＿＿＿）。",
            "segments": [
              {
                "text": "A："
              },
              {
                "text": "横浜",
                "reading": "よこはま"
              },
              {
                "text": "の"
              },
              {
                "text": "海",
                "reading": "うみ"
              },
              {
                "text": "はきれいですか。\n"
              },
              {
                "text": "B：いいえ、あまり（きれいです → ＿＿＿）。"
              }
            ]
          },
          "answer": {
            "text": "きれいじゃありません",
            "segments": [
              {
                "text": "きれいじゃありません"
              }
            ]
          },
          "acceptedVariants": [
            {
              "text": "きれいではありません",
              "segments": [
                {
                  "text": "きれいではありません"
                }
              ]
            }
          ],
          "explanationId": "きれい adalah na-adjective. Dengan あまり gunakan negatif: きれいじゃありません.",
          "solvingSteps": [
            "あまり memberi petunjuk bentuk negatif.",
            "きれい adalah na-adjective.",
            "Negatif sopan → きれいじゃありません."
          ],
          "grammarPoint": "な形容詞・否定"
        },
        {
          "id": "7-9-s6-q3",
          "question": {
            "text": "箱根に（有名です → ＿＿＿）温泉があります。",
            "segments": [
              {
                "text": "箱根",
                "reading": "はこね"
              },
              {
                "text": "に（"
              },
              {
                "text": "有名",
                "reading": "ゆうめい"
              },
              {
                "text": "です → ＿＿＿）"
              },
              {
                "text": "温泉",
                "reading": "おんせん"
              },
              {
                "text": "があります。"
              }
            ]
          },
          "answer": {
            "text": "有名な",
            "segments": [
              {
                "text": "有名",
                "reading": "ゆうめい"
              },
              {
                "text": "な"
              }
            ]
          },
          "explanationId": "有名 adalah na-adjective. Sebelum nomina 温泉 gunakan 有名な温泉.",
          "solvingSteps": [
            "Setelah blank ada nomina 温泉.",
            "Na-adjective sebelum nomina memakai な.",
            "有名です → 有名な."
          ],
          "grammarPoint": "な形容詞 + な + N"
        },
        {
          "id": "7-9-s6-q4",
          "question": {
            "text": "おとといは天気が（いいです → ＿＿＿）から、洗濯をしました。",
            "segments": [
              {
                "text": "おとといは"
              },
              {
                "text": "天気",
                "reading": "てんき"
              },
              {
                "text": "が（いいです → ＿＿＿）から、"
              },
              {
                "text": "洗濯",
                "reading": "せんたく"
              },
              {
                "text": "をしました。"
              }
            ]
          },
          "answer": {
            "text": "よかったです",
            "segments": [
              {
                "text": "よかったです"
              }
            ]
          },
          "explanationId": "いいです mempunyai bentuk lampau tidak beraturan: よかったです. Karena おととい adalah masa lalu, gunakan bentuk lampau.",
          "solvingSteps": [
            "Kata waktu おとatoi → masa lalu.",
            "いいです tidak berubah menjadi いかったです.",
            "Bentuk yang benar → よかったです."
          ],
          "grammarPoint": "いいです → よかったです"
        },
        {
          "id": "7-9-s6-q5",
          "question": {
            "text": "日曜日、友達と山へ写真を（撮ります → ＿＿＿）行きました。",
            "segments": [
              {
                "text": "日曜日",
                "reading": "にちようび"
              },
              {
                "text": "、"
              },
              {
                "text": "友達",
                "reading": "ともだち"
              },
              {
                "text": "と"
              },
              {
                "text": "山",
                "reading": "やま"
              },
              {
                "text": "へ"
              },
              {
                "text": "写真",
                "reading": "しゃしん"
              },
              {
                "text": "を（"
              },
              {
                "text": "撮",
                "reading": "と"
              },
              {
                "text": "ります → ＿＿＿）"
              },
              {
                "text": "行",
                "reading": "い"
              },
              {
                "text": "きました。"
              }
            ]
          },
          "answer": {
            "text": "撮りに",
            "segments": [
              {
                "text": "撮",
                "reading": "と"
              },
              {
                "text": "りに"
              }
            ]
          },
          "explanationId": "Tujuan pergi dinyatakan dengan stem bentuk ます + に行きます. 撮ります → 撮り + に → 撮りに行きました。",
          "solvingSteps": [
            "Sesudah blank ada 行きました.",
            "Pola tujuan gerak = Vます-stem + に行きます.",
            "撮ります → 撮りに."
          ],
          "grammarPoint": "Vます-stem + に行きます"
        }
      ]
    },
    {
      "section": 7,
      "title": "会話を完成する",
      "titleReading": "かいわをかんせいする",
      "instruction": {
        "text": "＿＿＿に文を書いてください。［　］の中から正しいものを1つ選んでください。",
        "segments": [
          {
            "text": "＿＿＿に"
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
            "text": "いてください。［　］の"
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
            "text": "しいものを1つ"
          },
          {
            "text": "選",
            "reading": "えら"
          },
          {
            "text": "んでください。"
          }
        ]
      },
      "type": "dialogue-completion",
      "items": [
        {
          "id": "7-9-s7-q1",
          "visual": {
            "description": "A mengajak B pergi makan bersama pada hari Minggu."
          },
          "dialogue": [
            {
              "speaker": "A",
              "content": {
                "text": "日曜日、いっしょにご飯を（1）。",
                "segments": [
                  {
                    "text": "日曜日",
                    "reading": "にちようび"
                  },
                  {
                    "text": "、いっしょにご"
                  },
                  {
                    "text": "飯",
                    "reading": "はん"
                  },
                  {
                    "text": "を（1）。"
                  }
                ]
              }
            },
            {
              "speaker": "B",
              "content": {
                "text": "いいですね。（2）。何を食べますか。",
                "segments": [
                  {
                    "text": "いいですね。（2）。"
                  },
                  {
                    "text": "何",
                    "reading": "なに"
                  },
                  {
                    "text": "を"
                  },
                  {
                    "text": "食",
                    "reading": "た"
                  },
                  {
                    "text": "べますか。"
                  }
                ]
              }
            }
          ],
          "answer": {
            "1": {
              "text": "食べに行きませんか",
              "segments": [
                {
                  "text": "食",
                  "reading": "た"
                },
                {
                  "text": "べに"
                },
                {
                  "text": "行",
                  "reading": "い"
                },
                {
                  "text": "きませんか"
                }
              ]
            },
            "2": {
              "text": "行きましょう",
              "segments": [
                {
                  "text": "行",
                  "reading": "い"
                },
                {
                  "text": "きましょう"
                }
              ]
            }
          },
          "explanationId": "Ajakan untuk pergi melakukan sesuatu memakai Vます-stem + に行きませんか. Persetujuan terhadap ajakan dapat dijawab 行きましょう.",
          "solvingSteps": [
            "Gambar menunjukkan ajakan pergi makan, bukan sekadar 'makan'.",
            "食べます → 食べに行きませんか.",
            "B menerima ajakan → 行きましょう."
          ],
          "grammarPoint": "Vに行きませんか / Vましょう"
        },
        {
          "id": "7-9-s7-q2",
          "dialogue": [
            {
              "speaker": "A",
              "content": {
                "text": "そうですね。Bさんはもうお好み焼きを食べましたか。",
                "segments": [
                  {
                    "text": "そうですね。Bさんはもうお"
                  },
                  {
                    "text": "好",
                    "reading": "この"
                  },
                  {
                    "text": "み"
                  },
                  {
                    "text": "焼",
                    "reading": "や"
                  },
                  {
                    "text": "きを"
                  },
                  {
                    "text": "食",
                    "reading": "た"
                  },
                  {
                    "text": "べましたか。"
                  }
                ]
              }
            },
            {
              "speaker": "B",
              "content": {
                "text": "いいえ、（　）。",
                "segments": [
                  {
                    "text": "いいえ、（　）。"
                  }
                ]
              }
            }
          ],
          "answer": {
            "text": "まだです",
            "segments": [
              {
                "text": "まだです"
              }
            ]
          },
          "acceptedVariants": [
            {
              "text": "まだ食べていません",
              "segments": [
                {
                  "text": "まだ"
                },
                {
                  "text": "食",
                  "reading": "た"
                },
                {
                  "text": "べていません"
                }
              ]
            }
          ],
          "explanationId": "Untuk pertanyaan もう〜ましたか, jika belum dilakukan jawab いいえ、まだです atau まだ〜ていません.",
          "solvingSteps": [
            "Cari もう〜ましたか.",
            "Jawaban negatif 'belum' = まだ.",
            "Bentuk ringkas yang diharapkan = まだです."
          ],
          "grammarPoint": "もう〜ましたか / まだです"
        },
        {
          "id": "7-9-s7-q3",
          "dialogue": [
            {
              "speaker": "A",
              "content": {
                "text": "岡谷においしい店があります［よ・ね］。",
                "segments": [
                  {
                    "text": "岡谷",
                    "reading": "おかや"
                  },
                  {
                    "text": "においしい"
                  },
                  {
                    "text": "店",
                    "reading": "みせ"
                  },
                  {
                    "text": "があります［よ・ね］。"
                  }
                ]
              }
            },
            {
              "speaker": "B",
              "content": {
                "text": "わあ、いいですね。（　）。",
                "segments": [
                  {
                    "text": "わあ、いいですね。（　）。"
                  }
                ]
              }
            }
          ],
          "choices": [
            "よ",
            "ね"
          ],
          "answer": {
            "particle": "よ",
            "response": {
              "text": "ぜひ行きたいです",
              "segments": [
                {
                  "text": "ぜひ"
                },
                {
                  "text": "行",
                  "reading": "い"
                },
                {
                  "text": "きたいです"
                }
              ]
            }
          },
          "acceptedResponses": [
            {
              "text": "ぜひ行きたいです。",
              "segments": [
                {
                  "text": "ぜひ"
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
            {
              "text": "ぜひ行ってみたいです。",
              "segments": [
                {
                  "text": "ぜひ"
                },
                {
                  "text": "行",
                  "reading": "い"
                },
                {
                  "text": "ってみたいです。"
                }
              ]
            }
          ],
          "explanationId": "よ dipakai untuk memberi informasi baru. Setelah mendengar ada restoran enak, respons alami adalah ぜひ行きたいです = saya benar-benar ingin pergi.",
          "solvingSteps": [
            "A memberi informasi baru tentang restoran → よ.",
            "B menunjukkan ketertarikan kuat → ぜひ + 〜たいです."
          ],
          "grammarPoint": "終助詞 よ / ぜひ〜たいです"
        },
        {
          "id": "7-9-s7-q4",
          "dialogue": [
            {
              "speaker": "B",
              "content": {
                "text": "えっと、日曜日、何時にどこで会いますか。",
                "segments": [
                  {
                    "text": "えっと、"
                  },
                  {
                    "text": "日曜日",
                    "reading": "にちようび"
                  },
                  {
                    "text": "、"
                  },
                  {
                    "text": "何時",
                    "reading": "なんじ"
                  },
                  {
                    "text": "にどこで"
                  },
                  {
                    "text": "会",
                    "reading": "あ"
                  },
                  {
                    "text": "いますか。"
                  }
                ]
              }
            },
            {
              "speaker": "A",
              "content": {
                "text": "6時に上諏訪駅は［どう・いい］ですか。",
                "segments": [
                  {
                    "text": "6時",
                    "reading": "ろくじ"
                  },
                  {
                    "text": "に"
                  },
                  {
                    "text": "上諏訪駅",
                    "reading": "かみすわえき"
                  },
                  {
                    "text": "は［どう・いい］ですか。"
                  }
                ]
              }
            },
            {
              "speaker": "B",
              "content": {
                "text": "はい、6時に上諏訪駅です［ね・よ］。わかりました。",
                "segments": [
                  {
                    "text": "はい、"
                  },
                  {
                    "text": "6時",
                    "reading": "ろくじ"
                  },
                  {
                    "text": "に"
                  },
                  {
                    "text": "上諏訪駅",
                    "reading": "かみすわえき"
                  },
                  {
                    "text": "です［ね・よ］。わかりました。"
                  }
                ]
              }
            }
          ],
          "choices": {
            "blank1": [
              "どう",
              "いい"
            ],
            "blank2": [
              "ね",
              "よ"
            ]
          },
          "answer": [
            "どう",
            "ね"
          ],
          "explanationId": "〜はどうですか digunakan untuk mengusulkan waktu/tempat. ね dipakai untuk mengonfirmasi kembali kesepakatan.",
          "solvingSteps": [
            "A sedang mengusulkan 'bagaimana kalau jam 6 di Kamisuwa Station?' → どう.",
            "B mengulang detail untuk konfirmasi → ね."
          ],
          "grammarPoint": "〜はどうですか / 〜ですね"
        },
        {
          "id": "7-9-s7-q5",
          "visual": {
            "description": "A mengajak B pergi menonton film malam ini. B menolak karena ada urusan."
          },
          "dialogue": [
            {
              "speaker": "A",
              "content": {
                "text": "今晩、（1）。",
                "segments": [
                  {
                    "text": "今晩",
                    "reading": "こんばん"
                  },
                  {
                    "text": "、（1）。"
                  }
                ]
              }
            },
            {
              "speaker": "B",
              "content": {
                "text": "すみません、今晩はちょっと……。（2）。",
                "segments": [
                  {
                    "text": "すみません、"
                  },
                  {
                    "text": "今晩",
                    "reading": "こんばん"
                  },
                  {
                    "text": "はちょっと……。（2）。"
                  }
                ]
              }
            },
            {
              "speaker": "A",
              "content": {
                "text": "ああ、そうですか。残念です。［それから・じゃ］、また今度。",
                "segments": [
                  {
                    "text": "ああ、そうですか。"
                  },
                  {
                    "text": "残念",
                    "reading": "ざんねん"
                  },
                  {
                    "text": "です。［それから・じゃ］、また"
                  },
                  {
                    "text": "今度",
                    "reading": "こんど"
                  },
                  {
                    "text": "。"
                  }
                ]
              }
            }
          ],
          "choices": [
            "それから",
            "じゃ"
          ],
          "answer": {
            "1": {
              "text": "映画を見に行きませんか",
              "segments": [
                {
                  "text": "映画",
                  "reading": "えいが"
                },
                {
                  "text": "を"
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
                  "text": "きませんか"
                }
              ]
            },
            "2": {
              "text": "用事がありますから",
              "segments": [
                {
                  "text": "用事",
                  "reading": "ようじ"
                },
                {
                  "text": "がありますから"
                }
              ]
            },
            "choice": "じゃ"
          },
          "acceptedVariants": {
            "1": [
              {
                "text": "いっしょに映画を見に行きませんか",
                "segments": [
                  {
                    "text": "いっしょに"
                  },
                  {
                    "text": "映画",
                    "reading": "えいが"
                  },
                  {
                    "text": "を"
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
                    "text": "きませんか"
                  }
                ]
              },
              {
                "text": "今晩、映画を見に行きませんか",
                "segments": [
                  {
                    "text": "今晩",
                    "reading": "こんばん"
                  },
                  {
                    "text": "、"
                  },
                  {
                    "text": "映画",
                    "reading": "えいが"
                  },
                  {
                    "text": "を"
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
                    "text": "きませんか"
                  }
                ]
              }
            ],
            "2": [
              {
                "text": "用事があります",
                "segments": [
                  {
                    "text": "用事",
                    "reading": "ようじ"
                  },
                  {
                    "text": "があります"
                  }
                ]
              }
            ]
          },
          "explanationId": "Ajakan menonton film memakai 映画を見に行きませんか. Penolakan dapat diberi alasan 用事がありますから. Setelah 'sayang sekali', じゃ、また今度 adalah ungkapan alami untuk 'kalau begitu, lain kali'.",
          "solvingSteps": [
            "Gambar menunjukkan ajakan menonton film → 見に行きませんか.",
            "B berkata 今晩はちょっと… → berikan alasan yang sopan.",
            "Untuk menutup percakapan setelah batal → じゃ、また今度."
          ],
          "grammarPoint": "Vに行きませんか / 〜から / じゃ、また今度"
        }
      ]
    },
    {
      "section": 8,
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
          "id": "7-9-s8-q1",
          "question": {
            "text": "先週の週末、何をしましたか。",
            "segments": [
              {
                "text": "先週",
                "reading": "せんしゅう"
              },
              {
                "text": "の"
              },
              {
                "text": "週末",
                "reading": "しゅうまつ"
              },
              {
                "text": "、"
              },
              {
                "text": "何",
                "reading": "なに"
              },
              {
                "text": "をしましたか。"
              }
            ]
          },
          "sampleAnswers": [
            {
              "text": "友達と買い物に行きました。",
              "segments": [
                {
                  "text": "友達",
                  "reading": "ともだち"
                },
                {
                  "text": "と"
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
                  "text": "きました。"
                }
              ]
            },
            {
              "text": "家で料理をしました。",
              "segments": [
                {
                  "text": "家",
                  "reading": "いえ"
                },
                {
                  "text": "で"
                },
                {
                  "text": "料理",
                  "reading": "りょうり"
                },
                {
                  "text": "をしました。"
                }
              ]
            }
          ],
          "explanationId": "Jawaban bebas. Karena menanyakan kegiatan akhir pekan lalu, gunakan bentuk lampau 〜ました.",
          "solvingSteps": [
            "Pilih kegiatan yang benar-benar kamu lakukan atau contoh kegiatan.",
            "Karena 先週 menunjukkan masa lalu, gunakan Vました."
          ],
          "grammarPoint": "過去形 〜ました"
        },
        {
          "id": "7-9-s8-q2",
          "question": {
            "text": "夏休みに何をしたいですか。",
            "segments": [
              {
                "text": "夏休",
                "reading": "なつやす"
              },
              {
                "text": "みに"
              },
              {
                "text": "何",
                "reading": "なに"
              },
              {
                "text": "をしたいですか。"
              }
            ]
          },
          "sampleAnswers": [
            {
              "text": "旅行したいです。",
              "segments": [
                {
                  "text": "旅行",
                  "reading": "りょこう"
                },
                {
                  "text": "したいです。"
                }
              ]
            },
            {
              "text": "北海道へ行きたいです。",
              "segments": [
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
                  "text": "きたいです。"
                }
              ]
            }
          ],
          "explanationId": "Jawaban bebas. Keinginan melakukan sesuatu dinyatakan dengan Vます-stem + たいです.",
          "solvingSteps": [
            "Pilih kegiatan yang ingin dilakukan.",
            "Ubah verba ke stem ます lalu tambahkan たいです.",
            "Contoh: 行きます → 行きたいです."
          ],
          "grammarPoint": "Vたいです"
        }
      ]
    },
    {
      "section": 9,
      "title": "読解 ○×",
      "titleReading": "どっかい まるばつ",
      "instruction": {
        "text": "○ですか、×ですか。",
        "segments": [
          {
            "text": "○ですか、×ですか。"
          }
        ]
      },
      "type": "reading-true-false",
      "passage": {
        "text": "ことしの3月に私は1人で東京へ行きました。電車で行きました。\n松本から東京まで電車で2時間半ぐらいです。東京は松本よりにぎやかでした。\n東京で友達に会いました。それから、いっしょにお花見に行きました。\nとてもおもしろかったですが、デパートへ行きませんでした。残念です。\n今度の休みには東京のデパートで買い物したいです。",
        "segments": [
          {
            "text": "ことしの"
          },
          {
            "text": "3月",
            "reading": "さんがつ"
          },
          {
            "text": "に"
          },
          {
            "text": "私",
            "reading": "わたし"
          },
          {
            "text": "は"
          },
          {
            "text": "1人",
            "reading": "ひとり"
          },
          {
            "text": "で"
          },
          {
            "text": "東京",
            "reading": "とうきょう"
          },
          {
            "text": "へ"
          },
          {
            "text": "行",
            "reading": "い"
          },
          {
            "text": "きました。"
          },
          {
            "text": "電車",
            "reading": "でんしゃ"
          },
          {
            "text": "で"
          },
          {
            "text": "行",
            "reading": "い"
          },
          {
            "text": "きました。\n"
          },
          {
            "text": "松本",
            "reading": "まつもと"
          },
          {
            "text": "から"
          },
          {
            "text": "東京",
            "reading": "とうきょう"
          },
          {
            "text": "まで"
          },
          {
            "text": "電車",
            "reading": "でんしゃ"
          },
          {
            "text": "で"
          },
          {
            "text": "2時間半",
            "reading": "にじかんはん"
          },
          {
            "text": "ぐらいです。"
          },
          {
            "text": "東京",
            "reading": "とうきょう"
          },
          {
            "text": "は"
          },
          {
            "text": "松本",
            "reading": "まつもと"
          },
          {
            "text": "よりにぎやかでした。\n"
          },
          {
            "text": "東京",
            "reading": "とうきょう"
          },
          {
            "text": "で"
          },
          {
            "text": "友達",
            "reading": "ともだち"
          },
          {
            "text": "に"
          },
          {
            "text": "会",
            "reading": "あ"
          },
          {
            "text": "いました。それから、いっしょにお"
          },
          {
            "text": "花見",
            "reading": "はなみ"
          },
          {
            "text": "に"
          },
          {
            "text": "行",
            "reading": "い"
          },
          {
            "text": "きました。\n"
          },
          {
            "text": "とてもおもしろかったですが、デパートへ"
          },
          {
            "text": "行",
            "reading": "い"
          },
          {
            "text": "きませんでした。"
          },
          {
            "text": "残念",
            "reading": "ざんねん"
          },
          {
            "text": "です。\n"
          },
          {
            "text": "今度",
            "reading": "こんど"
          },
          {
            "text": "の"
          },
          {
            "text": "休",
            "reading": "やす"
          },
          {
            "text": "みには"
          },
          {
            "text": "東京",
            "reading": "とうきょう"
          },
          {
            "text": "のデパートで"
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
            "text": "したいです。"
          }
        ]
      },
      "readingStrategy": [
        "Baca pernyataan terlebih dahulu dan tandai kata kunci seperti siapa, kapan, dengan siapa, transportasi, dan aktivitas.",
        "Cari kalimat yang memuat kata kunci yang sama di bacaan.",
        "Waspadai perbedaan kecil seperti 1人で vs 友達と dan 行きませんでした vs 行きました.",
        "Untuk rencana masa depan, bedakan 〜たいです dengan aktivitas yang sudah dilakukan."
      ],
      "items": [
        {
          "id": "7-9-s9-example",
          "isExample": true,
          "statement": {
            "text": "たなかさんは松本から東京まで車で行きました。",
            "segments": [
              {
                "text": "たなかさんは"
              },
              {
                "text": "松本",
                "reading": "まつもと"
              },
              {
                "text": "から"
              },
              {
                "text": "東京",
                "reading": "とうきょう"
              },
              {
                "text": "まで"
              },
              {
                "text": "車",
                "reading": "くるま"
              },
              {
                "text": "で"
              },
              {
                "text": "行",
                "reading": "い"
              },
              {
                "text": "きました。"
              }
            ]
          },
          "answer": "×",
          "explanationId": "Bacaan mengatakan 電車で行きました, bukan 車で行きました."
        },
        {
          "id": "7-9-s9-q1",
          "statement": {
            "text": "たなかさんはことしの3月に友達と東京へ行きました。",
            "segments": [
              {
                "text": "たなかさんはことしの"
              },
              {
                "text": "3月",
                "reading": "さんがつ"
              },
              {
                "text": "に"
              },
              {
                "text": "友達",
                "reading": "ともだち"
              },
              {
                "text": "と"
              },
              {
                "text": "東京",
                "reading": "とうきょう"
              },
              {
                "text": "へ"
              },
              {
                "text": "行",
                "reading": "い"
              },
              {
                "text": "きました。"
              }
            ]
          },
          "answer": "×",
          "explanationId": "Bacaan mengatakan 私は1人で東京へ行きました. Ia pergi sendirian, lalu baru bertemu teman di Tokyo.",
          "solvingSteps": [
            "Cari kalimat pertama.",
            "Teks: 1人で東京へ行きました.",
            "Soal: 友達と東京へ行きました → berbeda → ×."
          ]
        },
        {
          "id": "7-9-s9-q2",
          "statement": {
            "text": "東京はにぎやかでした。",
            "segments": [
              {
                "text": "東京",
                "reading": "とうきょう"
              },
              {
                "text": "はにぎやかでした。"
              }
            ]
          },
          "answer": "○",
          "explanationId": "Bacaan mengatakan 東京は松本よりにぎやかでした, jadi benar bahwa Tokyo ramai.",
          "solvingSteps": [
            "Cari kalimat yang membandingkan Tokyo dan Matsumoto.",
            "Teks menyebut 東京は〜にぎやかでした.",
            "Pernyataan sesuai → ○."
          ]
        },
        {
          "id": "7-9-s9-q3",
          "statement": {
            "text": "たなかさんは東京のデパートで買い物しました。",
            "segments": [
              {
                "text": "たなかさんは"
              },
              {
                "text": "東京",
                "reading": "とうきょう"
              },
              {
                "text": "のデパートで"
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
                "text": "しました。"
              }
            ]
          },
          "answer": "×",
          "explanationId": "Bacaan mengatakan デパートへ行きませんでした. Belanja di department store adalah keinginan untuk liburan berikutnya: 買い物したいです.",
          "solvingSteps": [
            "Cari デパート di bacaan.",
            "Teks: 行きませんでした → belum pergi.",
            "今度の休みには〜買い物したいです adalah rencana, bukan kejadian yang sudah selesai.",
            "Jadi ×."
          ]
        }
      ]
    }
  ]
};
