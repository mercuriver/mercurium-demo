# Datum Hog 브랜드 이미지

로고 모양의 원본은 [워드마크 SVG](../assets/logo.svg)다. favicon의 D는 이 워드마크에서
가져왔으며, 공유 이미지도 같은 D를 사용한다. PNG는 SVG에서 렌더링한 배포용 산출물이다.

| 파일                                 | 용도                               | 원본·출력 크기                          |
| ------------------------------------ | ---------------------------------- | --------------------------------------- |
| `favicon.svg`                        | 브라우저 탭, 모서리 투명           | 64×64 SVG                               |
| `favicon-32.png`                     | SVG 미지원 브라우저                | `favicon.svg`, 32×32                    |
| `icon-fullbleed.svg`                 | 홈 화면 아이콘의 배경이 꽉 찬 원본 | 64×64 SVG                               |
| `apple-touch-icon.png`               | iOS 홈 화면                        | `icon-fullbleed.svg`, 180×180           |
| `favicon-192.png`, `favicon-512.png` | 웹 앱 아이콘                       | `icon-fullbleed.svg`, 192×192 / 512×512 |
| `og-image.svg`, `og-image.png`       | 링크 공유 카드                     | 1200×630                                |
| `site.webmanifest`                   | 웹 앱 이름·색상·아이콘 연결        | JSON                                    |

## 색상 기준

앱 안의 워드마크는 활성 테마의 `primary.color` → `secondary.color` 그라데이션과
`surface.subtle` 외곽색을 따른다. 외부 SVG와 PNG에는 앱 CSS 변수가 전달되지 않으므로
`@mercurium/tokens/semantic/color`의 `THEME_PRESETS.default.light` 값을 명시한다.

- 강조색: 청록 `#06b6d4` → 인디고 `#6366f1`
- 아이콘 배경: `#f1f5f9`, 외곽선·공유 카드 배경: `#f9fafb`
- 공유 카드 제목: `#020617`, 보조 문구: `#334155`

아이콘의 그라데이션은 도형의 bounding box를 기준으로 한다. 큰 원본 좌표와 작은
그라데이션 좌표를 섞으면 마지막 색상만 표시될 수 있다.

## 갱신과 검증

SVG를 수정하면 표의 크기로 PNG도 함께 렌더링한다. 브라우저의 SVG→Canvas PNG 출력이나
`@resvg/resvg-js`를 사용할 수 있다. 공유 카드의 글꼴은 Arial/Helvetica/sans-serif이며,
실제 출력에서 문구가 잘리지 않는지 확인한다.

16·32px 탭 크기, 밝고 어두운 배경, 1200×630 공유 카드를 확인한다. 아이콘 변경 시
`index.html`과 manifest의 이미지 URL 버전도 함께 갱신해 이전 이미지 캐시를 구별한다.
