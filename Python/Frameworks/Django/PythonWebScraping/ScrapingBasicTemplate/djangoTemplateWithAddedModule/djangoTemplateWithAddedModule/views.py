# Using this tutorial: 
# https://realpython.com/python-web-scraping-practical-introduction/

from django.http import HttpResponse
from django.shortcuts import render
from utils.scraper import *
from utils.parse_scraped import *


def home(request):
    #return HttpResponse("Hello world!")
    return render(request, 'home.html')

def about(request):
    url = 'http://www.fabpedigree.com/james/mathmen.htm'
    raw_html = simple_get(url)

    url_parsed = parse_html(raw_html)

    return render(
        request, 'about.html',
        {'lenUrl': len(raw_html), 'rawHtml': raw_html, 'urlParsed': url_parsed}
    )








