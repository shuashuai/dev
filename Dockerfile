# Production image, copy all the files and run next
FROM node:alpine
WORKDIR /app

ENV NODE_ENV production

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

COPY .next/standalone ./
COPY /public ./public
COPY package.json ./package.json
COPY --chown=nextjs:nodejs .next/static ./.next/static

USER nextjs

EXPOSE 8000

ENV PORT 8000


CMD ["node", "server.js"]