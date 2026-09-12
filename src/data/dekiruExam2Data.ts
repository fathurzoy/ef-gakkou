import { DekiruExamData } from '../types/dekiru';

export const dekiruExam2Data: DekiruExamData = {
  "schemaVersion": "2.0.0",
  "book": "できる日本語 初級",
  "exam": {
    "id": "dekiru-review-4-6",
    "title": "『できる日本語初級』4〜6課 復習テスト",
    "lessonRange": [
      4,
      6
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
    "htmlExample": "<ruby>来週<rt>らいしゅう</rt></ruby>"
  },
  "sections": [
    {
      "section": 2,
      "title": "時間のことば",
      "titleReading": "じかんのことば",
      "instruction": {
        "text": "（　）にひらがなでことばを書いてください。",
        "segments": [
          {
            "text": "（　）にひらがなでことばを"
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
      "type": "time-vocabulary",
      "items": [
        {
          "id": "4-6-s2-q1",
          "context": {
            "date": "5日（水）",
            "referenceDate": "6日（木） = きょう"
          },
          "answer": {
            "text": "きのう",
            "segments": [
              {
                "text": "きのう"
              }
            ]
          },
          "meaningId": "kemarin",
          "explanationId": "Jika 6日（木）が「きょう」, maka sehari sebelumnya, 5日（水）, adalah 「きのう」.",
          "solvingSteps": [
            "Cari hari yang ditandai きょう.",
            "Mundur satu hari.",
            "Jawab きのう."
          ],
          "vocabularyPoint": "きのう"
        },
        {
          "id": "4-6-s2-q2",
          "context": {
            "date": "7日（金）",
            "referenceDate": "6日（木） = きょう"
          },
          "answer": {
            "text": "あした",
            "segments": [
              {
                "text": "あした"
              }
            ]
          },
          "meaningId": "besok",
          "explanationId": "Sehari setelah きょう adalah あした.",
          "solvingSteps": [
            "Cari きょう.",
            "Maju satu hari.",
            "Jawab あした."
          ],
          "vocabularyPoint": "あした"
        },
        {
          "id": "4-6-s2-q3",
          "context": {
            "date": "8日（土）",
            "referenceDate": "6日（木） = きょう"
          },
          "answer": {
            "text": "あさって",
            "segments": [
              {
                "text": "あさって"
              }
            ]
          },
          "meaningId": "lusa",
          "explanationId": "Dua hari setelah きょう adalah あさって.",
          "solvingSteps": [
            "Dari 6日 maju dua hari ke 8日.",
            "Jawab あさって."
          ],
          "vocabularyPoint": "あさって"
        },
        {
          "id": "4-6-s2-q4",
          "context": {
            "range": "5/26（日）〜6/1（土）",
            "referenceRange": "6/2（日）〜6/8（土） = こんしゅう"
          },
          "answer": {
            "text": "せんしゅう",
            "segments": [
              {
                "text": "せんしゅう"
              }
            ]
          },
          "meaningId": "minggu lalu",
          "explanationId": "Minggu sebelum こんしゅう disebut せんしゅう.",
          "solvingSteps": [
            "Temukan rentang こんしゅう.",
            "Pilih minggu tepat sebelumnya.",
            "Jawab せんしゅう."
          ],
          "vocabularyPoint": "せんしゅう"
        },
        {
          "id": "4-6-s2-q5",
          "context": {
            "range": "6/9（日）〜6/15（土）",
            "referenceRange": "6/2（日）〜6/8（土） = こんしゅう"
          },
          "answer": {
            "text": "らいしゅう",
            "segments": [
              {
                "text": "らいしゅう"
              }
            ]
          },
          "meaningId": "minggu depan",
          "explanationId": "Minggu setelah こんしゅう disebut らいしゅう.",
          "solvingSteps": [
            "Temukan こんしゅう.",
            "Pilih minggu tepat sesudahnya.",
            "Jawab らいしゅう."
          ],
          "vocabularyPoint": "らいしゅう"
        },
        {
          "id": "4-6-s2-q6",
          "context": {
            "year": "2023年",
            "referenceYear": "2024年 = ことし"
          },
          "answer": {
            "text": "きょねん",
            "segments": [
              {
                "text": "きょねん"
              }
            ]
          },
          "meaningId": "tahun lalu",
          "explanationId": "Tahun sebelum ことし disebut きょねん.",
          "solvingSteps": [
            "2024年 = ことし.",
            "2023年 adalah satu tahun sebelumnya.",
            "Jawab きょねん."
          ],
          "vocabularyPoint": "きょねん"
        },
        {
          "id": "4-6-s2-q7",
          "context": {
            "year": "2025年",
            "referenceYear": "2024年 = ことし"
          },
          "answer": {
            "text": "らいねん",
            "segments": [
              {
                "text": "らいねん"
              }
            ]
          },
          "meaningId": "tahun depan",
          "explanationId": "Tahun setelah ことし disebut らいねん.",
          "solvingSteps": [
            "2024年 = ことし.",
            "2025年 adalah satu tahun sesudahnya.",
            "Jawab らいねん."
          ],
          "vocabularyPoint": "らいねん"
        }
      ]
    },
    {
      "section": 3,
      "title": "反対のことば",
      "titleReading": "はんたいのことば",
      "instruction": {
        "text": "反対のことばを書いてください。",
        "segments": [
          {
            "text": "反対",
            "reading": "はんたい"
          },
          {
            "text": "のことばを"
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
      "type": "antonym",
      "items": [
        {
          "id": "4-6-s3-q1",
          "question": {
            "text": "私の町は人が多いです。",
            "segments": [
              {
                "text": "私",
                "reading": "わたし"
              },
              {
                "text": "の"
              },
              {
                "text": "町",
                "reading": "まち"
              },
              {
                "text": "は"
              },
              {
                "text": "人",
                "reading": "ひと"
              },
              {
                "text": "が"
              },
              {
                "text": "多",
                "reading": "おお"
              },
              {
                "text": "いです。"
              }
            ]
          },
          "answer": {
            "text": "私の町は人が少ないです。",
            "segments": [
              {
                "text": "私",
                "reading": "わたし"
              },
              {
                "text": "の"
              },
              {
                "text": "町",
                "reading": "まち"
              },
              {
                "text": "は"
              },
              {
                "text": "人",
                "reading": "ひと"
              },
              {
                "text": "が"
              },
              {
                "text": "少",
                "reading": "すく"
              },
              {
                "text": "ないです。"
              }
            ]
          },
          "targetAnswer": {
            "text": "少ない",
            "segments": [
              {
                "text": "少",
                "reading": "すく"
              },
              {
                "text": "ない"
              }
            ]
          },
          "explanationId": "多い（おおい） berarti banyak. Lawan katanya adalah 少ない（すくない） = sedikit.",
          "solvingSteps": [
            "Cari kata sifat yang diuji: 多い.",
            "Ingat pasangan antonimnya: 多い ↔ 少ない.",
            "Masukkan 少ない."
          ],
          "vocabularyPoint": "多い ↔ 少ない"
        },
        {
          "id": "4-6-s3-q2",
          "question": {
            "text": "このテストは簡単です。",
            "segments": [
              {
                "text": "このテストは"
              },
              {
                "text": "簡単",
                "reading": "かんたん"
              },
              {
                "text": "です。"
              }
            ]
          },
          "answer": {
            "text": "このテストは難しいです。",
            "segments": [
              {
                "text": "このテストは"
              },
              {
                "text": "難",
                "reading": "むずか"
              },
              {
                "text": "しいです。"
              }
            ]
          },
          "targetAnswer": {
            "text": "難しい",
            "segments": [
              {
                "text": "難",
                "reading": "むずか"
              },
              {
                "text": "しい"
              }
            ]
          },
          "explanationId": "簡単（かんたん） = mudah. Lawannya 難しい（むずかしい） = sulit.",
          "solvingSteps": [
            "Identifikasi 簡単.",
            "Cari lawan makna.",
            "Jawab 難しい."
          ],
          "vocabularyPoint": "簡単 ↔ 難しい"
        },
        {
          "id": "4-6-s3-q3",
          "question": {
            "text": "今日は忙しいです。",
            "segments": [
              {
                "text": "今日",
                "reading": "きょう"
              },
              {
                "text": "は"
              },
              {
                "text": "忙",
                "reading": "いそが"
              },
              {
                "text": "しいです。"
              }
            ]
          },
          "answer": {
            "text": "今日は暇です。",
            "segments": [
              {
                "text": "今日",
                "reading": "きょう"
              },
              {
                "text": "は"
              },
              {
                "text": "暇",
                "reading": "ひま"
              },
              {
                "text": "です。"
              }
            ]
          },
          "targetAnswer": {
            "text": "暇",
            "segments": [
              {
                "text": "暇",
                "reading": "ひま"
              }
            ]
          },
          "explanationId": "忙しい（いそがしい） = sibuk. Lawannya 暇（ひま） = senggang/tidak sibuk.",
          "solvingSteps": [
            "Cari kata sifat 忙しい.",
            "Pasangan lawannya adalah 暇.",
            "Karena 暇 adalah na-adjective/noun-like, gunakan 暇です."
          ],
          "vocabularyPoint": "忙しい ↔ 暇"
        },
        {
          "id": "4-6-s3-q4",
          "question": {
            "text": "北海道は日本の北です。",
            "segments": [
              {
                "text": "北海道",
                "reading": "ほっかいどう"
              },
              {
                "text": "は"
              },
              {
                "text": "日本",
                "reading": "にほん"
              },
              {
                "text": "の"
              },
              {
                "text": "北",
                "reading": "きた"
              },
              {
                "text": "です。"
              }
            ]
          },
          "answer": {
            "text": "沖縄は日本の南です。",
            "segments": [
              {
                "text": "沖縄",
                "reading": "おきなわ"
              },
              {
                "text": "は"
              },
              {
                "text": "日本",
                "reading": "にほん"
              },
              {
                "text": "の"
              },
              {
                "text": "南",
                "reading": "みなみ"
              },
              {
                "text": "です。"
              }
            ]
          },
          "targetAnswer": {
            "text": "南",
            "segments": [
              {
                "text": "南",
                "reading": "みなみ"
              }
            ]
          },
          "explanationId": "北（きた） = utara. Lawannya 南（みなみ） = selatan.",
          "solvingSteps": [
            "Cari arah 北.",
            "Lawan arah 北 adalah 南.",
            "Jawab みなみ."
          ],
          "vocabularyPoint": "北 ↔ 南"
        }
      ]
    },
    {
      "section": 4,
      "title": "ひらがなを1つ入れる",
      "titleReading": "ひらがなをひとついれる",
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
          "id": "4-6-s4-q1",
          "question": {
            "text": "タイ（　）（　）日本（　）（　）飛行機（　）6時間ぐらいです。",
            "segments": [
              {
                "text": "タイ（　）（　）"
              },
              {
                "text": "日本",
                "reading": "にほん"
              },
              {
                "text": "（　）（　）"
              },
              {
                "text": "飛行機",
                "reading": "ひこうき"
              },
              {
                "text": "（　）"
              },
              {
                "text": "6時間",
                "reading": "ろくじかん"
              },
              {
                "text": "ぐらいです。"
              }
            ]
          },
          "answer": [
            "か",
            "ら",
            "ま",
            "で",
            "で"
          ],
          "completed": {
            "text": "タイから日本まで飛行機で6時間ぐらいです。",
            "segments": [
              {
                "text": "タイから"
              },
              {
                "text": "日本",
                "reading": "にほん"
              },
              {
                "text": "まで"
              },
              {
                "text": "飛行機",
                "reading": "ひこうき"
              },
              {
                "text": "で"
              },
              {
                "text": "6時間",
                "reading": "ろくじかん"
              },
              {
                "text": "ぐらいです。"
              }
            ]
          },
          "explanationId": "から〜まで menunjukkan titik awal sampai tujuan: タイから日本まで. Alat transportasi memakai で: 飛行機で.",
          "solvingSteps": [
            "Cari hubungan dua tempat: タイ → 日本.",
            "Pola rentang/tempat adalah 〜から〜まで.",
            "飛行機 adalah alat transportasi, jadi gunakan で."
          ],
          "grammarPoint": "Nから Nまで / 乗り物で"
        },
        {
          "id": "4-6-s4-q2",
          "question": {
            "text": "私の町（　）大きい公園（　）あります。",
            "segments": [
              {
                "text": "私",
                "reading": "わたし"
              },
              {
                "text": "の"
              },
              {
                "text": "町",
                "reading": "まち"
              },
              {
                "text": "（　）"
              },
              {
                "text": "大",
                "reading": "おお"
              },
              {
                "text": "きい"
              },
              {
                "text": "公園",
                "reading": "こうえん"
              },
              {
                "text": "（　）あります。"
              }
            ]
          },
          "answer": [
            "に",
            "が"
          ],
          "completed": {
            "text": "私の町に大きい公園があります。",
            "segments": [
              {
                "text": "私",
                "reading": "わたし"
              },
              {
                "text": "の"
              },
              {
                "text": "町",
                "reading": "まち"
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
                "text": "公園",
                "reading": "こうえん"
              },
              {
                "text": "があります。"
              }
            ]
          },
          "explanationId": "Keberadaan benda memakai pola 場所に Nがあります. Tempat diberi に, benda yang ada diberi が.",
          "solvingSteps": [
            "Cari verba あります.",
            "Tempat keberadaan → に.",
            "Benda yang ada → が."
          ],
          "grammarPoint": "場所に Nがあります"
        },
        {
          "id": "4-6-s4-q3",
          "question": {
            "text": "私の町は大きくないです（　）、にぎやかです。",
            "segments": [
              {
                "text": "私",
                "reading": "わたし"
              },
              {
                "text": "の"
              },
              {
                "text": "町",
                "reading": "まち"
              },
              {
                "text": "は"
              },
              {
                "text": "大",
                "reading": "おお"
              },
              {
                "text": "きくないです（　）、にぎやかです。"
              }
            ]
          },
          "answer": [
            "が"
          ],
          "completed": {
            "text": "私の町は大きくないですが、にぎやかです。",
            "segments": [
              {
                "text": "私",
                "reading": "わたし"
              },
              {
                "text": "の"
              },
              {
                "text": "町",
                "reading": "まち"
              },
              {
                "text": "は"
              },
              {
                "text": "大",
                "reading": "おお"
              },
              {
                "text": "きくないですが、にぎやかです。"
              }
            ]
          },
          "explanationId": "が dapat menghubungkan dua informasi yang kontras: 'tidak besar, tetapi ramai'.",
          "solvingSteps": [
            "Perhatikan dua sifat yang berlawanan/kontras.",
            "Gunakan が dengan arti 'tetapi'."
          ],
          "grammarPoint": "〜ですが、〜"
        },
        {
          "id": "4-6-s4-q4",
          "question": {
            "text": "私は自転車（　）ほしいです。",
            "segments": [
              {
                "text": "私",
                "reading": "わたし"
              },
              {
                "text": "は"
              },
              {
                "text": "自転車",
                "reading": "じてんしゃ"
              },
              {
                "text": "（　）ほしいです。"
              }
            ]
          },
          "answer": [
            "が"
          ],
          "completed": {
            "text": "私は自転車がほしいです。",
            "segments": [
              {
                "text": "私",
                "reading": "わたし"
              },
              {
                "text": "は"
              },
              {
                "text": "自転車",
                "reading": "じてんしゃ"
              },
              {
                "text": "がほしいです。"
              }
            ]
          },
          "explanationId": "Dengan ほしいです, benda yang diinginkan biasanya ditandai が.",
          "solvingSteps": [
            "Cari pola ほしいです.",
            "Benda yang diinginkan → が."
          ],
          "grammarPoint": "Nがほしいです"
        },
        {
          "id": "4-6-s5-q5",
          "question": {
            "text": "土曜日、ABCスーパー（　）セール（　）あります。",
            "segments": [
              {
                "text": "土曜日",
                "reading": "どようび"
              },
              {
                "text": "、ABCスーパー（　）セール（　）あります。"
              }
            ]
          },
          "answer": [
            "で",
            "が"
          ],
          "completed": {
            "text": "土曜日、ABCスーパーでセールがあります。",
            "segments": [
              {
                "text": "土曜日",
                "reading": "どようび"
              },
              {
                "text": "、ABCスーパーでセールがあります。"
              }
            ]
          },
          "explanationId": "Untuk acara/kejadian seperti セール, tempat berlangsungnya dapat memakai で. Hal yang ada/terjadi ditandai が.",
          "solvingSteps": [
            "ABCスーパー adalah lokasi acara.",
            "セール adalah hal yang berlangsung.",
            "Gunakan で dan が."
          ],
          "grammarPoint": "場所で イベントがあります"
        }
      ]
    },
    {
      "section": 5,
      "title": "疑問詞を選ぶ",
      "titleReading": "ぎもんしをえらぶ",
      "instruction": {
        "text": "a〜gから選んで（　）に書いてください。",
        "segments": [
          {
            "text": "a〜gから"
          },
          {
            "text": "選",
            "reading": "えら"
          },
          {
            "text": "んで（　）に"
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
      "type": "word-bank",
      "wordBank": [
        {
          "id": "a",
          "content": {
            "text": "なに",
            "segments": [
              {
                "text": "なに"
              }
            ]
          },
          "meaningId": "apa"
        },
        {
          "id": "b",
          "content": {
            "text": "どんな",
            "segments": [
              {
                "text": "どんな"
              }
            ]
          },
          "meaningId": "seperti apa / jenis apa"
        },
        {
          "id": "c",
          "content": {
            "text": "どのくらい",
            "segments": [
              {
                "text": "どのくらい"
              }
            ]
          },
          "meaningId": "berapa lama / seberapa jauh / seberapa banyak"
        },
        {
          "id": "d",
          "content": {
            "text": "どちら",
            "segments": [
              {
                "text": "どちら"
              }
            ]
          },
          "meaningId": "yang mana dari dua pilihan"
        },
        {
          "id": "e",
          "content": {
            "text": "どこか",
            "segments": [
              {
                "text": "どこか"
              }
            ]
          },
          "meaningId": "suatu tempat / ke suatu tempat"
        },
        {
          "id": "f",
          "content": {
            "text": "どう",
            "segments": [
              {
                "text": "どう"
              }
            ]
          },
          "meaningId": "bagaimana"
        },
        {
          "id": "g",
          "content": {
            "text": "いつ",
            "segments": [
              {
                "text": "いつ"
              }
            ]
          },
          "meaningId": "kapan"
        }
      ],
      "items": [
        {
          "id": "4-6-s5-q1a",
          "question": {
            "text": "A：週末、（　）へ行きましたか。\nB：はい、立石公園へ行きました。",
            "segments": [
              {
                "text": "A："
              },
              {
                "text": "週末",
                "reading": "しゅうまつ"
              },
              {
                "text": "、（　）へ"
              },
              {
                "text": "行",
                "reading": "い"
              },
              {
                "text": "きましたか。\n"
              },
              {
                "text": "B：はい、"
              },
              {
                "text": "立石公園",
                "reading": "たていしこうえん"
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
          "answer": {
            "value": "e",
            "content": {
              "text": "どこか",
              "segments": [
                {
                  "text": "どこか"
                }
              ]
            }
          },
          "explanationId": "Pertanyaannya menanyakan apakah pergi ke suatu tempat. どこかへ行きましたか = apakah pergi ke suatu tempat?",
          "solvingSteps": [
            "Jawaban menyebut satu tempat konkret.",
            "Bentuk pertanyaan ya/tidak tentang 'suatu tempat' memakai どこか."
          ],
          "grammarPoint": "どこかへ"
        },
        {
          "id": "4-6-s5-q1b",
          "question": {
            "text": "A：（　）でしたか。\nB：夜の景色がとてもきれいでした。",
            "segments": [
              {
                "text": "A：（　）でしたか。\n"
              },
              {
                "text": "B："
              },
              {
                "text": "夜",
                "reading": "よる"
              },
              {
                "text": "の"
              },
              {
                "text": "景色",
                "reading": "けしき"
              },
              {
                "text": "がとてもきれいでした。"
              }
            ]
          },
          "answer": {
            "value": "f",
            "content": {
              "text": "どう",
              "segments": [
                {
                  "text": "どう"
                }
              ]
            }
          },
          "explanationId": "どうでしたか menanyakan bagaimana keadaan/kesan sesuatu. Jawabannya memberi kesan: 景色がとてもきれいでした.",
          "solvingSteps": [
            "Jawaban berupa kesan/evaluasi.",
            "Pertanyaan yang cocok adalah どうでしたか."
          ],
          "grammarPoint": "どうでしたか"
        },
        {
          "id": "4-6-s5-q2",
          "question": {
            "text": "A：日本は1年で（　）がいちばん暑いですか。\nB：8月がいちばん暑いです。",
            "segments": [
              {
                "text": "A："
              },
              {
                "text": "日本",
                "reading": "にほん"
              },
              {
                "text": "は"
              },
              {
                "text": "1年",
                "reading": "いちねん"
              },
              {
                "text": "で（　）がいちばん"
              },
              {
                "text": "暑",
                "reading": "あつ"
              },
              {
                "text": "いですか。\n"
              },
              {
                "text": "B："
              },
              {
                "text": "8月",
                "reading": "はちがつ"
              },
              {
                "text": "がいちばん"
              },
              {
                "text": "暑",
                "reading": "あつ"
              },
              {
                "text": "いです。"
              }
            ]
          },
          "answer": {
            "value": "g",
            "content": {
              "text": "いつ",
              "segments": [
                {
                  "text": "いつ"
                }
              ]
            }
          },
          "explanationId": "Jawabannya adalah bulan/waktu, jadi kata tanya yang tepat adalah いつ.",
          "solvingSteps": [
            "Lihat jawaban: 8月.",
            "8月 adalah waktu.",
            "Kata tanya waktu = いつ."
          ],
          "grammarPoint": "いつがいちばん〜ですか"
        },
        {
          "id": "4-6-s5-q3",
          "question": {
            "text": "A：Bさんは夏と冬と（　）が好きですか。\nB：私は冬のほうが好きです。",
            "segments": [
              {
                "text": "A：Bさんは"
              },
              {
                "text": "夏",
                "reading": "なつ"
              },
              {
                "text": "と"
              },
              {
                "text": "冬",
                "reading": "ふゆ"
              },
              {
                "text": "と（　）が"
              },
              {
                "text": "好",
                "reading": "す"
              },
              {
                "text": "きですか。\n"
              },
              {
                "text": "B："
              },
              {
                "text": "私",
                "reading": "わたし"
              },
              {
                "text": "は"
              },
              {
                "text": "冬",
                "reading": "ふゆ"
              },
              {
                "text": "のほうが"
              },
              {
                "text": "好",
                "reading": "す"
              },
              {
                "text": "きです。"
              }
            ]
          },
          "answer": {
            "value": "d",
            "content": {
              "text": "どちら",
              "segments": [
                {
                  "text": "どちら"
                }
              ]
            }
          },
          "explanationId": "Saat memilih antara dua benda/opsi, gunakan どちら. Polanya AとBとどちらが〜ですか.",
          "solvingSteps": [
            "Ada dua pilihan: 夏 dan 冬.",
            "Untuk dua pilihan gunakan どちら.",
            "Jawaban memakai 〜のほうが."
          ],
          "grammarPoint": "AとBとどちらが〜ですか"
        },
        {
          "id": "4-6-s5-q4",
          "question": {
            "text": "A：Bさんの家から学校まで（　）ですか。\nB：40分ぐらいです。",
            "segments": [
              {
                "text": "A：Bさんの"
              },
              {
                "text": "家",
                "reading": "いえ"
              },
              {
                "text": "から"
              },
              {
                "text": "学校",
                "reading": "がっこう"
              },
              {
                "text": "まで（　）ですか。\n"
              },
              {
                "text": "B："
              },
              {
                "text": "40分",
                "reading": "よんじゅっぷん"
              },
              {
                "text": "ぐらいです。"
              }
            ]
          },
          "answer": {
            "value": "c",
            "content": {
              "text": "どのくらい",
              "segments": [
                {
                  "text": "どのくらい"
                }
              ]
            }
          },
          "explanationId": "Jawabannya menunjukkan durasi sekitar 40 menit, jadi gunakan どのくらい.",
          "solvingSteps": [
            "Lihat jawaban: 40分ぐらい.",
            "Itu adalah durasi.",
            "Gunakan どのくらい."
          ],
          "grammarPoint": "どのくらいですか"
        }
      ]
    },
    {
      "section": 6,
      "title": "助数詞",
      "titleReading": "じょすうし",
      "instruction": {
        "text": "絵を見て、（　）にひらがなで書いてください。",
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
            "text": "て、（　）にひらがなで"
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
      "type": "counter-fill",
      "items": [
        {
          "id": "4-6-s6-q1",
          "question": {
            "text": "先月、日本語の本を（　）読みました。",
            "segments": [
              {
                "text": "先月",
                "reading": "せんげつ"
              },
              {
                "text": "、"
              },
              {
                "text": "日本語",
                "reading": "にほんご"
              },
              {
                "text": "の"
              },
              {
                "text": "本",
                "reading": "ほん"
              },
              {
                "text": "を（　）"
              },
              {
                "text": "読",
                "reading": "よ"
              },
              {
                "text": "みました。"
              }
            ]
          },
          "visual": {
            "description": "Buku berjumlah 3."
          },
          "answer": {
            "text": "さんさつ",
            "segments": [
              {
                "text": "さんさつ"
              }
            ]
          },
          "canonical": {
            "text": "3冊",
            "segments": [
              {
                "text": "3冊",
                "reading": "さんさつ"
              }
            ]
          },
          "explanationId": "Benda tipis berjilid seperti buku dihitung dengan 冊（さつ）. 3冊 dibaca さんさつ.",
          "solvingSteps": [
            "Identifikasi bendanya: 本.",
            "Counter untuk buku = 冊.",
            "Jumlah 3 → 3冊 = さんさつ."
          ],
          "vocabularyPoint": "冊（さつ）"
        },
        {
          "id": "4-6-s6-q2",
          "question": {
            "text": "昨日、コーヒーを（　）飲みました。",
            "segments": [
              {
                "text": "昨日",
                "reading": "きのう"
              },
              {
                "text": "、コーヒーを（　）"
              },
              {
                "text": "飲",
                "reading": "の"
              },
              {
                "text": "みました。"
              }
            ]
          },
          "visual": {
            "description": "Cangkir kopi berjumlah 3."
          },
          "answer": {
            "text": "さんばい",
            "segments": [
              {
                "text": "さんばい"
              }
            ]
          },
          "canonical": {
            "text": "3杯",
            "segments": [
              {
                "text": "3杯",
                "reading": "さんばい"
              }
            ]
          },
          "explanationId": "Minuman dalam cangkir/gelas dihitung dengan 杯（はい）. Pada angka 3 terjadi perubahan bunyi: 3杯 = さんばい.",
          "solvingSteps": [
            "Benda berupa minuman/cangkir → counter 杯.",
            "Ingat perubahan bunyi 3 + はい → さんばい."
          ],
          "vocabularyPoint": "杯（はい）→ 3杯（さんばい）"
        },
        {
          "id": "4-6-s6-q3",
          "question": {
            "text": "スーパーでワインを（　）買いました。",
            "segments": [
              {
                "text": "スーパーでワインを（　）"
              },
              {
                "text": "買",
                "reading": "か"
              },
              {
                "text": "いました。"
              }
            ]
          },
          "visual": {
            "description": "Botol wine berjumlah 5."
          },
          "answer": {
            "text": "ごほん",
            "segments": [
              {
                "text": "ごほん"
              }
            ]
          },
          "canonical": {
            "text": "5本",
            "segments": [
              {
                "text": "5本",
                "reading": "ごほん"
              }
            ]
          },
          "explanationId": "Benda panjang/silindris seperti botol dihitung dengan 本（ほん）. 5本 dibaca ごほん.",
          "solvingSteps": [
            "Benda berupa botol → counter 本.",
            "Jumlah 5 → ごほん."
          ],
          "vocabularyPoint": "本（ほん）"
        }
      ]
    },
    {
      "section": 7,
      "title": "形を変える",
      "titleReading": "かたちをかえる",
      "instruction": {
        "text": "（　）の中の形を変えてください。",
        "segments": [
          {
            "text": "（　）の"
          },
          {
            "text": "中",
            "reading": "なか"
          },
          {
            "text": "の"
          },
          {
            "text": "形",
            "reading": "かたち"
          },
          {
            "text": "を"
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
          "id": "4-6-s7-q1",
          "question": {
            "text": "この漢字の（読みます → ＿＿＿ ）方を教えてください。",
            "segments": [
              {
                "text": "この"
              },
              {
                "text": "漢字",
                "reading": "かんじ"
              },
              {
                "text": "の（"
              },
              {
                "text": "読",
                "reading": "よ"
              },
              {
                "text": "みます → ＿＿＿ ）"
              },
              {
                "text": "方",
                "reading": "かた"
              },
              {
                "text": "を"
              },
              {
                "text": "教",
                "reading": "おし"
              },
              {
                "text": "えてください。"
              }
            ]
          },
          "answer": {
            "text": "読み",
            "segments": [
              {
                "text": "読",
                "reading": "よ"
              },
              {
                "text": "み"
              }
            ]
          },
          "completed": {
            "text": "この漢字の読み方を教えてください。",
            "segments": [
              {
                "text": "この"
              },
              {
                "text": "漢字",
                "reading": "かんじ"
              },
              {
                "text": "の"
              },
              {
                "text": "読",
                "reading": "よ"
              },
              {
                "text": "み"
              },
              {
                "text": "方",
                "reading": "かた"
              },
              {
                "text": "を"
              },
              {
                "text": "教",
                "reading": "おし"
              },
              {
                "text": "えてください。"
              }
            ]
          },
          "explanationId": "〜方（かた） berarti 'cara melakukan'. Sebelum 方 gunakan stem bentuk ます: 読みます → 読み + 方 = 読み方.",
          "solvingSteps": [
            "Lihat kata setelah blank: 方.",
            "Untuk Vます + 方, buang ます.",
            "読みます → 読み方."
          ],
          "grammarPoint": "Vます-stem + 方"
        },
        {
          "id": "4-6-s7-q2",
          "question": {
            "text": "A：リンさん、窓を（開けます → ＿＿＿ ）ください。\nリン：はい。",
            "segments": [
              {
                "text": "A：リンさん、"
              },
              {
                "text": "窓",
                "reading": "まど"
              },
              {
                "text": "を（"
              },
              {
                "text": "開",
                "reading": "あ"
              },
              {
                "text": "けます → ＿＿＿ ）ください。\n"
              },
              {
                "text": "リン：はい。"
              }
            ]
          },
          "answer": {
            "text": "開けて",
            "segments": [
              {
                "text": "開",
                "reading": "あ"
              },
              {
                "text": "けて"
              }
            ]
          },
          "explanationId": "〜てください membutuhkan bentuk て. 開けます adalah verba kelompok 2, sehingga 開けて.",
          "solvingSteps": [
            "Sesudah blank ada ください.",
            "Pola = Vてください.",
            "開けます → 開けて."
          ],
          "grammarPoint": "Vてください"
        },
        {
          "id": "4-6-s7-q3",
          "question": {
            "text": "A：キムさん、テーブルに皿を（置きます → ＿＿＿ ）ください。\nキム：はい。",
            "segments": [
              {
                "text": "A：キムさん、テーブルに"
              },
              {
                "text": "皿",
                "reading": "さら"
              },
              {
                "text": "を（"
              },
              {
                "text": "置",
                "reading": "お"
              },
              {
                "text": "きます → ＿＿＿ ）ください。\n"
              },
              {
                "text": "キム：はい。"
              }
            ]
          },
          "answer": {
            "text": "置いて",
            "segments": [
              {
                "text": "置",
                "reading": "お"
              },
              {
                "text": "いて"
              }
            ]
          },
          "explanationId": "〜てください membutuhkan bentuk て. 置きます → 置いて.",
          "solvingSteps": [
            "Pola akhir = てください.",
            "置きます adalah godan き → いて.",
            "Jawab 置いて."
          ],
          "grammarPoint": "Vてください / き→いて"
        },
        {
          "id": "4-6-s7-q4",
          "question": {
            "text": "私の趣味は音楽を（聞きます → ＿＿＿ ）ことです。",
            "segments": [
              {
                "text": "私",
                "reading": "わたし"
              },
              {
                "text": "の"
              },
              {
                "text": "趣味",
                "reading": "しゅみ"
              },
              {
                "text": "は"
              },
              {
                "text": "音楽",
                "reading": "おんがく"
              },
              {
                "text": "を（"
              },
              {
                "text": "聞",
                "reading": "き"
              },
              {
                "text": "きます → ＿＿＿ ）ことです。"
              }
            ]
          },
          "answer": {
            "text": "聞く",
            "segments": [
              {
                "text": "聞",
                "reading": "き"
              },
              {
                "text": "く"
              }
            ]
          },
          "explanationId": "Pola V辞書形 + ことです dipakai untuk menyatakan hobi/kegiatan. 聞きます → bentuk kamus 聞く.",
          "solvingSteps": [
            "Setelah blank ada ことです.",
            "Gunakan bentuk kamus.",
            "聞きます → 聞く."
          ],
          "grammarPoint": "V辞書形 + ことです"
        },
        {
          "id": "4-6-s7-q5",
          "question": {
            "text": "私は日本料理を（作ります → ＿＿＿ ）ことができます。",
            "segments": [
              {
                "text": "私",
                "reading": "わたし"
              },
              {
                "text": "は"
              },
              {
                "text": "日本料理",
                "reading": "にほんりょうり"
              },
              {
                "text": "を（"
              },
              {
                "text": "作",
                "reading": "つく"
              },
              {
                "text": "ります → ＿＿＿ ）ことができます。"
              }
            ]
          },
          "answer": {
            "text": "作る",
            "segments": [
              {
                "text": "作",
                "reading": "つく"
              },
              {
                "text": "る"
              }
            ]
          },
          "explanationId": "Pola kemampuan adalah V辞書形 + ことができます. 作ります → 作る.",
          "solvingSteps": [
            "Setelah blank ada ことができます.",
            "Gunakan bentuk kamus.",
            "作ります → 作る."
          ],
          "grammarPoint": "V辞書形 + ことができます"
        },
        {
          "id": "4-6-s7-q6",
          "question": {
            "text": "山田さんは（やさしいです → ＿＿＿ ）、おもしろい人です。",
            "segments": [
              {
                "text": "山田",
                "reading": "やまだ"
              },
              {
                "text": "さんは（やさしいです → ＿＿＿ ）、おもしろい"
              },
              {
                "text": "人",
                "reading": "ひと"
              },
              {
                "text": "です。"
              }
            ]
          },
          "answer": {
            "text": "やさしくて",
            "segments": [
              {
                "text": "やさしくて"
              }
            ]
          },
          "explanationId": "Untuk menghubungkan i-adjective dengan sifat berikutnya, ubah 〜い menjadi 〜くて: やさしい → やさしくて.",
          "solvingSteps": [
            "やさしい adalah i-adjective.",
            "Untuk menyambung sifat, い → くて.",
            "Jawab やさしくて."
          ],
          "grammarPoint": "い形容詞: 〜くて"
        },
        {
          "id": "4-6-s7-q7",
          "question": {
            "text": "リンさんは（まじめです → ＿＿＿ ）、親切です。",
            "segments": [
              {
                "text": "リンさんは（まじめです → ＿＿＿ ）、"
              },
              {
                "text": "親切",
                "reading": "しんせつ"
              },
              {
                "text": "です。"
              }
            ]
          },
          "answer": {
            "text": "まじめで",
            "segments": [
              {
                "text": "まじめで"
              }
            ]
          },
          "explanationId": "Untuk menghubungkan na-adjective/noun-like adjective, gunakan で: まじめです → まじめで.",
          "solvingSteps": [
            "まじめ adalah na-adjective.",
            "Saat menyambung sifat gunakan で.",
            "Jawab まじめで."
          ],
          "grammarPoint": "な形容詞: 〜で"
        }
      ]
    },
    {
      "section": 8,
      "title": "絵を見て書く",
      "titleReading": "えをみてかく",
      "instruction": {
        "text": "絵を見て、書いてください。",
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
          "id": "4-6-s8-q1",
          "visual": {
            "description": "A melihat dua orang yang ingin berfoto dan menawarkan untuk memotret mereka."
          },
          "dialogue": [
            {
              "speaker": "A",
              "content": {
                "text": "（　）",
                "segments": [
                  {
                    "text": "（　）"
                  }
                ]
              }
            },
            {
              "speaker": "B",
              "content": {
                "text": "あ、ありがとうございます。お願いします。",
                "segments": [
                  {
                    "text": "あ、ありがとうございます。お"
                  },
                  {
                    "text": "願",
                    "reading": "ねが"
                  },
                  {
                    "text": "いします。"
                  }
                ]
              }
            }
          ],
          "answer": {
            "text": "写真を撮りましょうか。",
            "segments": [
              {
                "text": "写真",
                "reading": "しゃしん"
              },
              {
                "text": "を"
              },
              {
                "text": "撮",
                "reading": "と"
              },
              {
                "text": "りましょうか。"
              }
            ]
          },
          "explanationId": "〜ましょうか digunakan untuk menawarkan bantuan. Dalam gambar, A menawarkan untuk mengambil foto.",
          "solvingSteps": [
            "Identifikasi tindakan yang dibutuhkan: mengambil foto.",
            "Karena A menawarkan bantuan, gunakan Vましょうか.",
            "撮ります → 撮りましょうか."
          ],
          "grammarPoint": "Vましょうか"
        },
        {
          "id": "4-6-s8-q2",
          "visual": {
            "description": "Urutan gambar: pergi/belanja di supermarket → memasak → makan bersama."
          },
          "dialogue": [
            {
              "speaker": "A",
              "content": {
                "text": "週末、何をしましたか。",
                "segments": [
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
              }
            },
            {
              "speaker": "B",
              "content": {
                "text": "（　）",
                "segments": [
                  {
                    "text": "（　）"
                  }
                ]
              }
            }
          ],
          "answer": {
            "text": "スーパーで買い物をして、料理を作って、食事をしました。",
            "segments": [
              {
                "text": "スーパーで"
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
                "text": "をして、"
              },
              {
                "text": "料理",
                "reading": "りょうり"
              },
              {
                "text": "を"
              },
              {
                "text": "作",
                "reading": "つく"
              },
              {
                "text": "って、"
              },
              {
                "text": "食事",
                "reading": "しょくじ"
              },
              {
                "text": "をしました。"
              }
            ]
          },
          "acceptedVariants": [
            {
              "text": "スーパーで買い物をして、料理を作って、食べました。",
              "segments": [
                {
                  "text": "スーパーで"
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
                  reading: "もの"
                },
                {
                  "text": "をして、"
                },
                {
                  "text": "料理",
                  reading: "りょうり"
                },
                {
                  "text": "を"
                },
                {
                  "text": "作",
                  reading: "つく"
                },
                {
                  "text": "って、"
                },
                {
                  "text": "食",
                  "reading": "た"
                },
                {
                  "text": "べました。"
                }
              ]
            }
          ],
          "explanationId": "Untuk menceritakan beberapa aktivitas secara berurutan gunakan bentuk て, dan aktivitas terakhir memakai bentuk lampau ました.",
          "solvingSteps": [
            "Urutkan gambar dari kiri ke kanan.",
            "Ubah aktivitas pertama dan kedua ke bentuk て.",
            "Aktivitas terakhir gunakan bentuk lampau."
          ],
          "grammarPoint": "Vて、Vて、Vました"
        },
        {
          "id": "4-6-s8-q3",
          "visual": {
            "description": "B pergi ke konser SMILE. A ingin pergi juga dan bertanya cara membeli tiket. Gambar berikutnya menunjukkan reservasi melalui internet lalu pembayaran di konbini."
          },
          "dialogue": [
            {
              "speaker": "A",
              "content": {
                "text": "週末、何をしましたか。",
                "segments": [
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
              }
            },
            {
              "speaker": "B",
              "content": {
                "text": "（1）",
                "segments": [
                  {
                    "text": "（1）"
                  }
                ]
              }
            },
            {
              "speaker": "A",
              "content": {
                "text": "いいですね。私もスマイルのコンサートに行きたいです。\nでも、チケットの買い方がわかりません。（2）",
                "segments": [
                  {
                    "text": "いいですね。"
                  },
                  {
                    "text": "私",
                    "reading": "わたし"
                  },
                  {
                    "text": "もスマイルのコンサートに"
                  },
                  {
                    "text": "行",
                    "reading": "い"
                  },
                  {
                    "text": "きたいです。\n"
                  },
                  {
                    "text": "でも、チケットの"
                  },
                  {
                    "text": "買",
                    "reading": "か"
                  },
                  {
                    "text": "い"
                  },
                  {
                    "text": "方",
                    "reading": "かた"
                  },
                  {
                    "text": "がわかりません。（2）"
                  }
                ]
              }
            },
            {
              "speaker": "B",
              "content": {
                "text": "（3）",
                "segments": [
                  {
                    "text": "（3）"
                  }
                ]
              }
            },
            {
              "speaker": "A",
              "content": {
                "text": "そうですか。ありがとうございます。",
                "segments": [
                  {
                    "text": "そうですか。ありがとうございます。"
                  }
                ]
              }
            }
          ],
          "answer": {
            "1": {
              "text": "SMILEのコンサートに行きました。",
              "segments": [
                {
                  "text": "SMILEのコンサートに"
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
            "2": {
              "text": "どうやってチケットを買いますか。",
              "segments": [
                {
                  "text": "どうやってチケットを"
                },
                {
                  "text": "買",
                  "reading": "か"
                },
                {
                  "text": "いますか。"
                }
              ]
            },
            "3": {
              "text": "インターネットでチケットを予約して、コンビニでお金を払います。",
              "segments": [
                {
                  "text": "インターネットでチケットを"
                },
                {
                  "text": "予約",
                  "reading": "よやく"
                },
                {
                  "text": "して、"
                },
                {
                  "text": "コンビニでお"
                },
                {
                  "text": "金",
                  "reading": "かね"
                },
                {
                  "text": "を"
                },
                {
                  "text": "払",
                  "reading": "はら"
                },
                {
                  "text": "います。"
                }
              ]
            }
          },
          "acceptedVariants": {
            "2": [
              {
                "text": "教えてください。",
                "segments": [
                  {
                    "text": "教",
                    "reading": "おし"
                  },
                  {
                    "text": "えてください。"
                  }
                ]
              },
              {
                "text": "チケットの買い方を教えてください。",
                "segments": [
                  {
                    "text": "チケットの"
                  },
                  {
                    "text": "買",
                    "reading": "か"
                  },
                  {
                    "text": "い"
                  },
                  {
                    "text": "方",
                    "reading": "かた"
                  },
                  {
                    "text": "を"
                  },
                  {
                    "text": "教",
                    "reading": "おし"
                  },
                  {
                    "text": "えてください。"
                  }
                ]
              }
            ]
          },
          "explanationId": "Gambar pertama menunjukkan pengalaman lampau → 行きました. Pertanyaan cara dapat memakai どうやって〜ますか atau 〜方を教えてください. Prosedur berikutnya disambungkan dengan bentuk て: 予約して、〜払います.",
          "solvingSteps": [
            "Gambar 1: jawab aktivitas akhir pekan dalam bentuk lampau.",
            "Dialog A mengatakan tidak tahu cara membeli tiket → tanyakan caranya.",
            "Gambar prosedur: internetで予約する → コンビニで払う.",
            "Sambungkan langkah pertama dengan bentuk て."
          ],
          "grammarPoint": "Vました / どうやって / Vて、Vます"
        }
      ]
    },
    {
      "section": 9,
      "title": "大切な人について話す",
      "titleReading": "たいせつなひとについてはなす",
      "instruction": {
        "text": "あなたの答えを書いてください。友達に大切な人の写真を見せて話しています。",
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
          },
          {
            "text": "友達",
            "reading": "ともだち"
          },
          {
            "text": "に"
          },
          {
            "text": "大切",
            "reading": "たいせつ"
          },
          {
            "text": "な"
          },
          {
            "text": "人",
            "reading": "ひと"
          },
          {
            "text": "の"
          },
          {
            "text": "写真",
            "reading": "しゃしん"
          },
          {
            "text": "を"
          },
          {
            "text": "見",
            "reading": "み"
          },
          {
            "text": "せて"
          },
          {
            "text": "話",
            "reading": "はな"
          },
          {
            "text": "しています。"
          }
        ]
      },
      "type": "open-answer",
      "grading": "open",
      "items": [
        {
          "id": "4-6-s9-q1",
          "question": {
            "text": "A：この人は誰ですか。",
            "segments": [
              {
                "text": "A：この"
              },
              {
                "text": "人",
                "reading": "ひと"
              },
              {
                "text": "は"
              },
              {
                "text": "誰",
                "reading": "だれ"
              },
              {
                "text": "ですか。"
              }
            ]
          },
          "paperAnswer": {
            "text": "私の姉です。",
            "segments": [
              {
                "text": "私",
                "reading": "わたし"
              },
              {
                "text": "の"
              },
              {
                "text": "姉",
                "reading": "あね"
              },
              {
                "text": "です。"
              }
            ]
          },
          "sampleAnswers": [
            {
              "text": "私の姉です。",
              "segments": [
                {
                  "text": "私",
                  "reading": "わたし"
                },
                {
                  "text": "の"
                },
                {
                  "text": "姉",
                  "reading": "あね"
                },
                {
                  "text": "です。"
                }
              ]
            },
            {
              "text": "私の友達です。",
              "segments": [
                {
                  "text": "私",
                  "reading": "わたし"
                },
                {
                  "text": "の"
                },
                {
                  "text": "友達",
                  "reading": "ともだち"
                },
                {
                  "text": "です。"
                }
              ]
            }
          ],
          "explanationId": "Jawaban bebas sesuai orang pada foto. Saat membicarakan kakak perempuan sendiri kepada orang lain, gunakan 姉（あね）.",
          "solvingSteps": [
            "Tentukan hubungan orang itu denganmu.",
            "Gunakan pola 私のNです."
          ],
          "grammarPoint": "この人は誰ですか / 私のNです"
        },
        {
          "id": "4-6-s9-q2",
          "question": {
            "text": "A：へえ。どんな人ですか。",
            "segments": [
              {
                "text": "A：へえ。どんな"
              },
              {
                "text": "人",
                "reading": "ひと"
              },
              {
                "text": "ですか。"
              }
            ]
          },
          "paperAnswer": {
            "text": "やさしくて、きれいです。",
            "segments": [
              {
                "text": "やさしくて、きれいです。"
              }
            ]
          },
          "sampleAnswers": [
            {
              "text": "やさしくて、きれいです。",
              "segments": [
                {
                  "text": "やさしくて、きれいです。"
                }
              ]
            },
            {
              "text": "親切で、おもしろい人です。",
              "segments": [
                {
                  "text": "親切",
                  "reading": "しんせつ"
                },
                {
                  "text": "で、おもしろい"
                },
                {
                  "text": "人",
                  "reading": "ひと"
                },
                {
                  "text": "です。"
                }
              ]
            }
          ],
          "explanationId": "どんな人ですか menanyakan sifat/karakter. Beberapa sifat dapat disambungkan dengan 〜くて untuk i-adjective atau 〜で untuk na-adjective.",
          "solvingSteps": [
            "Pilih 2 sifat orang tersebut.",
            "i-adjective pertama → 〜くて.",
            "na-adjective pertama → 〜で.",
            "Akhiri dengan sifat/predikat terakhir."
          ],
          "grammarPoint": "どんな人ですか / 形容詞の接続"
        }
      ]
    },
    {
      "section": 10,
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
        "text": "日曜日、西川さんの家でメアリーさんの誕生日パーティーをしました。\nメアリーさんは親切で、おもしろい人です。\nワンさんと私はメアリーさんにネックレスをあげました。\n西川さんはチョコレートをあげました。\nみんなでおいしいお酒を飲みました。とても楽しかったです。",
        "segments": [
          {
            "text": "日曜日",
            "reading": "にちようび"
          },
          {
            "text": "、"
          },
          {
            "text": "西川",
            "reading": "にしかわ"
          },
          {
            "text": "さんの"
          },
          {
            "text": "家",
            "reading": "いえ"
          },
          {
            "text": "でメアリーさんの"
          },
          {
            "text": "誕生日",
            "reading": "たんじょうび"
          },
          {
            "text": "パーティーをしました。\n"
          },
          {
            "text": "メアリーさんは"
          },
          {
            "text": "親切",
            "reading": "しんせつ"
          },
          {
            "text": "で、おもしろい"
          },
          {
            "text": "人",
            "reading": "ひと"
          },
          {
            "text": "です。\n"
          },
          {
            "text": "ワンさんと"
          },
          {
            "text": "私",
            "reading": "わたし"
          },
          {
            "text": "はメアリーさんにネックレスをあげました。\n"
          },
          {
            "text": "西川",
            "reading": "にしかわ"
          },
          {
            "text": "さんはチョコレートをあげました。\n"
          },
          {
            "text": "みんなでおいしいお"
          },
          {
            "text": "酒",
            "reading": "さけ"
          },
          {
            "text": "を"
          },
          {
            "text": "飲",
            "reading": "の"
          },
          {
            "text": "みました。とても"
          },
          {
            "text": "楽",
            "reading": "たの"
          },
          {
            "text": "しかったです。"
          }
        ]
      },
      "readingStrategy": [
        "Baca pernyataan lebih dulu dan tandai nama orang, tempat, benda, atau aksi.",
        "Cari kalimat di bacaan yang memuat nama/kata yang sama.",
        "Perhatikan arah あげます／もらいます dan siapa pemberi/penerimanya.",
        "Untuk ○×, satu detail berbeda membuat jawaban ×."
      ],
      "items": [
        {
          "id": "4-6-s10-example",
          "isExample": true,
          "statement": {
            "text": "ワンさんはメアリーさんにネックレスをあげました。",
            "segments": [
              {
                "text": "ワンさんはメアリーさんにネックレスをあげました。"
              }
            ]
          },
          "answer": "○",
          "explanationId": "Bacaan menyatakan ワンさんと私はメアリーさんにネックレスをあげました, jadi benar."
        },
        {
          "id": "4-6-s10-q1",
          "statement": {
            "text": "メアリーさんは西川さんにチョコレートをもらいました。",
            "segments": [
              {
                "text": "メアリーさんは"
              },
              {
                "text": "西川",
                "reading": "にしかわ"
              },
              {
                "text": "さんにチョコレートをもらいました。"
              }
            ]
          },
          "answer": "○",
          "explanationId": "Bacaan mengatakan 西川さんはチョコレートをあげました. Dalam konteks pesta ulang tahun Mary, dari sudut Mary dapat dinyatakan メアリーさんは西川さんにチョコレートをもらいました.",
          "solvingSteps": [
            "Cari チョコレート di bacaan.",
            "Teks: 西川さんはチョコレートをあげました.",
            "Ubah sudut pandang: Mary menerima dari Nishikawa → もらいました.",
            "Maknanya sama → ○."
          ],
          "grammarPoint": "あげます ↔ もらいます"
        },
        {
          "id": "4-6-s10-q2",
          "statement": {
            "text": "日曜日、メアリーさんの家でパーティーがありました。",
            "segments": [
              {
                "text": "日曜日",
                "reading": "にちようび"
              },
              {
                "text": "、メアリーさんの"
              },
              {
                "text": "家",
                "reading": "いえ"
              },
              {
                "text": "でパーティーがありました。"
              }
            ]
          },
          "answer": "×",
          "explanationId": "Pestanya berlangsung di 西川さんの家, bukan di rumah Mary.",
          "solvingSteps": [
            "Cari lokasi pesta pada kalimat pertama.",
            "Teks: 西川さんの家で.",
            "Soal: メアリーさんの家で → berbeda → ×."
          ]
        },
        {
          "id": "4-6-s10-q3",
          "statement": {
            "text": "日曜日のパーティーは楽しかったです。",
            "segments": [
              {
                "text": "日曜日",
                "reading": "にちようび"
              },
              {
                "text": "のパーティーは"
              },
              {
                "text": "楽",
                "reading": "たの"
              },
              {
                "text": "しかったです。"
              }
            ]
          },
          "answer": "○",
          "explanationId": "Kalimat terakhir mengatakan とても楽しかったです, sehingga pernyataan benar.",
          "solvingSteps": [
            "Cari penilaian tentang pesta di akhir bacaan.",
            "Teks: とても楽しかったです.",
            "Sama dengan pernyataan → ○."
          ]
        }
      ]
    }
  ]
};
