"use client";
import React, { useState } from "react";

interface Question {
  id: number;
  question: string;
  answer: string;
}
const questions: Question[] = [
  {
    id: 1,
    question: "SDS implantlarının zımparalanmasına neden izin veriliyor?",
    answer:
      "SDS implantları, gerektiğinde doğru uyum ve fonksiyon için güvenli bir şekilde zımparalanmaya olanak tanıyan gelişmiş malzemeler ve mühendislikle tasarlanmıştır.",
  },
  {
    id: 2,
    question: "Neden diş açma aleti (tap) gerekmez?",
    answer:
      "Tüm SDS implantları kendiliğinden diş açar ve çoğu durumda hemen implant olarak yerleştirilebilir.",
  },
  {
    id: 3,
    question: "Neden doku seviyesi (tissue level)?",
    answer:
      "Doku seviyesi implantları, uzun vadeli başarı için daha iyi yumuşak doku yönetimi ve daha kolay bakım sağlar.",
  },
  {
    id: 4,
    question: "2.2 ile neden hem vidalama hem de simantasyon yapılır?",
    answer:
      "2.2 bağlantısı, gerektiğinde kolayca çıkarılabilirlik sağlarken optimum tutunma sunar.",
  },
  {
    id: 5,
    question:
      "İmplantasyon sırasında implantın dişleri, daha önceki sarmallara nasıl girer?",
    answer:
      "Gelişmiş diş yapısı, kemikle aşamalı olarak bağlanarak optimum birincil stabilite oluşturur.",
  },
  {
    id: 6,
    question: "İmplantınız hangi malzemeden yapılmıştır?",
    answer:
      "İmplantlarımız, optimum biyouyumluluk için gelişmiş yüzey işlemleriyle yüksek kaliteli zirkonyum dioksit seramikten yapılmıştır.",
  },
  {
    id: 7,
    question: "İmplant nasıl üretiliyor?",
    answer:
      "İmplantlarımız, en son teknoloji hassas işleme ve kalite kontrol süreçleri kullanılarak üretilmektedir.",
  },
  {
    id: 8,
    question: "Neden tek parçalı implantlar sunuyorsunuz?",
    answer:
      "Tek parçalı implantlar, implant-abutment arayüzünü ortadan kaldırarak bakteri sızıntısını azaltır ve prosedürü basitleştirir.",
  },
  {
    id: 9,
    question: "Protez restorasyonu nasıl çalışır?",
    answer:
      "Protez sistemimiz, optimum sonuçlar için net protokollerle basitlik ve güvenilirlik sunacak şekilde tasarlanmıştır.",
  },
  {
    id: 10,
    question:
      "Kortikal kemikte sıfır tork tercih ediyorsanız birincil stabilite nasıl sağlanır?",
    answer:
      "Birincil stabilite, yüksek tork değerleri gerektirmeyen optimum diş yapısı ve kemik hazırlığı teknikleri ile elde edilir.",
  },
  {
    id: 11,
    question: "Üründe hasar, sorun ve kırılmalar ne olacak?",
    answer:
      "SDS implantları kapsamlı bir garanti kapsamıyla gelir ve kalite kontrolümüz, ürün sorunları riskini en aza indirir.",
  },
  {
    id: 12,
    question: "Rakip ürünlere kıyasla ana özellikleriniz nelerdir?",
    answer:
      "İmplantlarımız benzersiz kendiliğinden diş açma tasarımı, doku seviyesi yerleşimi, üstün biyouyumluluk ve basitleştirilmiş cerrahi protokoller sunar.",
  },
  {
    id: 13,
    question:
      "SDS ile nasıl başlayabilirim? Hangi teklifleriniz/özel programlarınız var?",
    answer:
      "Yeni uygulayıcılar için kapsamlı başlangıç paketleri, eğitim programları ve özel giriş fiyatları sunuyoruz.",
  },
  {
    id: 14,
    question: "Başlangıç kursu neden ZORUNLU? 20 yıldır implant yapıyorum!",
    answer:
      "Deneyimli uygulayıcılar bile, başarı oranlarını en üst düzeye çıkarmak için benzersiz protokollerimizi ve tekniklerimizi anlamaktan fayda sağlar.",
  },
  {
    id: 15,
    question: "Hangi meslektaşlar sisteminizle zaten çalışıyor?",
    answer:
      "Dünya çapında SDS implantlarını kliniklerine başarıyla entegre etmiş büyüyen bir uygulayıcı ağına sahibiz.",
  },
  {
    id: 16,
    question: "Hangi kemik ikame malzemesini öneriyorsunuz?",
    answer:
      "Optimum osseointegrasyon için implant sistemimizi tamamlayan biyouyumlu kemik greftleme malzemelerini öneriyoruz.",
  },
  {
    id: 17,
    question: "Neden besin takviyeleri gerekli?",
    answer:
      "Doğru beslenme ve takviyeler, iyileşmeyi ve osseointegrasyonu destekleyerek uzun vadeli implant başarısına katkıda bulunur.",
  },
  {
    id: 18,
    question: "SDS implantlarınız besin takviyeleri olmadan da iyileşir mi?",
    answer:
      "Evet, SDS implantları takviye olmadan da başarılı bir şekilde iyileşebilir, ancak doğru beslenme her zaman optimum iyileşmeyi destekler.",
  },
  {
    id: 19,
    question: "1.2 implant ile protez için neye ihtiyacım var?",
    answer:
      "1.2 implant sistemi, küçük çaplı uygulamalar için tasarlanmış özel protez bileşenleri içerir.",
  },
  {
    id: 20,
    question: "İyileşme süresi ne kadar?",
    answer:
      "İyileşme süreleri bireysel faktörlere bağlı olarak değişir, ancak implantlarımız hızlandırılmış osseointegrasyon için tasarlanmıştır.",
  },
  {
    id: 21,
    question: "İmplanta ne zaman yük uygulamaya başlayabilirim?",
    answer:
      "Yükleme protokolleri, birincil stabiliteye ve kemik kalitesine bağlıdır, uygun vakalarda hemen yükleme mümkündür.",
  },
  {
    id: 22,
    question: "Seramik implantlar ne kadar sağlamdır?",
    answer:
      "Seramik implantlar mükemmel biyouyumluluk ve stabilite sunar, ön bölgede benzersiz estetik avantajlara sahiptir.",
  },
];

function Questions() {
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedQuestions, setExpandedQuestions] = useState<number[]>([]);
  const [showAll, setShowAll] = useState(false);

  const filteredQuestions = questions.filter(
    (q) =>
      q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const displayedQuestions = showAll
    ? filteredQuestions
    : filteredQuestions.slice(0, 5);

  const toggleQuestion = (id: number) => {
    setExpandedQuestions((prev) =>
      prev.includes(id) ? prev.filter((qId) => qId !== id) : [...prev, id]
    );
  };

  return (
    <div className="pb-[100px]">
      <div className="max-w-[1320px] mx-auto px-4 lg:px-8">
        <div className="bg-[linear-gradient(180deg,#fff_58.33%,#fff0_100%)] min-h-screen py-16rounded-2xl  p-8 lg:p-12">
          {/* Header Section */}
          <div className="mb-12">
            <div className="flex items-center flex-col sm:flex-row justify-between mb-8">
              <div className="mb-[46px]">
                <p className="flex items-center text-[16px] text-primary-500 mb-2font-[300] tracking-wider uppercase">
                  <span className="hidden sm:inline-block w-[100px] h-[1px] bg-mint mr-4" />
                  SSS
                </p>
                <h2 className="text-3xl md:text-4xl font-gotham font-bold text-primary-600 leading-[-1.2px]">
                  Sıkça Sorulan
                  <br />{" "}
                  <span className="text-primary-600 font-[400]">Sorular</span>
                </h2>
              </div>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-80 px-4 py-3 border border-secondary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent font-gotham transition-all duration-300"
                />
                <svg
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-secondary-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Questions List */}
          <div className="space-y-4 mb-8">
            {displayedQuestions.map((q) => (
              <div
                key={q.id}
                className="border-b border-secondary-200 rounded-xl transition-all duration-300"
              >
                <button
                  onClick={() => toggleQuestion(q.id)}
                  className="w-full px-6 py-4 text-left flex items-center gap-4 transition-all duration-300 rounded-xl"
                >
                  <div className="flex-shrink-0">
                    <svg
                      className={`w-6 h-6 text-primary-600 transition-transform duration-300 ${
                        expandedQuestions.includes(q.id) ? "rotate-45" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  </div>
                  <span className="text-lg font-gotham font-[400] text-primary-600 flex-1">
                    {q.question}
                  </span>
                </button>
                {expandedQuestions.includes(q.id) && (
                  <div className="px-6 pb-4 border-t border-secondary-100 ml-10">
                    <p className="text-secondary-700 pt-4 leading-relaxed font-gotham">
                      {q.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Show More Button */}
          {filteredQuestions.length > 5 && (
            <div className="text-center">
              <button
                onClick={() => setShowAll(!showAll)}
                className="inline-flex items-center px-6 py-3 text-primary-600 font-gotham font-medium hover:bg-secondary-50 rounded-lg transition-all duration-300 border border-secondary-200"
              >
                {showAll ? "Daha az göster" : "Daha fazla göster"}
                <svg
                  className={`ml-2 w-4 h-4 transition-transform duration-300 ${
                    showAll ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Questions;
