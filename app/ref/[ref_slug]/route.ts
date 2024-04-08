import {getCookie, setCookie} from 'cookies-next';
import {NextResponse} from 'next/server';

import type {NextRequest} from 'next/server';

const re = /^[a-zA-Z0-9]{1,20}$/;

export async function GET(req: NextRequest, {params}: { params: { ref_slug: string } }) {
  const res = NextResponse.redirect(new URL('/signin', process.env.NEXTAUTH_URL || req.url));
  const ref_slug = getCookie('ref_slug', {req, res});

  if (re.test(params.ref_slug) && !ref_slug) {
    setCookie('ref_slug', params.ref_slug, {req, res});
  }

  const referrer = getCookie('referer', {req, res});
  if (!referrer) {
    const referrerUrl = req.headers.get('referer');
    if (referrerUrl) {
      setCookie('referrer', referrerUrl, {req, res, maxAge: 60 * 60 * 24 * 30});
    }
  }

  const ip = getCookie('ip', {req, res});
  if (!ip) {
    let real_ip = req.headers.get('x-forwarded-for')?.split(',')[0].trim();
    console.log(real_ip);
    if (real_ip && real_ip.startsWith('::ffff:')) {
      real_ip = real_ip.replace('::ffff:', '');
    }
    if (real_ip) {
      setCookie('ip', real_ip, {req, res, maxAge: 60 * 60 * 24 * 30});
    }
  }

  const utm = getCookie('utm', {req, res});
  if (!utm) {
    const utmParams = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];
    const utmData = utmParams.reduce((acc, param) => {
      const value = req.nextUrl.searchParams.get(param);
      if (value) acc[param] = value;
      return acc;
    }, {});

    if (Object.keys(utmData).length > 0) {
      setCookie('utm', JSON.stringify(utmData), {req, res, maxAge: 60 * 60 * 24 * 30});
    }
  }
  
  const locale = getCookie('locale', {req, res});
  if (!locale) {
    const userLocale = req.headers.get('accept-language')?.split(',')[0].split(';')[0];
    if (userLocale) {
      setCookie('locale', userLocale, {req, res, maxAge: 60 * 60 * 24 * 30});
    }
  }

  return res;
}