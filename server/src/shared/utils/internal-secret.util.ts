import { timingSafeEqual } from 'crypto'

export function verifyInternalSecret(
  provided: string | null | undefined,
  expected: string | null | undefined,
): boolean {
  const received = provided?.trim()
  const configured = expected?.trim()

  if (!received || !configured) return false

  const receivedBuf = Buffer.from(received, 'utf-8')
  const configuredBuf = Buffer.from(configured, 'utf-8')

  if (receivedBuf.length !== configuredBuf.length) return false

  // việc so sánh === sẽ máy sẽ phải quét qua nhiều ký tự
  // khi hacker gửi nhiều request lên
  // để đo thời gian phản hồi và đoán từng ký tự (timing attack)
  // dùng timingSafeEqual nhưng hiệu năng sẽ giảm đi 1 chút
  return timingSafeEqual(receivedBuf, configuredBuf)
}
