import { DekiruExamData } from '../types/dekiru';

export const dekiruExam1Data: DekiruExamData = {
  schemaVersion: "2.0.0",
  book: "できる日本語 初級",
  exam: {
    id: "dekiru-review-1-3",
    title: "『できる日本語初級』1〜3課 復習テスト",
    lessonRange: [1, 3],
    source: "actual-test-photo",
    originalScore: {
      earned: 93,
      max: 100
    },
    datasetScore: {
      earned: 79,
      max: 86
    },
    audioSkipped: true,
    skippedSections: [
      {
        section: 1,
        reason: "CD/audio asli tidak tersedia, jadi seluruh soal listening tidak dimasukkan ke dataset belajar."
      }
    ]
  },
  furigana: {
    format: "segment-based",
    description: "Frontend menampilkan furigana hanya pada segment yang memiliki field reading.",
    htmlExample: "<ruby>新聞<rt>しんぶん</rt></ruby>を<ruby>読<rt>よ</rt></ruby>みます。"
  },
  sections: [
    {
      section: 2,
      title: "動詞を選ぶ",
      titleReading: "どうしをえらぶ",
      instruction: {
        text: "a〜gから選んで、（　）に書いてください。",
        segments: [
          { text: "a〜gから" },
          { text: "選", reading: "えら" },
          { text: "んで、（　）に" },
          { text: "書", reading: "か" },
          { text: "いてください。" }
        ]
      },
      type: "word-bank",
      score: {
        earned: 12,
        max: 12
      },
      wordBank: [
        {
          id: "a",
          content: {
            text: "食べます",
            segments: [
              { text: "食", reading: "た" },
              { text: "べます" }
            ]
          },
          meaningId: "makan"
        },
        {
          id: "b",
          content: {
            text: "聞きます",
            segments: [
              { text: "聞", reading: "き" },
              { text: "きます" }
            ]
          },
          meaningId: "mendengar / mendengarkan"
        },
        {
          id: "c",
          content: {
            text: "寝ます",
            segments: [
              { text: "寝", reading: "ね" },
              { text: "ます" }
            ]
          },
          meaningId: "tidur"
        },
        {
          id: "d",
          content: {
            text: "読みます",
            segments: [
              { text: "読", reading: "よ" },
              { text: "みます" }
            ]
          },
          meaningId: "membaca"
        },
        {
          id: "e",
          content: {
            text: "来ます",
            segments: [
              { text: "来", reading: "き" },
              { text: "ます" }
            ]
          },
          meaningId: "datang"
        },
        {
          id: "f",
          content: {
            text: "働きます",
            segments: [
              { text: "働", reading: "はたら" },
              { text: "きます" }
            ]
          },
          meaningId: "bekerja"
        },
        {
          id: "g",
          content: {
            text: "買います",
            segments: [
              { text: "買", reading: "か" },
              { text: "います" }
            ]
          },
          meaningId: "membeli"
        }
      ],
      items: [
        {
          id: "1-3-s2-q1",
          question: {
            text: "新聞を（　）。",
            segments: [
              { text: "新聞", reading: "しんぶん" },
              { text: "を（　）。" }
            ]
          },
          answer: {
            value: "d",
            content: {
              text: "読みます",
              segments: [
                { text: "読", reading: "よ" },
                { text: "みます" }
              ]
            }
          },
          explanationId: "新聞 berarti koran. Kata kerja yang alami untuk koran adalah 読みます, sehingga menjadi 新聞を読みます。",
          solvingSteps: [
            "Lihat objek sebelum を: 新聞 (koran).",
            "Cari kata kerja yang cocok dengan aktivitas terhadap koran.",
            "新聞 dibaca, jadi pilih 読みます。"
          ],
          grammarPoint: "Nを Vます"
        },
        {
          id: "1-3-s2-q2",
          question: {
            text: "会社で（　）。",
            segments: [
              { text: "会社", reading: "かいしゃ" },
              { text: "で（　）。" }
            ]
          },
          answer: {
            value: "f",
            content: {
              text: "働きます",
              segments: [
                { text: "働", reading: "はたら" },
                { text: "きます" }
              ]
            }
          },
          explanationId: "会社で働きます berarti bekerja di perusahaan. Partikel で menunjukkan tempat aktivitas berlangsung.",
          solvingSteps: [
            "会社 adalah tempat.",
            "で memberi petunjuk bahwa setelahnya adalah aktivitas yang dilakukan di tempat itu.",
            "Aktivitas yang paling cocok adalah 働きます。"
          ],
          grammarPoint: "場所で Vます"
        },
        {
          id: "1-3-s2-q3",
          question: {
            text: "音楽を（　）。",
            segments: [
              { text: "音楽", reading: "おんがく" },
              { text: "を（　）。" }
            ]
          },
          answer: {
            value: "b",
            content: {
              text: "聞きます",
              segments: [
                { text: "聞", reading: "き" },
                { text: "きます" }
              ]
            }
          },
          explanationId: "音楽を聞きます berarti mendengarkan musik.",
          solvingSteps: [
            "Objeknya adalah 音楽 (musik).",
            "Cari verba untuk aktivitas yang dilakukan terhadap musik.",
            "Pilih 聞きます。"
          ],
          grammarPoint: "Nを Vます"
        },
        {
          id: "1-3-s2-q4",
          question: {
            text: "毎晩12時に（　）。",
            segments: [
              { text: "毎晩", reading: "まいばん" },
              { text: "12時", reading: "じゅうにじ" },
              { text: "に（　）。" }
            ]
          },
          answer: {
            value: "c",
            content: {
              text: "寝ます",
              segments: [
                { text: "寝", reading: "ね" },
                { text: "ます" }
              ]
            }
          },
          explanationId: "毎晩12時に寝ます berarti setiap malam tidur pukul 12.",
          solvingSteps: [
            "12時に menunjukkan waktu sebuah aktivitas.",
            "Dari pilihan yang ada, aktivitas yang paling alami pada pukul 12 malam adalah 寝ます。"
          ],
          grammarPoint: "時間に Vます"
        },
        {
          id: "1-3-s2-q5",
          question: {
            text: "スーパーで牛乳を（　）。",
            segments: [
              { text: "スーパーで" },
              { text: "牛乳", reading: "ぎゅうにゅう" },
              { text: "を（　）。" }
            ]
          },
          answer: {
            value: "g",
            content: {
              text: "買います",
              segments: [
                { text: "買", reading: "か" },
                { text: "います" }
              ]
            }
          },
          explanationId: "スーパーで牛乳を買います berarti membeli susu di supermarket.",
          solvingSteps: [
            "スーパーで menunjukkan tempat aktivitas.",
            "牛乳を menunjukkan objek aktivitas.",
            "Aktivitas yang sesuai adalah 買います。"
          ],
          grammarPoint: "場所で Nを Vます"
        },
        {
          id: "1-3-s2-q6",
          question: {
            "text": "友達が私のうちへ（　）。",
            segments: [
              { text: "友達", reading: "ともだち" },
              { text: "が" },
              { text: "私", reading: "わたし" },
              { text: "のうちへ（　）。" }
            ]
          },
          answer: {
            value: "e",
            content: {
              text: "来ます",
              segments: [
                { text: "来", reading: "き" },
                { text: "ます" }
              ]
            }
          },
          explanationId: "友達が私のうちへ来ます berarti teman datang ke rumah saya. へ menunjukkan tujuan perpindahan.",
          solvingSteps: [
            "私のうちへ adalah tujuan gerak.",
            "Subjeknya 友達.",
            "Dari pilihan, verba perpindahan yang cocok adalah 来ます。"
          ],
          grammarPoint: "場所へ 来ます"
        }
      ]
    },
    {
      section: 3,
      title: "助詞",
      titleReading: "じょし",
      instruction: {
        text: "（　）にひらがなを1つ書いてください。×もあります。",
        segments: [
          { text: "（　）にひらがなを1つ" },
          { text: "書", reading: "か" },
          { text: "いてください。×もあります。" }
        ]
      },
      type: "particle-fill",
      score: {
        earned: 14,
        max: 15
      },
      items: [
        {
          id: "1-3-s3-q1",
          question: {
            text: "A：土曜日、どこ（　）行きますか。\nB：松本（　）行きます。松本（　）映画（　）見ます。",
            segments: [
              { text: "A：" },
              { text: "土曜日", reading: "どようび" },
              { text: "、どこ（　）" },
              { text: "行", reading: "い" },
              { text: "きますか。\n" },
              { text: "B：" },
              { text: "松本", reading: "まつもと" },
              { text: "（　）" },
              { text: "行", reading: "い" },
              { text: "きます。" },
              { text: "松本", reading: "まつもと" },
              { text: "（　）" },
              { text: "映画", reading: "えいが" },
              { text: "（　）" },
              { text: "見", reading: "み" },
              { text: "ます。" }
            ]
          },
          answer: ["へ", "へ", "で", "を"],
          explanationId: "Tujuan gerak memakai へ: どこへ行きますか／松本へ行きます. Tempat melakukan aktivitas memakai で: 松本で. Objek dari 見ます memakai を: 映画を見ます。",
          solvingSteps: [
            "Cari verba 行きます: tujuan gerak → へ.",
            "Cari lokasi aktivitas 見ます: tempat aktivitas → で.",
            "Cari benda yang dilihat: objek langsung → を."
          ],
          grammarPoint: "へ・で・を"
        },
        {
          id: "1-3-s3-q2",
          question: {
            text: "私（　）の趣味は読書（　）料理です。",
            segments: [
              { text: "私", reading: "わたし" },
              { text: "（　）の" },
              { text: "趣味", reading: "しゅみ" },
              { text: "は" },
              { text: "読書", reading: "どくしょ" },
              { text: "（　）" },
              { text: "料理", reading: "りょうり" },
              { text: "です。" }
            ]
          },
          answer: ["×", "と"],
          explanationId: "私の趣味 sudah memakai の setelah 私, sehingga tidak perlu partikel tambahan sebelum の. 読書と料理 menghubungkan dua nomina dengan と.",
          solvingSteps: [
            "Perhatikan bahwa setelah blank pertama sudah ada の: bentuk yang benar 私の趣味, jadi blank = ×.",
            "Dua hobi berupa nomina disejajarkan dengan と."
          ],
          grammarPoint: "NのN / NとN"
        },
        {
          id: "1-3-s3-q3",
          question: {
            text: "毎朝（　）8時（　）起きます。パン（　）食べます。",
            segments: [
              { text: "毎朝", reading: "まいあさ" },
              { text: "（　）" },
              { text: "8時", reading: "はちじ" },
              { text: "（　）" },
              { text: "起", reading: "お" },
              { text: "きます。パン（　）" },
              { text: "食", reading: "た" },
              { text: "べます。" }
            ]
          },
          answer: ["×", "に", "を"],
          explanationId: "毎朝 seperti 'setiap pagi' biasanya tidak memakai に. Jam tertentu memakai に: 8時に起きます. Objek 食べます memakai を: パンを食べます。",
          solvingSteps: [
            "Kata waktu berulang seperti 毎朝 → biasanya tanpa に.",
            "Waktu jam yang spesifik 8時 → に.",
            "Benda yang dimakan パン → を."
          ],
          grammarPoint: "時間表現 + に / を"
        },
        {
          id: "1-3-s3-q4",
          question: {
            text: "A：「りんご」は英語（　）何ですか。\nB：appleです。",
            segments: [
              { text: "A：「りんご」は" },
              { text: "英語", reading: "えいご" },
              { text: "（　）" },
              { text: "何", reading: "なん" },
              { text: "ですか。\nB：appleです。" }
            ]
          },
          answer: ["で"],
          explanationId: "英語で何ですか berarti 'dalam bahasa Inggris apa?'. で di sini menunjukkan bahasa/cara yang digunakan.",
          solvingSteps: [
            "Jawaban berupa kata dalam bahasa Inggris: apple.",
            "Karena yang ditanyakan 'dalam bahasa Inggris', gunakan 英語で."
          ],
          grammarPoint: "言語で"
        },
        {
          id: "1-3-s3-q5",
          question: {
            text: "アンさんは学生です。パクさん（　）学生です。",
            segments: [
              { text: "アンさんは" },
              { text: "学生", reading: "がくせい" },
              { text: "です。パクさん（　）" },
              { text: "学生", reading: "がくせい" },
              { text: "です。" }
            ]
          },
          answer: ["も"],
          explanationId: "も berarti 'juga'. Karena Ann mahasiswa dan Pak juga mahasiswa, kalimat kedua memakai パクさんも学生です。",
          solvingSteps: [
            "Bandingkan informasi kalimat pertama dan kedua.",
            "Predikatnya sama-sama 学生です.",
            "Untuk arti 'juga', pilih も."
          ],
          grammarPoint: "Nも"
        },
        {
          id: "1-3-s3-q6",
          question: {
            text: "カレー（　）2つ（　）とんかつ（　）1つ（　）ください。",
            segments: [
              { text: "カレー（　）" },
              { text: "2つ", reading: "ふたつ" },
              { text: "（　）とんかつ（　）" },
              { text: "1つ", reading: "ひとつ" },
              { text: "（　）ください。" }
            ]
          },
          answer: ["を", "と", "を", "×"],
          explanationId: "Benda yang dipesan memakai を: カレーを／とんかつを. と menghubungkan dua item pesanan. Setelah 1つ tidak perlu partikel sebelum ください.",
          solvingSteps: [
            "Tentukan benda yang menjadi objek pesanan → を.",
            "Hubungkan item pertama dan kedua → と.",
            "Setelah jumlah terakhir 1つ langsung lanjut ください, jadi blank terakhir = ×."
          ],
          grammarPoint: "Nを数量と Nを数量ください"
        }
      ]
    },
    {
      section: 4,
      title: "正しいものを選ぶ",
      titleReading: "ただしいものをえらぶ",
      instruction: {
        text: "正しいものに○を書いてください。",
        segments: [
          { text: "正", reading: "ただ" },
          { text: "しいものに○を" },
          { text: "書", reading: "か" },
          { text: "いてください。" }
        ]
      },
      type: "multiple-choice",
      score: {
        earned: 18,
        max: 18
      },
      items: [
        {
          id: "1-3-s4-q1",
          question: {
            text: "トイレは［これ・ここ］です。",
            segments: [
              { text: "トイレは［これ・ここ］です。" }
            ]
          },
          choices: ["これ", "ここ"],
          answer: "ここ",
          explanationId: "ここ adalah penunjuk tempat 'di sini'. これ adalah penunjuk benda 'ini'. Karena yang dijelaskan lokasi toilet, jawabannya ここ.",
          solvingSteps: [
            "Tentukan apakah yang ditunjuk benda atau tempat.",
            "Lokasi → ここ."
          ],
          grammarPoint: "これ vs ここ"
        },
        {
          id: "1-3-s4-q2",
          question: {
            text: "［この・これ］は魚のカレーです。",
            segments: [
              { text: "［この・これ］は" },
              { text: "魚", reading: "さかな" },
              { text: "のカレーです。" }
            ]
          },
          choices: ["この", "これ"],
          answer: "これ",
          explanationId: "これ dapat berdiri sendiri sebelum は. この harus langsung diikuti nomina, misalnya このカレー.",
          solvingSteps: [
            "Setelah pilihan langsung は, bukan nomina.",
            "Pilih bentuk yang bisa berdiri sendiri → これ."
          ],
          grammarPoint: "この + N / これ"
        },
        {
          id: "1-3-s4-q3",
          question: {
            text: "［あの・あれ］かばんは、2,800円です。",
            segments: [
              { text: "［あの・あれ］かばんは、" },
              { text: "2,800円", reading: "にせんはっぴゃくえん" },
              { text: "です。" }
            ]
          },
          choices: ["あの", "あれ"],
          answer: "あの",
          explanationId: "あの harus diikuti nomina dan di sini langsung diikuti かばん. あれ berdiri sendiri.",
          solvingSteps: [
            "Setelah blank ada かばん.",
            "Gunakan あの + nomina."
          ],
          grammarPoint: "あの + N / あれ"
        },
        {
          id: "1-3-s4-q4",
          question: {
            text: "私はABEの［会社員・社員］です。",
            segments: [
              { text: "私", reading: "わたし" },
              { text: "はABEの［" },
              { text: "会社員", reading: "かいしゃいん" },
              { text: "・" },
              { text: "社員", reading: "しゃいん" },
              { text: "］です。" }
            ]
          },
          choices: ["会社員", "社員"],
          answer: "社員",
          answerRuby: {
            text: "社員",
            segments: [
              { text: "社員", reading: "しゃいん" }
            ]
          },
          explanationId: "会社員 berarti pekerja kantoran secara umum. 社員 dipakai untuk karyawan perusahaan tertentu: ABEの社員です。",
          solvingSteps: [
            "Ada nama perusahaan ABE + の.",
            "Untuk karyawan perusahaan tertentu gunakan 社員."
          ],
          grammarPoint: "会社員 vs 社員"
        },
        {
          id: "1-3-s4-q5",
          question: {
            text: "私の［国・お国］はイタリアです。",
            segments: [
              { text: "私", reading: "わたし" },
              { text: "の［" },
              { text: "国", reading: "くに" },
              { text: "・お" },
              { text: "国", reading: "くに" },
              { text: "］はイタリアです。" }
            ]
          },
          choices: ["国", "お国"],
          answer: "国",
          answerRuby: {
            text: "国",
            segments: [
              { text: "国", reading: "くに" }
            ]
          },
          explanationId: "Saat membicarakan negara sendiri gunakan 国. お国 adalah bentuk sopan yang biasanya dipakai untuk negara lawan bicara.",
          solvingSteps: [
            "Subjeknya 私の〜.",
            "Untuk diri sendiri pilih 国."
          ],
          grammarPoint: "国 vs お国"
        },
        {
          id: "1-3-s4-q6",
          question: {
            text: "A：これは［どこ・だれ］のビールですか。\nB：アメリカのビールです。",
            segments: [
              { text: "A：これは［どこ・だれ］のビールですか。\nB：アメリカのビールです。" }
            ]
          },
          choices: ["どこ", "だれ"],
          answer: "どこ",
          explanationId: "Jawabannya アメリカのビールです menunjukkan asal/tempat. Karena itu pertanyaannya どこのビールですか。",
          solvingSteps: [
            "Jawaban adalah negara/tempat.",
            "Gunakan どこの〜."
          ],
          grammarPoint: "どこのN"
        },
        {
          id: "1-3-s4-q7",
          question: {
            text: "A：これは［どこ・だれ］の財布ですか。\nB：あ、私の財布です。ありがとうございます。",
            segments: [
              { text: "A：これは［どこ・だれ］の" },
              { text: "財布", reading: "さいふ" },
              { text: "ですか。\nB：あ、" },
              { text: "私", reading: "わたし" },
              { text: "の" },
              { text: "財布", reading: "さいふ" },
              { text: "です。ありがとうございます。" }
            ]
          },
          choices: ["どこ", "だれ"],
          answer: "だれ",
          explanationId: "Jawaban 私の財布です menunjukkan pemilik. Untuk menanyakan kepemilikan gunakan だれの財布ですか。",
          solvingSteps: [
            "Jawaban menyebut orang/pemilik.",
            "Gunakan だれの〜."
          ],
          grammarPoint: "だれのN"
        },
        {
          id: "1-3-s4-q8",
          question: {
            text: "A：Bさんは日曜日、どこへ行きますか。\nB：どこへも［行きます・行きません］。",
            segments: [
              { text: "A：Bさんは" },
              { text: "日曜日", reading: "にちようび" },
              { text: "、どこへ" },
              { text: "行", reading: "い" },
              { text: "きますか。\nB：どこへも［" },
              { text: "行", reading: "い" },
              { text: "きます・" },
              { text: "行", reading: "い" },
              { text: "きません］。" }
            ]
          },
          choices: ["行きます", "行きません"],
          answer: "行きません",
          answerRuby: {
            text: "行きません",
            segments: [
              { text: "行", reading: "い" },
              { text: "きません" }
            ]
          },
          explanationId: "疑問詞 + も + bentuk negatif berarti 'tidak ... mana pun'. どこへも行きません = tidak pergi ke mana-mana.",
          solvingSteps: [
            "Temukan pola どこへも.",
            "Pola ini membutuhkan bentuk negatif → 行きません."
          ],
          grammarPoint: "疑問詞 + も + 否定"
        },
        {
          id: "1-3-s4-q9",
          question: {
            text: "A：「とんかつ」は［どこ・なん］の料理ですか。\nB：豚肉の料理です。",
            segments: [
              { text: "A：「とんかつ」は［どこ・なん］の" },
              { text: "料理", reading: "りょうり" },
              { text: "ですか。\nB：" },
              { text: "豚肉", reading: "ぶたにく" },
              { text: "の" },
              { text: "料理", reading: "りょうり" },
              { text: "です。" }
            ]
          },
          choices: ["どこ", "なん"],
          answer: "なん",
          explanationId: "Jawaban 豚肉の料理です menjelaskan jenis/bahan makanan, bukan asal tempat. Jadi pertanyaannya なんの料理ですか。",
          solvingSteps: [
            "Jawaban 豚肉 bukan tempat.",
            "Pilih なんの料理."
          ],
          grammarPoint: "なんのN"
        }
      ]
    },
    {
      section: 5,
      title: "買い物の会話",
      titleReading: "かいもののかいわ",
      instruction: {
        text: "＿＿＿＿に書いてください。",
        segments: [
          { text: "＿＿＿＿に" },
          { text: "書", reading: "か" },
          { text: "いてください。" }
        ]
      },
      type: "dialogue-writing",
      score: {
        earned: 9,
        max: 9
      },
      items: [
        {
          id: "1-3-s5-q1",
          context: {
            imageHint: "Barang di dekat pembeli, harga ¥4,000."
          },
          dialogue: [
            {
              speaker: "店員",
              content: {
                text: "店員：いらっしゃいませ。",
                segments: [
                  { text: "店員", reading: "てんいん" },
                  { text: "：いらっしゃいませ。" }
                ]
              }
            },
            {
              speaker: "客",
              content: {
                text: "客：（　）",
                segments: [
                  { text: "客", reading: "きゃく" },
                  { text: "：（　）" }
                ]
              }
            },
            {
              speaker: "店員",
              content: {
                text: "店員：4,000円です。",
                segments: [
                  { text: "店員", reading: "てんいん" },
                  { text: "：" },
                  { text: "4,000円", reading: "よんせんえん" },
                  { text: "です。" }
                ]
              }
            },
            {
              speaker: "客",
              content: {
                text: "客：そうですか。",
                segments: [
                  { text: "客", reading: "きゃく" },
                  { text: "：そうですか。" }
                ]
              }
            }
          ],
          answer: {
            text: "これはいくらですか。",
            segments: [
              { text: "これはいくらですか。" }
            ]
          },
          explanationId: "Untuk menanyakan harga benda dekat pembicara gunakan これはいくらですか。",
          solvingSteps: [
            "Jawaban pegawai berupa harga.",
            "Berarti blank harus pertanyaan harga.",
            "Benda yang ditunjuk = これ."
          ],
          grammarPoint: "これはいくらですか"
        },
        {
          id: "1-3-s5-q2",
          context: {
            imageHint: "Pembeli menunjuk barang yang jauh; harga ¥3,000."
          },
          dialogue: [
            {
              speaker: "客",
              content: {
                text: "客：（　）",
                segments: [
                  { text: "客", reading: "きゃく" },
                  { text: "：（　）" }
                ]
              }
            },
            {
              speaker: "店員",
              content: {
                text: "店員：3,000円です。",
                segments: [
                  { text: "店員", reading: "てんいん" },
                  { text: "：" },
                  { text: "3,000円", reading: "さんぜんえん" },
                  { text: "です。" }
                ]
              }
            }
          ],
          answer: {
            text: "あれはいくらですか。",
            segments: [
              { text: "あれはいくらですか。" }
            ]
          },
          explanationId: "Karena barang yang ditunjuk jauh, digunakan あれ. Pertanyaan harga: あれはいくらですか。",
          solvingSteps: [
            "Jawaban berikutnya adalah harga.",
            "Barang jauh → あれ.",
            "Bentuk pertanyaan harga → あれはいくらですか。"
          ],
          grammarPoint: "あれはいくらですか"
        },
        {
          id: "1-3-s5-q3",
          context: {
            imageHint: "Pembeli memutuskan membeli barang yang tadi ditunjuk."
          },
          dialogue: [
            {
              speaker: "客",
              content: {
                text: "客：（　）",
                segments: [
                  { text: "客", reading: "きゃく" },
                  { text: "：（　）" }
                ]
              }
            },
            {
              speaker: "店員",
              content: {
                text: "店員：ありがとうございます。",
                segments: [
                  { text: "店員", reading: "てんいん" },
                  { text: "：ありがとうございます。" }
                ]
              }
            }
          ],
          answer: {
            text: "じゃ、あれをください。",
            segments: [
              { text: "じゃ、あれをください。" }
            ]
          },
          explanationId: "〜をください dipakai ketika meminta atau membeli suatu barang. あれ merujuk barang yang tadi dibicarakan.",
          solvingSteps: [
            "Respons ありがとうございます menandakan transaksi.",
            "Gunakan Nをください.",
            "Barangnya あれ → じゃ、あれをください。"
          ],
          grammarPoint: "Nをください"
        }
      ]
    },
    {
      section: 6,
      title: "会話表現",
      titleReading: "かいわひょうげん",
      instruction: {
        text: "（　）に入ることばはどれですか。a〜eから選んで書いてください。",
        segments: [
          { text: "（　）に" },
          { text: "入", reading: "はい" },
          { text: "ることばはどれですか。a〜eから" },
          { text: "選", reading: "えら" },
          { text: "んで" },
          { text: "書", reading: "か" },
          { text: "いてください。" }
        ]
      },
      type: "dialogue-matching",
      score: {
        earned: 5,
        max: 5
      },
      choices: [
        {
          id: "a",
          content: {
            text: "いいですね",
            segments: [
              { text: "いいですね" }
            ]
          },
          meaningId: "Bagus ya / Kedengarannya bagus."
        },
        {
          id: "b",
          content: {
            text: "こちらこそ、よろしくお願いします",
            segments: [
              { text: "こちらこそ、よろしくお" },
              { text: "願", reading: "ねが" },
              { text: "いします" }
            ]
          },
          meaningId: "Saya juga, senang berkenalan / mohon bantuannya."
        },
        {
          id: "c",
          content: {
            text: "すみません。注文をお願いします",
            segments: [
              { text: "すみません。" },
              { text: "注文", reading: "ちゅうもん" },
              { text: "をお" },
              { text: "願", reading: "ねが" },
              { text: "いします" }
            ]
          },
          meaningId: "Permisi. Saya ingin memesan."
        },
        {
          id: "d",
          content: {
            text: "はじめまして",
            segments: [
              { text: "はじめまして" }
            ]
          },
          meaningId: "Salam kenal."
        },
        {
          id: "e",
          content: {
            text: "よろしくお願いします",
            segments: [
              { text: "よろしくお" },
              { text: "願", reading: "ねが" },
              { text: "いします" }
            ]
          },
          meaningId: "Senang berkenalan / mohon bantuannya."
        }
      ],
      items: [
        {
          id: "1-3-s6-q1",
          question: {
            text: "A：（　）。私はワンです。（　）。\nB：私はパクです。（　）。",
            segments: [
              { text: "A：（　）。" },
              { text: "私", reading: "わたし" },
              { text: "はワンです。（　）。\nB：" },
              { text: "私", reading: "わたし" },
              { text: "はパクです。（　）。" }
            ]
          },
          answer: ["d", "e", "b"],
          explanationId: "Urutan perkenalan: はじめまして → よろしくお願いします → こちらこそ、よろしくお願いします。",
          solvingSteps: [
            "Blank pertama = salam pertama kali bertemu.",
            "Setelah nama = よろしくお願いします.",
            "Balasan = こちらこそ〜."
          ],
          grammarPoint: "自己紹介の定型表現"
        },
        {
          id: "1-3-s6-q2",
          question: {
            text: "客：（　）。\n店員：はい、どうぞ。\n客：コーヒーを2つください。",
            segments: [
              { text: "客", reading: "きゃく" },
              { text: "：（　）。\n" },
              { text: "店員", reading: "てんいん" },
              { text: "：はい、どうぞ。\n" },
              { text: "客", reading: "きゃく" },
              { text: "：コーヒーを" },
              { text: "2つ", reading: "ふたつ" },
              { text: "ください。" }
            ]
          },
          answer: ["c"],
          explanationId: "Sebelum memesan, pelanggan memanggil pelayan dengan すみません。注文をお願いします。",
          solvingSteps: [
            "Setelah blank pegawai menjawab はい、どうぞ.",
            "Sesudahnya pelanggan menyebut pesanan.",
            "Pilih ungkapan mulai memesan."
          ],
          grammarPoint: "注文するときの表現"
        },
        {
          id: "1-3-s6-q3",
          question: {
            text: "A：Bさん、日曜日に何をしますか。\nB：諏訪湖へ行きます。諏訪湖で花火を見ます。\nA：（　）。",
            segments: [
              { text: "A：Bさん、" },
              { text: "日曜日", reading: "にちようび" },
              { text: "に" },
              { text: "何", reading: "なに" },
              { text: "をしますか。\nB：" },
              { text: "諏訪湖", reading: "すわこ" },
              { text: "へ" },
              { text: "行", reading: "い" },
              { text: "きます。" },
              { text: "諏訪湖", reading: "すわこ" },
              { text: "で" },
              { text: "花火", reading: "はなび" },
              { text: "を" },
              { text: "見", reading: "み" },
              { text: "ます。\nA：（　）。" }
            ]
          },
          answer: ["a"],
          explanationId: "Respons positif yang alami terhadap rencana tersebut adalah いいですね。",
          solvingSteps: [
            "Blank adalah respons terhadap rencana.",
            "Pilih ungkapan penilaian positif → いいですね."
          ],
          grammarPoint: "いいですね"
        }
      ]
    },
    {
      section: 7,
      title: "あなたの答え",
      titleReading: "あなたのこたえ",
      instruction: {
        text: "あなたの答えを書いてください。",
        segments: [
          { text: "あなたの" },
          { text: "答", reading: "こた" },
          { text: "えを" },
          { text: "書", reading: "か" },
          { text: "いてください。" }
        ]
      },
      type: "open-answer",
      score: {
        earned: 12,
        max: 12
      },
      grading: "open",
      items: [
        {
          id: "1-3-s7-q1",
          question: {
            text: "A：趣味は何ですか。",
            segments: [
              { text: "A：" },
              { text: "趣味", reading: "しゅみ" },
              { text: "は" },
              { text: "何", reading: "なん" },
              { text: "ですか。" }
            ]
          },
          paperAnswer: {
            text: "料理です。",
            segments: [
              { text: "料理", reading: "りょうり" },
              { text: "です。" }
            ]
          },
          sampleAnswers: [
            {
              text: "料理です。",
              segments: [
                { text: "料理", reading: "りょうり" },
                { text: "です。" }
              ]
            },
            {
              text: "アニメを見ることです。",
              segments: [
                { text: "アニメを" },
                { text: "見", reading: "み" },
                { text: "ることです。" }
              ]
            }
          ],
          explanationId: "Jawaban bebas. Jika hobi berupa nomina, gunakan Nです. Jika berupa aktivitas, bisa V辞書形ことです.",
          solvingSteps: [
            "Tentukan hobimu.",
            "Nomina → Nです.",
            "Aktivitas → Vることです."
          ],
          grammarPoint: "趣味はNです / Vることです"
        },
        {
          id: "1-3-s7-q2",
          question: {
            text: "A：毎日、朝ご飯を食べますか。",
            segments: [
              { text: "A：" },
              { text: "毎日", reading: "まいにち" },
              { text: "、" },
              { text: "朝", reading: "あさ" },
              { text: "ご" },
              { text: "飯", reading: "はん" },
              { text: "を" },
              { text: "食", reading: "た" },
              { text: "べますか。" }
            ]
          },
          paperAnswer: {
            text: "はい、毎日朝ご飯を食べます。",
            segments: [
              { text: "はい、" },
              { text: "毎日", reading: "まいにち" },
              { text: "朝", reading: "あさ" },
              { text: "ご" },
              { text: "飯", reading: "はん" },
              { text: "を" },
              { text: "食", reading: "た" },
              { text: "べます。" }
            ]
          },
          sampleAnswers: [
            {
              text: "はい、毎日朝ご飯を食べます。",
              segments: [
                { text: "はい、" },
                { text: "毎日", reading: "まいにち" },
                { text: "朝", reading: "あさ" },
                { text: "ご" },
                { text: "飯", reading: "はん" },
                { text: "を" },
                { text: "食", reading: "た" },
                { text: "べます。" }
              ]
            },
            {
              text: "いいえ、毎日は食べません。",
              segments: [
                { text: "いいえ、" },
                { text: "毎日", reading: "まいにち" },
                { text: "は" },
                { text: "食", reading: "た" },
                { text: "べません。" }
              ]
            }
          ],
          explanationId: "Jawaban bebas sesuai kebiasaan. Gunakan はい〜ます atau いいえ〜ません.",
          solvingSteps: [
            "Tentukan ya/tidak.",
            "Pertahankan bentuk sopan ます／ません."
          ],
          grammarPoint: "はい、Vます / いいえ、Vません"
        },
        {
          id: "1-3-s7-q3",
          question: {
            text: "A：日曜日、何をしますか。",
            segments: [
              { text: "A：" },
              { text: "日曜日", reading: "にちようび" },
              { text: "、" },
              { text: "何", reading: "なに" },
              { text: "をしますか。" }
            ]
          },
          paperAnswer: {
            text: "買い物をします。",
            segments: [
              { text: "買", reading: "か" },
              { text: "い" },
              { text: "物", reading: "もの" },
              { text: "をします。" }
            ]
          },
          sampleAnswers: [
            {
              text: "買い物をします。",
              segments: [
                { text: "買", reading: "か" },
                { text: "い" },
                { text: "物", reading: "もの" },
                { text: "をします。" }
              ]
            },
            {
              text: "料理をします。",
              segments: [
                { text: "料理", reading: "りょうり" },
                { text: "をします。" }
              ]
            }
          ],
          explanationId: "Jawaban bebas. Jawab dengan kegiatan dalam bentuk sopan.",
          solvingSteps: [
            "Pilih kegiatan.",
            "Gunakan Nをします atau Vます."
          ],
          grammarPoint: "何をしますか"
        },
        {
          id: "1-3-s7-q4",
          question: {
            text: "A：誕生日はいつですか。",
            segments: [
              { text: "A：" },
              { text: "誕生日", reading: "たんじょうび" },
              { text: "はいつですか。" }
            ]
          },
          paperAnswer: {
            text: "4月4日です。",
            segments: [
              { text: "4月4日", reading: "しがつよっか" },
              { text: "です。" }
            ]
          },
          sampleAnswers: [
            {
              text: "4月4日です。",
              segments: [
                { text: "4月4日", reading: "しがつよっか" },
                { text: "です。" }
              ]
            }
          ],
          explanationId: "Jawab dengan tanggal ulang tahun + です. 4日 dibaca よっか.",
          solvingSteps: [
            "Sebut bulan.",
            "Sebut tanggal dengan pembacaan yang benar.",
            "Tambahkan です."
          ],
          grammarPoint: "誕生日は〜月〜日です"
        }
      ]
    },
    {
      section: 8,
      title: "読解 ○×",
      titleReading: "どっかい まるばつ",
      instruction: {
        text: "○ですか、×ですか。",
        segments: [
          { text: "○ですか、×ですか。" }
        ]
      },
      type: "reading-true-false",
      score: {
        earned: 9,
        max: 9
      },
      passage: {
        text: "私はパクです。日本語学校の学生です。月曜日から金曜日まで学校へ行きます。\n朝8時半から12時まで学校で日本語を勉強します。午後、コンビニでアルバイトをします。1時から5時まで働きます。\n週末、図書館へ行きます。図書館で本を読みます。土曜日と日曜日は働きません。",
        segments: [
          { text: "私", reading: "わたし" },
          { text: "はパクです。" },
          { text: "日本語学校", reading: "にほんごがっこう" },
          { text: "の" },
          { text: "学生", reading: "がくせい" },
          { text: "です。" },
          { text: "月曜日", reading: "げつようび" },
          { text: "から" },
          { text: "金曜日", reading: "きんようび" },
          { text: "まで" },
          { text: "学校", reading: "がっこう" },
          { text: "へ" },
          { text: "行", reading: "い" },
          { text: "きます。\n" },
          { text: "朝8時半", reading: "あさはちじはん" },
          { text: "から" },
          { text: "12時", reading: "じゅうにじ" },
          { text: "まで" },
          { text: "学校", reading: "がっこう" },
          { text: "で" },
          { text: "日本語", reading: "にほんご" },
          { text: "を" },
          { text: "勉強", reading: "べんきょう" },
          { text: "します。" },
          { text: "午後", reading: "ごご" },
          { text: "、コンビニでアルバイトをします。" },
          { text: "1時", reading: "いちじ" },
          { text: "から" },
          { text: "5時", reading: "ごじ" },
          { text: "まで" },
          { text: "働", reading: "はたら" },
          { text: "きます。\n" },
          { text: "週末", reading: "しゅうまつ" },
          { text: "、" },
          { text: "図書館", reading: "としょかん" },
          { text: "へ" },
          { text: "行", reading: "い" },
          { text: "きます。" },
          { text: "図書館", reading: "としょかん" },
          { text: "で" },
          { text: "本", reading: "ほん" },
          { text: "を" },
          { text: "読", reading: "よ" },
          { text: "みます。" },
          { text: "土曜日", reading: "どようび" },
          { text: "と" },
          { text: "日曜日", reading: "にちようび" },
          { text: "は" },
          { text: "働", reading: "はたら" },
          { text: "きません。" }
        ]
      },
      readingStrategy: [
        "Baca pernyataan soal lebih dulu dan tandai kata kunci: profesi, jam, tempat, atau frekuensi.",
        "Cari kalimat di bacaan yang membahas kata kunci yang sama.",
        "Bandingkan detail secara literal. Satu detail berbeda sudah membuat jawaban ×."
      ],
      items: [
        {
          id: "1-3-s8-example",
          isExample: true,
          statement: {
            text: "私の名前はパクです。",
            segments: [
              { text: "私", reading: "わたし" },
              { text: "の" },
              { text: "名前", reading: "なまえ" },
              { text: "はパクです。" }
            ]
          },
          answer: "○",
          explanationId: "Kalimat pertama menunjukkan pembicara adalah パク, jadi pernyataan benar."
        },
        {
          id: "1-3-s8-q1",
          statement: {
            text: "私は日本語学校の先生じゃありません。",
            segments: [
              { text: "私", reading: "わたし" },
              { text: "は" },
              { text: "日本語学校", reading: "にほんごがっこう" },
              { text: "の" },
              { text: "先生", reading: "せんせい" },
              { text: "じゃありません。" }
            ]
          },
          answer: "○",
          explanationId: "Bacaan menyatakan 日本語学校の学生です. Karena dia pelajar, pernyataan bahwa dia bukan guru benar.",
          solvingSteps: [
            "Cari status di awal bacaan.",
            "Teks: 学生です.",
            "Pernyataan: 先生じゃありません → sesuai → ○."
          ]
        },
        {
          id: "1-3-s8-q2",
          statement: {
            text: "私は1時から5時まで学校で日本語を勉強します。",
            segments: [
              { text: "私", reading: "わたし" },
              { text: "は" },
              { text: "1時", reading: "いちじ" },
              { text: "から" },
              { text: "5時", reading: "ごじ" },
              { text: "まで" },
              { text: "学校", reading: "がっこう" },
              { text: "で" },
              { text: "日本語", reading: "にほんご" },
              { text: "を" },
              { text: "勉強", reading: "べんきょう" },
              { text: "します。" }
            ]
          },
          answer: "×",
          explanationId: "Belajar di sekolah dilakukan pukul 8:30–12:00. Pukul 1–5 dia bekerja di konbini, jadi pernyataan salah.",
          solvingSteps: [
            "Cari 1時から5時まで.",
            "Di teks: 働きます.",
            "Soal mengatakan 勉強します → ×."
          ]
        },
        {
          id: "1-3-s8-q3",
          statement: {
            text: "私は毎日図書館へ行きます。",
            segments: [
              { text: "私", reading: "わたし" },
              { text: "は" },
              { text: "毎日", reading: "まいにち" },
              { text: "図書館", reading: "としょかん" },
              { text: "へ" },
              { text: "行", reading: "い" },
              { text: "きます。" }
            ]
          },
          answer: "×",
          explanationId: "Bacaan mengatakan 週末、図書館へ行きます, bukan setiap hari.",
          solvingSteps: [
            "Cari 図書館.",
            "Teks mengatakan 週末.",
            "Soal mengatakan 毎日 → ×."
          ]
        }
      ]
    }
  ]
};
