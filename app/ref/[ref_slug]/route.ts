import {getCookie, setCookie} from 'cookies-next';
import {NextResponse} from 'next/server';

import type {NextRequest} from 'next/server';

const re = /^[a-zA-Z0-9]{1,20}$/;

export async function GET(
  req: NextRequest,
  {params}: { params: { ref_slug: string } }
) {
  const res = NextResponse.redirect(new URL(process.env.NEXTAUTH_URL!, req.url));
  const ref_slug = getCookie('ref_slug', {req, res});

  if (re.test(params.ref_slug) && !ref_slug) {
    setCookie('ref_slug', params.ref_slug, {req, res});
  }

  return res;
}
