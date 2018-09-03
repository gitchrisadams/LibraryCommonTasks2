from bs4 import BeautifulSoup

def parse_html(raw_html):
    html = BeautifulSoup(raw_html, 'html.parser')
    html_parsed = []
    for i, li in enumerate(html.select('li')):
        html_parsed.append(i)
        html_parsed.append(li.text)
    return html_parsed