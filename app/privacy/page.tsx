import styles from './privacy.module.css';

export default function Privacy() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.card}>
          <div className={styles.header}>
            <h1 className={styles.title}>개인정보 처리방침</h1>
            <div className={styles.subtitle}>
              <p className={styles.subtitleText}>깜깜한 개발소 (https://darkroom.kr/)</p>
              <p>2025년 5월 17일부터 적용</p>
            </div>
          </div>

          <div className={styles.content}>
            <div className={styles.introBox}>
              <p className={styles.introText}>
                <span className={styles.strong}>깜깜한 개발소</span>(&apos;https://darkroom.kr/&apos;이하 &apos;깜깜한
                방에서 코딩하기&apos;)은(는) 「개인정보 보호법」 제30조에 따라 정보주체의 개인정보를 보호하고 이와
                관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보 처리방침을
                수립·공개합니다.
              </p>
            </div>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>제1조 (개인정보의 처리 목적)</h2>
              <p className={styles.sectionContent}>
                <span className={styles.strong}>깜깜한 개발소</span>(&apos;https://darkroom.kr/&apos;이하 &apos;깜깜한
                방에서 코딩하기&apos;)은(는) 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의
                목적 이외의 용도로는 이용되지 않으며 이용 목적이 변경되는 경우에는 「개인정보 보호법」 제18조에 따라
                별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.
              </p>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>제2조 (개인정보의 처리 및 보유 기간)</h2>
              <div className={styles.sectionContent}>
                <p>
                  ① <span className={styles.strong}>깜깜한 개발소</span>은(는) 법령에 따른 개인정보 보유·이용기간 또는
                  정보주체로부터 개인정보를 수집 시에 동의받은 개인정보 보유·이용기간 내에서 개인정보를 처리·보유합니다.
                </p>
                <p>② 각각의 개인정보 처리 및 보유 기간은 다음과 같습니다.</p>
                <div className={styles.highlightBox}>
                  <ul className={styles.list}>
                    <li>
                      와 관련한 개인정보는 수집·이용에 관한 동의일로부터까지 위 이용목적을 위하여 보유, 이용됩니다.
                    </li>
                    <li>
                      <span className={styles.strong}>보유근거:</span> 이용을 위해서만 보관하여, 탈퇴 시 데이터는 바로
                      삭제됩니다.
                    </li>
                    <li>
                      <span className={styles.strong}>관련법령:</span> 신용정보의 수집/처리 및 이용 등에 관한 기록 : 3년
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>제3조 (처리하는 개인정보의 항목)</h2>
              <p className={styles.sectionContent}>
                ① <span className={styles.strong}>깜깜한 개발소</span>은(는) 다음의 개인정보 항목을 처리하고 있습니다.
              </p>
              <div className={styles.highlightBox}>
                <h3 className={styles.subsectionTitle}>홈페이지 회원가입 및 관리</h3>
                <p className={styles.subsectionContent}>
                  <span className={styles.strong}>필수항목:</span> 이메일, 이름
                </p>
              </div>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>제4조 (개인정보의 파기절차 및 파기방법)</h2>
              <div className={styles.sectionContent}>
                <p>
                  ① <span className={styles.strong}>깜깜한 개발소</span>은(는) 개인정보 보유기간의 경과, 처리목적 달성
                  등 개인정보가 불필요하게 되었을 때에는 지체없이 해당 개인정보를 파기합니다.
                </p>
                <p>
                  ② 정보주체로부터 동의받은 개인정보 보유기간이 경과하거나 처리목적이 달성되었음에도 불구하고 다른
                  법령에 따라 개인정보를 계속 보존하여야 하는 경우에는, 해당 개인정보를 별도의 데이터베이스(DB)로
                  옮기거나 보관장소를 달리하여 보존합니다.
                </p>
                <div className={styles.highlightBox}>
                  <h4 className={styles.subsectionTitle}>③ 개인정보 파기의 절차 및 방법</h4>
                  <div className={styles.subsectionContent}>
                    <p>
                      <span className={styles.strong}>1. 파기절차:</span> 깜깜한 개발소는 파기 사유가 발생한 개인정보를
                      선정하고, 개인정보 보호책임자의 승인을 받아 개인정보를 파기합니다.
                    </p>
                    <p>
                      <span className={styles.strong}>2. 파기방법:</span> 전자적 파일 형태의 정보는 기록을 재생할 수
                      없는 기술적 방법을 사용합니다.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>제5조 (정보주체와 법정대리인의 권리·의무 및 그 행사방법)</h2>
              <div className={styles.sectionContent}>
                <p>
                  ① 정보주체는 깜깜한 개발소에 대해 언제든지 개인정보 열람·정정·삭제·처리정지 요구 등의 권리를 행사할 수
                  있습니다.
                </p>
                <p>
                  ② 제1항에 따른 권리 행사는 깜깜한 개발소에 대해 「개인정보 보호법」 시행령 제41조제1항에 따라 서면,
                  전자우편, 모사전송(FAX) 등을 통하여 하실 수 있으며 깜깜한 개발소은(는) 이에 대해 지체 없이
                  조치하겠습니다.
                </p>
                <p>
                  ③ 제1항에 따른 권리 행사는 정보주체의 법정대리인이나 위임을 받은 자 등 대리인을 통하여 하실 수
                  있습니다. 이 경우 &quot;개인정보 처리 방법에 관한 고시(제2020-7호)&quot; 별지 제11호 서식에 따른
                  위임장을 제출하셔야 합니다.
                </p>
                <p>
                  ④ 개인정보 열람 및 처리정지 요구는 「개인정보 보호법」 제35조 제4항, 제37조 제2항에 의하여 정보주체의
                  권리가 제한될 수 있습니다.
                </p>
                <p>
                  ⑤ 개인정보의 정정 및 삭제 요구는 다른 법령에서 그 개인정보가 수집 대상으로 명시되어 있는 경우에는 그
                  삭제를 요구할 수 없습니다.
                </p>
                <p>
                  ⑥ <span className={styles.strong}>깜깜한 개발소</span>은(는) 정보주체 권리에 따른 열람의 요구,
                  정정·삭제의 요구, 처리정지의 요구 시 열람 등 요구를 한 자가 본인이거나 정당한 대리인인지를 확인합니다.
                </p>
              </div>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>제6조 (개인정보의 안전성 확보조치)</h2>
              <p className={styles.sectionContent}>
                <span className={styles.strong}>깜깜한 개발소</span>은(는) 개인정보의 안전성 확보를 위해 다음과 같은
                조치를 취하고 있습니다.
              </p>
              <div className={styles.highlightBox}>
                <div className={styles.subsectionContent}>
                  <div>
                    <h4 className={styles.subsectionTitle}>1. 내부관리계획의 수립 및 시행</h4>
                    <p>개인정보의 안전한 처리를 위하여 내부관리계획을 수립하고 시행하고 있습니다.</p>
                  </div>
                  <div>
                    <h4 className={styles.subsectionTitle}>2. 해킹 등에 대비한 기술적 대책</h4>
                    <p>
                      깜깜한 개발소(&apos;깜깜한 방에서 코딩하기&apos;)은 해킹이나 컴퓨터 바이러스 등에 의한 개인정보
                      유출 및 훼손을 막기 위하여 보안프로그램을 설치하고 주기적인 갱신·점검을 하며 외부로부터 접근이
                      통제된 구역에 시스템을 설치하고 기술적/물리적으로 감시 및 차단하고 있습니다.
                    </p>
                  </div>
                  <div>
                    <h4 className={styles.subsectionTitle}>3. 개인정보에 대한 접근 제한</h4>
                    <p>
                      개인정보를 처리하는 데이터베이스시스템에 대한 접근권한의 부여, 변경, 말소를 통하여 개인정보에 대한
                      접근통제를 위하여 필요한 조치를 하고 있으며 침입차단시스템을 이용하여 외부로부터의 무단 접근을
                      통제하고 있습니다.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>제7조 (개인정보를 자동으로 수집하는 장치의 설치·운영 및 그 거부)</h2>
              <p className={styles.sectionContent}>
                깜깜한 개발소는 정보주체의 이용정보를 저장하고 수시로 불러오는 &apos;쿠키(cookie)&apos;를 사용하지
                않습니다.
              </p>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>제8조 (개인정보 보호책임자)</h2>
              <div className={styles.sectionContent}>
                <p>
                  ① 깜깜한 개발소는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의
                  불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.
                </p>
                <div className={styles.infoBox}>
                  <h4 className={styles.infoBoxTitle}>▶ 개인정보 보호책임자</h4>
                  <ul className={styles.infoList}>
                    <li>
                      <span className={styles.strong}>성명:</span> 박정륭
                    </li>
                    <li>
                      <span className={styles.strong}>직책:</span> 소장
                    </li>
                    <li>
                      <span className={styles.strong}>직급:</span> 소장
                    </li>
                    <li>
                      <span className={styles.strong}>연락처:</span> wjdfbd1121@gmail.com
                    </li>
                  </ul>
                </div>
                <p>
                  ② 정보주체께서는 깜깜한 개발소의 서비스(또는 사업)을 이용하시면서 발생한 모든 개인정보 보호 관련 문의,
                  불만처리, 피해구제 등에 관한 사항을 개인정보 보호책임자 및 담당부서로 문의하실 수 있습니다. 깜깜한
                  개발소는 정보주체의 문의에 대해 지체 없이 답변 및 처리해드릴 것입니다.
                </p>
              </div>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>제9조 (개인정보의 열람청구를 접수·처리하는 부서)</h2>
              <div className={styles.sectionContent}>
                <p>
                  정보주체는 ｢개인정보 보호법｣ 제35조에 따른 개인정보의 열람 청구를 아래의 부서에 할 수 있습니다. 깜깜한
                  개발소는 정보주체의 개인정보 열람청구가 신속하게 처리되도록 노력하겠습니다.
                </p>
                <div className={styles.infoBox}>
                  <h4 className={styles.infoBoxTitle}>▶ 개인정보 열람청구 접수·처리 부서</h4>
                  <ul className={styles.infoList}>
                    <li>
                      <span className={styles.strong}>담당자:</span> 박정륭
                    </li>
                    <li>
                      <span className={styles.strong}>연락처:</span> wjdfbd1121@gmail.com
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>제10조 (정보주체의 권익침해에 대한 구제방법)</h2>
              <div className={styles.sectionContent}>
                <p>
                  정보주체는 개인정보침해로 인한 구제를 받기 위하여 개인정보분쟁조정위원회, 한국인터넷진흥원
                  개인정보침해신고센터 등에 분쟁해결이나 상담 등을 신청할 수 있습니다. 이 밖에 기타 개인정보침해의 신고,
                  상담에 대하여는 아래의 기관에 문의하시기 바랍니다.
                </p>
                <div className={styles.highlightBox}>
                  <ul className={styles.contactList}>
                    <li>1. 개인정보분쟁조정위원회 : (국번없이) 1833-6972 (www.kopico.go.kr)</li>
                    <li>2. 개인정보침해신고센터 : (국번없이) 118 (privacy.kisa.or.kr)</li>
                    <li>3. 대검찰청 : (국번없이) 1301 (www.spo.go.kr)</li>
                    <li>4. 경찰청 : (국번없이) 182 (ecrm.cyber.go.kr)</li>
                  </ul>
                </div>
                <p className={styles.smallText}>
                  「개인정보보호법」제35조(개인정보의 열람), 제36조(개인정보의 정정·삭제), 제37조(개인정보의 처리정지
                  등)의 규정에 의한 요구에 대하여 공공기관의 장이 행한 처분 또는 부작위로 인하여 권리 또는 이익의 침해를
                  받은 자는 행정심판법이 정하는 바에 따라 행정심판을 청구할 수 있습니다.
                </p>
                <p className={styles.verySmallText}>
                  ※ 행정심판에 대해 자세한 사항은 중앙행정심판위원회(www.simpan.go.kr) 홈페이지를 참고하시기 바랍니다.
                </p>
              </div>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>제11조 (개인정보 처리방침 변경)</h2>
              <div className={styles.sectionContent}>
                <p>① 이 개인정보처리방침은 2025년 5월 17일부터 적용됩니다.</p>
                <p>② 이전의 개인정보 처리방침은 아래에서 확인하실 수 있습니다.</p>
              </div>
            </section>
          </div>

          <div className={styles.footer}>
            <p className={styles.footerText}>본 개인정보 처리방침은 2025년 5월 17일부터 시행됩니다.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
