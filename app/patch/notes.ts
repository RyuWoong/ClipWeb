import { PatchNote } from '@/types';

export const patchNotes: PatchNote[] = [
  {
    version: '1.0.1',
    date: '2025-06-09',
    title: '그룹 공유 추가!',
    features: [
      '그룹 공유 기능 추가!',
      '그룹 공유 기능을 사용하면 웹을 통해 여러사람에게 내가 저장한 콘텐츠를 공유할 수 있어요.',
    ],
  },
  {
    version: '1.0.0',
    date: '2025-05-20',
    title: '첫 출시',
    features: [
      'iOS, iPadOS, MacOS 에서 사용 가능해요!',
      '다른 앱에서 공유 버튼을 눌러서 URL을 빠르게 저장할 수 있어요.',
    ],
  },
];
