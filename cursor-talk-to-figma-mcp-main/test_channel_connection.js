// 채널 연결 테스트 스크립트
import WebSocket from 'ws';

const channelName = 'q23r6i30';
const wsUrl = 'ws://localhost:3055';

console.log(`채널 "${channelName}" 연결 테스트 시작...`);
console.log(`WebSocket 서버: ${wsUrl}`);

const ws = new WebSocket(wsUrl);

ws.on('open', () => {
  console.log('✓ WebSocket 서버에 연결되었습니다');
  
  // 채널 조인 요청
  const joinMessage = {
    type: 'join',
    channel: channelName,
    id: 'test-' + Date.now()
  };
  
  console.log(`채널 "${channelName}" 조인 시도...`);
  ws.send(JSON.stringify(joinMessage));
});

ws.on('message', (data) => {
  try {
    const message = JSON.parse(data.toString());
    console.log('\n=== 서버 응답 ===');
    console.log(JSON.stringify(message, null, 2));
    
    if (message.type === 'system' && message.message && typeof message.message === 'object') {
      if (message.message.result && message.message.result.includes('Connected to channel')) {
        console.log(`\n✅ 성공! 채널 "${channelName}"에 연결되었습니다!`);
        ws.close();
        process.exit(0);
      }
    } else if (message.type === 'system' && typeof message.message === 'string') {
      if (message.message.includes('Joined channel')) {
        console.log(`\n✅ 성공! 채널 "${channelName}"에 연결되었습니다!`);
        ws.close();
        process.exit(0);
      }
    } else if (message.type === 'error') {
      console.log(`\n❌ 오류: ${message.message}`);
      ws.close();
      process.exit(1);
    }
  } catch (error) {
    console.error('메시지 파싱 오류:', error);
  }
});

ws.on('error', (error) => {
  console.error(`\n❌ WebSocket 오류: ${error.message}`);
  process.exit(1);
});

ws.on('close', () => {
  console.log('\n연결이 종료되었습니다');
});

// 타임아웃 설정 (5초)
setTimeout(() => {
  console.log('\n⏱️  타임아웃: 응답을 받지 못했습니다');
  ws.close();
  process.exit(1);
}, 5000);
