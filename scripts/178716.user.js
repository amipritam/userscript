// ==UserScript==
// @name       phaize
// @namespace  http://www.youtube.com/watch?v=Pfr309Lx8cA
// @version    9999.0.2
// @description  phaize is the God
// @include   http://orteil.dashnet.org/cookieclicker/
// @include   http://cafe-capy.net/cookieclicker/
// @copyright  2013+, pha
// ==/UserScript==

(function() {
    var fuck = setInterval(function() {
        try {
            if (Game.ready != 0) {
                // bigCookie
                l('bigCookie').style.background = 'url(http://negineesan.com/kukki/cooki_001.png)';
                l('bigCookie').style.backgroundSize = '256px 256px';
                
                // goldenCooke
                Game.goldenCookie.tempSpawn = Game.goldenCookie.spawn;
                Game.goldenCookie.changeIcon = function() {
                    var gc = l('goldenCookie');
                    if (gc && gc.style && gc.style.background) {
	                    if (Game.goldenCookie.wrath==1) {
                            l('goldenCookie').style.background = 'url(http://negineesan.com/kukki/cooki_red.png)';
                        } else {
                            l('goldenCookie').style.background = 'url(http://negineesan.com/kukki/cooki_gold.png)';
                        }
                    }
                }
                Game.goldenCookie.spawn = function() {
                    Game.goldenCookie.tempSpawn();
                    Game.goldenCookie.changeIcon();
                }
                Game.goldenCookie.changeIcon();
                
                // Store
                Game.TempRebuildStore = Game.RebuildStore;
                Game.RebuildStore=function() {
                    Game.TempRebuildStore();
                    var iconList = [
                        ['http://negineesan.com/kukki/pha01.png', 'http://negineesan.com/kukki/pha01.png', 'http://negineesan.com/kukki/pha02.png', 'http://negineesan.com/kukki/pha03.png', 'http://negineesan.com/kukki/pha04.png', 'http://negineesan.com/kukki/pha05.png', 'http://negineesan.com/kukki/pha06.png', 'http://negineesan.com/kukki/pha07.png', 'http://negineesan.com/kukki/pha08.png', 'http://negineesan.com/kukki/pha09.png', 'http://negineesan.com/kukki/pha10.png'],
                        ['http://negineesan.com/kukki/pha01.png', 'http://negineesan.com/kukki/pha01.png', 'http://negineesan.com/kukki/pha02.png', 'http://negineesan.com/kukki/pha03.png', 'http://negineesan.com/kukki/pha04.png', 'http://negineesan.com/kukki/pha05.png', 'http://negineesan.com/kukki/pha06.png', 'http://negineesan.com/kukki/pha07.png', 'http://negineesan.com/kukki/pha08.png', 'http://negineesan.com/kukki/pha09.png', 'http://negineesan.com/kukki/pha10.png'],
                        ['http://negineesan.com/kukki/pha01.png', 'http://negineesan.com/kukki/pha01.png', 'http://negineesan.com/kukki/pha02.png', 'http://negineesan.com/kukki/pha03.png', 'http://negineesan.com/kukki/pha04.png', 'http://negineesan.com/kukki/pha05.png', 'http://negineesan.com/kukki/pha06.png', 'http://negineesan.com/kukki/pha07.png', 'http://negineesan.com/kukki/pha08.png', 'http://negineesan.com/kukki/pha09.png', 'http://negineesan.com/kukki/pha10.png'],
                        ['http://negineesan.com/kukki/pha01.png', 'http://negineesan.com/kukki/pha01.png', 'http://negineesan.com/kukki/pha02.png', 'http://negineesan.com/kukki/pha03.png', 'http://negineesan.com/kukki/pha04.png', 'http://negineesan.com/kukki/pha05.png', 'http://negineesan.com/kukki/pha06.png', 'http://negineesan.com/kukki/pha07.png', 'http://negineesan.com/kukki/pha08.png', 'http://negineesan.com/kukki/pha09.png', 'http://negineesan.com/kukki/pha10.png'],
                        ['http://negineesan.com/kukki/pha01.png', 'http://negineesan.com/kukki/pha01.png', 'http://negineesan.com/kukki/pha02.png', 'http://negineesan.com/kukki/pha03.png', 'http://negineesan.com/kukki/pha04.png', 'http://negineesan.com/kukki/pha05.png', 'http://negineesan.com/kukki/pha06.png', 'http://negineesan.com/kukki/pha07.png', 'http://negineesan.com/kukki/pha08.png', 'http://negineesan.com/kukki/pha09.png', 'http://negineesan.com/kukki/pha10.png'],
                        ['http://negineesan.com/kukki/pha01.png', 'http://negineesan.com/kukki/pha01.png', 'http://negineesan.com/kukki/pha02.png', 'http://negineesan.com/kukki/pha03.png', 'http://negineesan.com/kukki/pha04.png', 'http://negineesan.com/kukki/pha05.png', 'http://negineesan.com/kukki/pha06.png', 'http://negineesan.com/kukki/pha07.png', 'http://negineesan.com/kukki/pha08.png', 'http://negineesan.com/kukki/pha09.png', 'http://negineesan.com/kukki/pha10.png'],
                        ['http://negineesan.com/kukki/pha01.png', 'http://negineesan.com/kukki/pha01.png', 'http://negineesan.com/kukki/pha02.png', 'http://negineesan.com/kukki/pha03.png', 'http://negineesan.com/kukki/pha04.png', 'http://negineesan.com/kukki/pha05.png', 'http://negineesan.com/kukki/pha06.png', 'http://negineesan.com/kukki/pha07.png', 'http://negineesan.com/kukki/pha08.png', 'http://negineesan.com/kukki/pha09.png', 'http://negineesan.com/kukki/pha10.png'],
                        ['http://negineesan.com/kukki/pha01.png', 'http://negineesan.com/kukki/pha01.png', 'http://negineesan.com/kukki/pha02.png', 'http://negineesan.com/kukki/pha03.png', 'http://negineesan.com/kukki/pha04.png', 'http://negineesan.com/kukki/pha05.png', 'http://negineesan.com/kukki/pha06.png', 'http://negineesan.com/kukki/pha07.png', 'http://negineesan.com/kukki/pha08.png', 'http://negineesan.com/kukki/pha09.png', 'http://negineesan.com/kukki/pha10.png'],
                        ['http://negineesan.com/kukki/pha01.png', 'http://negineesan.com/kukki/pha01.png', 'http://negineesan.com/kukki/pha02.png', 'http://negineesan.com/kukki/pha03.png', 'http://negineesan.com/kukki/pha04.png', 'http://negineesan.com/kukki/pha05.png', 'http://negineesan.com/kukki/pha06.png', 'http://negineesan.com/kukki/pha07.png', 'http://negineesan.com/kukki/pha08.png', 'http://negineesan.com/kukki/pha09.png', 'http://negineesan.com/kukki/pha10.png'],
                        ['http://negineesan.com/kukki/pha01.png', 'http://negineesan.com/kukki/pha01.png', 'http://negineesan.com/kukki/pha02.png', 'http://negineesan.com/kukki/pha03.png', 'http://negineesan.com/kukki/pha04.png', 'http://negineesan.com/kukki/pha05.png', 'http://negineesan.com/kukki/pha06.png', 'http://negineesan.com/kukki/pha07.png', 'http://negineesan.com/kukki/pha08.png', 'http://negineesan.com/kukki/pha09.png', 'http://negineesan.com/kukki/pha10.png']
                    ];
                    for (var i in Game.ObjectsById) {
                        var me = Game.ObjectsById[i];
                        var rank = parseInt(me.amount/10);
                        me.icon = iconList[i][rank > 10 ? 10 : rank];
                        me.displayName = "pha";
                        var node = l('product'+me.id).childNodes[0];
                        node.style.backgroundImage = 'url('+me.icon+')';
                        node.style.backgroundSize = '64px 64px';
                        if (typeof me.beforeAmount === 'undefined') {
                            me.beforeAmount = me.amount;
                        }
                        if (me.amount > me.beforeAmount && me.amount % 10 == 0) {
                            var audio = new Audio("http://negineesan.com/kukki/lp.mp3");
                            audio.setAttribute('class', 'kozo');
                            audio.setAttribute('id', Game.cookies);
                            l('game').appendChild(audio);
                            audio.addEventListener('canplaythrough', function() { audio.play(); });
                            audio.addEventListener('ended', function() { l('game').removeChild(audio); });
                        }
                        me.beforeAmount = me.amount;
                    }
                    var backgrounds = document.getElementsByClassName('background');
                    for (var bg in backgrounds) {
                        if (backgrounds[bg].id) {
                            backgrounds[bg].style.backgroundImage = 'url(http://negineesan.com/kukki/setubiBG_0'+backgrounds[bg].id.slice(-1)+'.png)';
                        }
                    }
                }
                Game.RebuildStore();
                
                // center
                Game.TempNewDrawFunction=Game.NewDrawFunction;
                Game.NewDrawFunction = function(pic,xVariance,yVariance,w,shift,heightOffset) {
                    return function() {
                        Game.ObjectsById[this.id].tempNewDrawFunction = Game.TempNewDrawFunction('shine',xVariance,yVariance,w,shift,heightOffset);
                        Game.ObjectsById[this.id].tempNewDrawFunction.this = this;
                        Game.ObjectsById[this.id].tempNewDrawFunction();
                        var rowObjects = l('rowObjects'+this.id);
                        for (var i = 0; i < rowObjects.childNodes.length; i++) {
                            var o = rowObjects.childNodes[i];
                            o.style.backgroundSize = '64px 64px';
                            o.style.backgroundImage = 'url('+pic()+')';
                        }
                    }
                }
                Game.Objects['Grandma'].drawFunction = Game.NewDrawFunction(function() {
                    var list=['http://negineesan.com/kukki/pha01.png'];
                    if (Game.Has('Farmer grandmas')) list.push('http://negineesan.com/kukki/pha03.png');
                    if (Game.Has('Worker grandmas')) list.push('http://negineesan.com/kukki/pha04.png');
                    if (Game.Has('Miner grandmas')) list.push('http://negineesan.com/kukki/pha05.png');
                    if (Game.Has('Cosmic grandmas')) list.push('http://negineesan.com/kukki/pha06.png');
                    if (Game.Has('Transmuted grandmas')) list.push('http://negineesan.com/kukki/pha07.png');
                    if (Game.Has('Altered grandmas')) list.push('http://negineesan.com/kukki/pha08.png');
                    if (Game.Has('Grandmas\' grandmas')) list.push('http://negineesan.com/kukki/pha09.png');
                    if (Game.Has('Antigrandmas')) list.push('http://negineesan.com/kukki/pha10.png');
                    return choose(list);
                } ,8,8,32,3,16);
                Game.Objects['Farm'].drawFunction = Game.NewDrawFunction(function() { return 'http://negineesan.com/kukki/pha01.png'; } ,16,16,64,2,32);
                Game.Objects['Factory'].drawFunction = Game.NewDrawFunction(function() { return 'http://negineesan.com/kukki/pha01.png'; } ,32,2,64,1,-22);
                Game.Objects['Mine'].drawFunction = Game.NewDrawFunction(function() { return 'http://negineesan.com/kukki/pha01.png'; } ,16,16,64,2,24);
                Game.Objects['Shipment'].drawFunction = Game.NewDrawFunction(function() { return 'http://negineesan.com/kukki/pha01.png'; } ,16,16,64);
                Game.Objects['Alchemy lab'].drawFunction = Game.NewDrawFunction(function() { return 'http://negineesan.com/kukki/pha01.png'; } ,16,16,64,2,16);
                Game.Objects['Portal'].drawFunction = Game.NewDrawFunction(function() { return 'http://negineesan.com/kukki/pha01.png'; } ,32,32,64,2);
                Game.Objects['Time machine'].drawFunction = Game.NewDrawFunction(function(){ return 'http://negineesan.com/kukki/pha01.png'; } ,32,32,64,1);
                Game.Objects['Antimatter condenser'].drawFunction = Game.NewDrawFunction(function() { return 'http://negineesan.com/kukki/pha01.png'; } ,0,64,64,1);
                for (var i in Game.ObjectsById) {
                    var me = Game.ObjectsById[i]; me.drawFunction();
                }
                
                // failing phas
                Game.cookieParticleAdd = function() {
                    /*
                    if (Game.prefs.particles) {
                        var highest = 0;
                        var highestI = 0;
                        for (var i in Game.cookieParticles) {
                            if (Game.cookieParticles[i].life == -1) {
                                highestI = i;
                                break;
                            }
                            if (Game.cookieParticles[i].life > highest) {
                                highest = Game.cookieParticles[i].life;
                                highestI = i;
                            }
                        }
                        var i = highestI;
                        var rect = l('cookieShower').getBoundingClientRect();
                        var x = Math.floor(Math.random()*(rect.right-rect.left));
                        var y = -32;
                        var me = Game.cookieParticles[i];
                        if (!me.l) me.l = l('cookieParticle'+i);
                        me.life = 0;
                        me.x = x;
                        me.y = y;
                        var r=Math.floor(Math.random()*360);
                        me.l.style.background = 'url(http://negineesan.com/kukki/pha02.png)';
                        me.l.style.backgroundSize = '64px 64px';
                        me.l.style.transform = 'rotate('+r+'deg)';
                        me.l.style.backgroundPosition = (Math.floor(Math.random()*8)*64)+'px 0px';
                        me.l.style.transform = 'rotate('+r+'deg)';
                        me.l.style.mozTransform = 'rotate('+r+'deg)';
                        me.l.style.webkitTransform = 'rotate('+r+'deg)';
                        me.l.style.msTransform = 'rotate('+r+'deg)';
                        me.l.style.oTransform = 'rotate('+r+'deg)';
                    }
                    */
                }
                
                // jakuchoize
                Game.getNewTicker = function() {
                    var list = [
                        'ドゥッ，ドゥッ，ドゥッ，ドゥルルルルルラララ・・ラ・・ラ・・・・・ラ<br/>ズチャーチャズチャラチャジャーーン・ホヮホヮホヮホワワワジャラチャ－－ン，ホヮホヮホヮホワ・ジャッドゥ！',
                        '相手の立場に立ってモノを考えれば、人間は他者のためにどんなことでもできるのです。',
                        'どんな悲しみや苦しみも必ず歳月が癒してくれます。そのことを京都では『日にち薬（ひにちぐすり）』と呼びます。時間こそが心の傷の妙薬なのです。',
                        '人は、不幸のときは一を十にも思い、幸福のときは当たり前のようにそれに馴れて、十を一のように思います。', 'あなたは苦しんだ分だけ、愛の深い人に育っているのですよ。',
                        'お返しを期待しない、感謝の言葉も求めない。それが本当の奉仕です。',
                        '大きな椿の花を咲かせるには、どうすると思いますか？まだ、つぼみが小さいうちに、ひとつだけを残してみな摘んでしまうのです。そうすれば、大輪の花を咲かせることができるのです。',
                        'お子さんに「何のために生きるの？」と聞かれたら、「誰かを幸せにするために生きるのよ」と答えてあげて下さい。',
                        '人とつきあうのに秘訣があるとすれば、それはまずこちらが相手を好きになってしまうことではないでしょうか。',
                        '一日に一回は鏡を見る方がいいです。できればにっこりと笑ってみて下さい。心にわだかまりがない時は、表情がいきいきしているはずですよ。',
                        '私は「元気という病気です」とよく言います。ある講演会の司会者が、「瀬戸内さんの元気という病気が、ますます重症になるようにお祈りします」と挨拶して、会場が爆笑の渦となりました。',
                        '相手の立場を想像する力、相手の欲することを与えることが「愛」です。相手が何を欲しているかを考えて下さい。相手の身になってしたいことをしてあげればいいのです。',
                        '与えられた限りある時間に、思い残すことなく人をたっぷり愛しておかなければとしみじみ思います。',
                        '人間は善悪両方を持っています。それを、自分の勉強や修行によって、善悪の判断をし、悪の誘惑に負けずに善行（ぜんこう）を積んでいくことが人間の道なのです。',
                        'あなたはたった一つの尊い命をもってこの世に生まれた、大切な存在です。',
                        '相手が今何を求めているか、何に苦しんでいるかを想像することが思いやりです。その思いやりが愛なのです。',
                        'いろんな経験をしてきたからこそ、あなたの今があるのです。すべてに感謝しましょう。',
                        '「念ずれば花開く」という言葉があります。私は何かをするとき、必ずこれは成功するという、いいイメージを思い描くようにしています。',
                        'あらゆる戦争は悪だと思っています。戦争にいい戦争なんてありません。私たち老人は、そのことを語り継がなければなりません。',
                        '別れの辛（つら）さに馴（な）れることは決してありません。幾度繰り返しても、別れは辛（つら）く苦しいものです。それでも、私たちは死ぬまで人を愛さずにはいられません。それが人間なのです。',
                        '人生にはいろいろなことがあります。しかし、悲しいことは忘れ、辛（つら）いことはじっと耐え忍んでいきましょう。それがこの四苦八苦（しくはっく）の世を生きる唯一の方法ではないかと思います。',
                        'もし、人より素晴らしい世界を見よう、そこにある宝にめぐり逢おうとするなら、どうしたって危険な道、恐い道を歩かねばなりません。そういう道を求めて歩くのが、才能に賭（か）ける人の心構えなのです。',
                        '人間は生まれた時から一人で生まれ、死ぬ時も一人で死んでゆきます。孤独は人間の本性なのです。だからこそ、人は他の人を求め、愛し、肌であたため合いたいのです。',
                        '人は所詮（しょせん）一人で生まれ、一人で死んでいく孤独な存在です。だからこそ、自分がまず自分をいたわり、愛し、かわいがってやらなければ、自分自身が反抗します。',
                        '大抵の人間は自分本位です。特に女性は、自分中心に地球が廻っていると思っていて、思い通りにならない現実に腹を立てて愚痴ばかり言うのです。思い当たることはありませんか。',
                        '体や首を持って逃げるわけにはいかないので。一番思い出の多いところを切り取っていったのです',
                        '「走るんだ。いまから、捕まるまでずっと走るんだ」',
                        '犯罪に理由は必要なのか？',
                        '「金を出せ、出さねば火を付ける」',
                        '「殺人は息をするのと同じことだった」',
                        '「これまで全部うまくいっていたのに。これで終わりだ」',
                        '「人は死ぬ、絶対死ぬ、必ず死ぬ。この世の命は幻に過ぎない」',
                        '「須藤君の分まで長生きしたいです」',
                        '「詐欺というのはしんどいね。やっぱり殺すのが一番面倒がなくていいよ」',
                        'うまかったよ',
                        '殺人はそれほど悪いことじゃないわ。人は誰でもいつかは死ぬんだもの',
                        'お前もやってみろよ。冷んやりして気持ちいいぞ',
                        '「殺しのオリンピックがあれば、俺は金メダル間違いなしだ。殺しのオリンピックは本物のオリンピックよりずっと面白い」',
                        '「そのうち、俺は殺しの世界で一番の男になりたいと思うようになった。人間なんでも一番にならなきゃ駄目だ。殺しにかけては俺がいまナンバーワン」',
                        '「死体がなければただの行方不明だ。証拠があるなら出してみろ。俺に勝てる奴はどこにもいない」',
                        '「最初は俺も怖かったが、要は慣れ。何でもそうだが、一番大事なのは経験を積むこと」',
                        '「臭いの元は肉だ。そこで透明にする前に骨と肉をバラバラに切り離すことを思いついた」',
                        '「骨を燃やすのにもコツがいる」',
                        '愛を体験する前に、すべての怖れを取り除く必要はありません。今あなたの中で、愛を感じるのだという意志があれば、すべての怖れを変革することができます。',
                        '自分がやっていることに対する疑惑や、このことはいついったらいいかとか、そういうことに対して疑惑や迷いを抱いている場合、あなたは目覚めていないのです。無意識的な存在なのです。夢の中で歩いているのです。',
                        '拒否しているものを受け入れてください。そうすれば恐れはなくなります。受け入れたとたんに、それは消滅します。',
                        '自分でやりたいことをやれば、そしてそこからお金を得ようとすれば、おのずから入ってきます。必ずまわりが自分をサポートしてくれて、自分に必要な豊かさが入ってくるのです。',
                        'もしあなたが、「私は非常に楽に、自然になんでも手に入れていいんだ」「自分は喜びを感じていていいんだ」と思って生きているのなら、宇宙はそういうものを与えてくれます。',
                        '他の人を変えようと思っても、他の人は変えられないということです。そして自分のまわりの世界を変えるための一番簡単な方法は、自分を変えることです。',
                        '地球ではこういう格言があります。「見ることは信じること」。しかし実は「信じることは見ること」であり、逆なのです。',
                        '否定的なことを信じていれば、否定的な結果を得ます。肯定的なことを信じていれば、肯定的な結果を得ます。宇宙はみなさんがどちらを信じていてもあまり気にしていません。',
                        '自分でこうだと信じているもの、そういった観念が自分のまわりの世界を実際に創り上げています。なにが起きるかということを感じてください。自分が感じれば、そしてそれを信じればそれが起きます。',
                        'どんなことでも、ポジティブな意味づけをすれば、そこからポジティブな影響を受け取ることができます。',
                        '本当の自分とは自分が一番ワクワクすることを毎瞬毎瞬行動する自分です。',
                        '恐れを信じる人は、自分の人生も恐れに満ちたものになります。愛と光だけを信じる人は、人生の中で愛と光しか体験しません。',
                        '自分が体験している真実というものすべては｢自分が創り出している」ということに気がつけば、もうカルマ的な結びつきという考えを信じる必要がないわけです。',
                        'あなたが本当に決心したこと、心の底から決めたことは、必ず実現します',
                        'みなさんが体験する、あらゆる領域のあらゆる問題の根本は、怖れなのです。怖れと、怖れによって体験する分離感から来ています',
                        '本当の自分とつながって、情熱を行動に移していれば、その結果としてパートナーとは自然に出会えます。',
                        'すべてのものが、ただ｢愛｣から創られています。',
                        '新しいものが見えてくる前に、古いものを手放す必要があります。',
                        '人間が世界を変えるのではありません。自分自身を変えることによって、すでに存在している、自分が好む波動の世界にシフトしていくのです',
                        '意志こそが、唯一、変化をもたらす',
                        '幸せに感じられることをしていて、自分の情熱をさらに拡大していけるような現実があれば、その人は成功しています',
                        '自分が欲しいものを、苦労して、一生懸命努力して手に入れる必要はありません。それがわかれば、イライラすることも、恐れをいだくこともありません。疲れることもありません。',
                        'ワクワクする気持ちとは、「自分の選んだ道をちゃんと進んでいるかどうか」。それを教えてくれる肉体を通して翻訳されて伝わる言葉、メッセージです。',
                        '他人も自分も傷つけることなく、必要なものは全部創造できます。 自分の欲しいものは全部創ることができます。それにより、ネガティブなもの、カルマ的なものも切れてしまいます',
                        '否定的な行動をする個人というのは、他人を傷つけることなく自分を傷つけることなく、自分が欲しいもの、必要としているものをすべて自分が創り出せる、ということを知らない人達です。',
                        'ワクワクする気持ち、情熱の波動、平和で穏やかな感覚こそ、本来のあなた自身の波動であり、「魂の青写真」の波動。そして、「大いなるすべて」と調和のとれているあなた固有の波動です。',
                        '平和、喜び、バランス、ハーモニー、そして情熱の波動こそが「大いなるすべて」なのです。そして、この「大いなるすべて」がもつ特有の波動、これこそが「無条件の愛」と呼ばれているものです。',
                        '現在に生きることです。これは大切なことです。過去や未来に生きようとすると、今必要な情報を見つけようと思っても、今現在、ここにいないということになりますので、手に入りません。',
                        '恐れを信じる人は、自分の人生も恐れに満ちたものになります。 愛と光だけを信じる人は、人生の中で愛と光しか体験しません。',
                        'ですから、皆さんの「自分でしたいことをするには、たくさんの努力とスタミナが必要だ」という観念を、丸めて窓から捨ててください。',
                        '周りの現実に起きていることはすべて、皆さんの中で起きていることです。ですから、まわりの現実が自分の望むものでなければ、そこから学ぶべきものを学び、いかに自分の望むものに変えていけるかを学んでください。',
                        'もし、自分が創り出している世界が望んでいるものでないとしたら、そ れは皆さんが無意識のうちに「その選択をしていた」ということです。自分で実現したい観念を実現する代わりに、自分が実現化したくない観念を無意識のうちに実現していたということです。',
                        '創り出した世界が、自分で望んでいるものでないとしても、それ自分の責任だからといって、自分に対する非難や後悔、そして罪悪感の理由として使う必要はないことを知っていてください。',
                        '「毎瞬毎瞬、自分はまったく違う人間なのだ」ということがわかり始め ると、毎瞬毎瞬、自分の望むものをなんでも、より自由に創造することができるようになります。毎瞬毎瞬を、常にゼロから出発することができます。すると、自分でかたくなに信じようとしない限り>、過去に起きたことによって、いまの自分を左右される必要がなくなります。',
                        '基本的には「すべきだ」とか「すべきでない」というものは本当は存在しません。',
                        '心配や疑いは、もう古い観念で、自分のまわりに創りたい現実とは、 まったく関係ありません。自分の現実の中に欲しくないものは、わざわざ信じないでください。喜びより、心配の方が力をもっていると思って行動を起こさないでください。',
                        '忍耐強くなければと思うと、逆に耐えられなくなります。いまに生きて、起きていることのすべてを楽しんでいるときは、なにかもっといいのが来てくれるのを待っているわけではありませんね。そして、そういうときには忍耐も必要ありません。',
                        '「自分の望む現実を創造する」というとき、問題になるのは、別に、意 識のほうが物質より優れている、重要であるということではありません。ここで必要なのは、意識と物質は、本当はひとつのものだ、ということを理解しようとする「意志」なのです。',
                        '「創造」の中の、たったひとつの定数は「変化」です。それを怖がらないでください。変化とは「非常に安定した状態」なのです。',
                        '時間というものも、みなさんの幻想です。みなさんが創り出したもの、単なる道具です。皆さんなくして、時間は存在しえないのです。',
                        '「思い出す」という概念は、別な言い方をすれば「統合するプロセス」 であるといっても良いでしょう。',
                        'すべての成長や変化は「自分は本当は誰であるかを、さらに思い出して いくプロセス」だといえます。',
                        '予言は絶対に起きるということではありません。むしろ、その代わり に、もしあなたがいまの自分のエネルギーがイヤだったら、いまこそそれを自分の望む方向に変えるいいチャンスだと教えてくれます。',
                        'タイミングがすべてです。同じようなものがふたつきてもひとつを選んでみてください。そうすれば選んだことによって、実際にそれが自分のやりたかったことかどうかわかります。過ちを犯すことを怖れないでください。失敗ということは本当は存在しません。',
                        'チャンスがくるというのも、自分でできるかどうかの基準になります。',
                        'やりたいことがたくさんあるなら、全部やっても無論いいのです。でもある瞬間についていえば、他のものより、なにかひとつやりたいことがあるはずです。ですから、毎瞬々々、自分が一番、その瞬間にやりたいこと、そして自分ができることの範囲に入っているものをやってください。',
                        'エゴの自然な仕事のひとつは、自分でこうなりたいと思っている皆さん の性格を保ち続けることです',
                        'ここで言いたいのは、皆さんがすべてを想像する必要はないということ です。この人生を１００％生きる、そのことだけを考えられれば充分です。',
                        'いまここにいる自分を精一杯生きることが、自分の生きたいところにい く一番の近道です。これが存在の逆説的なところです。100％、いま、ここにいることを自分で望んだとき、自分の生きたいところにすべて行けます。いま自分自身がいるところに　100％いるとき>、その自分の中にすべてが含まれているのがわかります。それによって、人生の流れに乗ることができ、努力なく、楽しく生きていくことができます。そしてまわりの人もそれによって影響されます。',
                        '皆さんは永遠なる魂です。何をそんなに急いでいるのでしょう？毎瞬毎瞬を味わって生きてください。',
                        '夢もこの物質世界と同じようなものです｡両方とも、あるひとつのもの に対して、違う見方をしているだけです｡すべてはあなたの意識の中にあります｡皆さんの意識には「外」というものは、ありません｡皆さんが考えられるもの、知覚できるものは、すべて皆さんの意>識の中にあります｡',
                        '未来は決まってはいません｡無限の可能性があります｡未来はすべて存在していますが、でも同時に、どれを実現するかは私たちが選択します｡無限の並行した現実が存在しています｡自分がなりたいものを選んでください｡あなたには選択があります｡すべての可能性がそこにあるとしても、あなたはその中から自分のなりたい現実を選ぶことができます｡この物理次元からは、すべてがすでに決まっているように見えたりしますが、でもそうではありません｡この物理次元で使っている、物理的な言葉の中で、皆さんは自分を制限しているだけなのです｡未来は決定されていません｡',
                        'あなたは自分の人生で「あなた」として何をやりたいですか？あなたがどんな人に執着をもっているかはすべて横に置いておいて、あなた自身はどういうふうにしたいのですか？他人も、家族も、男も、女も、人間関係はすべて横に置いておいて、あなた自身どういうふうに生きていきたいですか？そしてあなたは自分でなりたいと思っている個人として、いま生きていますか？',
                        '私をあなたより高い所に置くことによって、自分に不安をもたせまし た｡私をあなたと対等に扱ってください。そうすればあがらないのではないですか｡すべてのものを対等にみてください｡',
                        '試さないで、ただやってください。',
                        '感謝は、無限のサポートを自分で認識したときに感じます。自分が無限の存在とつながっていることを感じ､人生に格別な努力は必要ないのだと認識したとき､感謝がでてきます。感謝とは､この創造の中に自分がちょうどうまくはまっているのだ､ということを認識して喜ぶことです。自分の自然の状態を認識することです。',
                        '自分が強くなれば誰にも頼らなくて済むといいますが､ここで言いたいのは「誰にも寄りかかる必要はない」ということです。寄りかからずに､サポートしてあげてください。相手をサポートすることによって､自分も常にサポートされることになります。「相互依存>」とは､お互いにサポートしあう､ということを否定的な方から見たやり方です。その相手がいなければ自分は生きていけない､というように､必要性を相手に要求する部分､それが否定的な部分です。不思議なことに、自分が本当の意味で自立したとき､ふたりは永遠にサポートしあうことになります>。',
                        '自分の持っている波動が､あなたの体験することを決めます。不安や疑いをもっていれば､その波動は怖れを呼びます。愛や奉仕や喜びを持っていると､変革のときにも､その人を肯定的な方に運んでくれます。',
                        '性格とは､毎瞬毎瞬､あなたがその状況からなにを一番学ぼうとしているか､という「姿勢」にすぎないのです。ですから､自分の中に持っている考え､「観念」を変えると､自分という人間がまったく変わります。',
                        'リラックスして､自分が体験していることを肯定的にとらえ､呼吸をしてください。',
                        'ぜひ覚えておいてほしいのは､宇宙はあなたが対処できないものを与えることはないということです。',
                        '覚えておいてください。「皆さんは常になにかを信頼している」ということを。過去には、疑いを「信頼の欠如」としてみていたかもしれません。しかし、私たちが選択する新しい定義づけでは、疑いとは「信頼を否定的な方向に持ったもの」なのです。その無限の信頼を、肯定的な方に使うかどうかは、あなたの選択です。皆さんは、その権利を持っています。宇宙は皆さんに対して、どんなことも否定しません。あなたが選択した一番強い波動、周波数を、宇宙は常にサポートします。',
                        '意識の進化とは、実際には、いまここを100％生きるということなのです。あなたの持っているすべての情熱と、すべての願望を、しっかりと地に足をつけて、確信をもって、そしてあなたの愛のすべてをもって、自分の信頼のすべてをもって、肯定的な方に向けることです>。',
                        '自分で創りあげたその一瞬一瞬を、充分にエンジョイしてください。自分の存在を、あわてたり否定したりする必要はまったくありません。意識の進化の中で、こうなりたいというところに急いで行く必要はないのです。自分の現実を一番早く変えるためには、いまあることを、いま学ぶのが一番早いのです。',
                        '人生というものは楽しむためにあります。自分を潤すためにあります。',
                        '皆さんに思い出してほしいのは、いま皆さんが夢を見ている、ということです。目を覚まして、自分の夢を生きてください。どちらにしろ皆さんの選択です。皆さんの見たい夢を見てください。',
                        '自分のイマジネーション、想像する力を、道具として使ってください。自分がこんな人間になりたいという像をイメージしてください。こうなりたいという自分をイメージして、その人だったらこうする。という行動を、自分でしてみてください。そしてそんな自分になったら本当にワクワクすると思ったら、そのワクワクを感じてください。あなたは、それになれます。',
                        '「こんな現実を自分に引き寄せるためには、どんな観念を持っていなければならないのだろう？」と自分に聞いてください。そしてその定義づけ、観念を見つけたとき､好きでなければ、再定義してください。',
                        '「意識」は、皆さんが持っているものではないのです。皆さん自身が意識そのものなのです。',
                        '必要なことは、皆さんが自分の感情に触れて、つまり無限のものとつながっている部分に触れて、それを否定的ではなく肯定的に感じる、ということです。無意識のうちに、ただ反応として生きるのではなく、意識的に行動を起こしてください。',
                        'ここで必要な大切な二つの言葉は「願望」と「行動」です。望んで行動に移す、ということです。',
                        '創造されたすべての存在には、基本となるものは二つしかありません。これはみんなに共通なのですが、まずそのひとつは、「いま皆さんは存在している」ということです。そして基本の二つ目は、「自分が与えたものは、自分に返ってくる」ということです。これを&quot;カルマ&quot;と呼んでいる人もたくさんいますが、カルマは皆さんを判断する&quot;業&quot;ではないのです。罰ではありません。エネルギーのバランスをとる、ということなのです。',
                        '自分がこのまま生き残っていくために、なにかをしなければ自分の生き残る存在価値はない、と考えています。私のことを信じてください。皆さんが存在する価値がなければ、最初から存在していません。なぜなら、無限の創造者は、意味のないものは創らないからです。',
                        'この世界で一番大きな怖れは「自分の存在は本当は無価値である」という無価値観です。自己否定が、この文明の中で一番大きく見えます。',
                        'たくさんの個人が、より高い意識を探求していくときに、この肉体レベルはたいしたものではないのだ、と思う過ちをよく犯します。文明全体が進化をしていくと、皆さんもだんだん進化して、肉体がいらなくなる時がきますが、だからといって、いまこの肉体から逃げる必要はありません。ものを否定したり、捨てたりすることで、進化できるわけではないのです。それを包括する、含有する、統合することによって、進化しています。分離が少なくなることによって、より統合されてきます。',
                        '観念は進化によって変わっていくのです。',
                        '小さい頃に持っている皆さんの先入観念は自分のものではなく、親のものです。大きくなって自分自身の人生を歩み始めようとして、責任をとり始めようとすると、いままでの先入観念の中で自分に合わないものが出てきます。',
                        '自分の感情、観念、そして思考パターンを変えたとき､その瞬間から自分自身が体験する「現実」も変わります。',
                        '本来、意識というものは、前世も含めてたくさんの人生、たくさんの人格を持っています。ある見方をすれば、人生がひとつ終わっても次があり、また次があります。また別な見方をすれば、時間というのも幻想ですから、すべての人生は「今」起きている、ともいえます。',
                        'すべての個人は、意識が人工的に創りあげているものですが、だからといって自然ではない、ということではありません。しかし、本来のあなたは、肉体的な存在ではないのです。',
                        '皆さんはいま夢を見ているだけです。なぜなら、肉体の次元は夢なのですから',
                        '皆さんが、こういうところを正したい、是正したいという場合、それは一番最初にギュッと引っ張って、非常に緊張させて、バランスをくずしてしまった部分なのです。',
                        '変化は、皆さんがリラックスしたときに一番早く起きます。',
                        '人になにかを与えたいとき､一番うまいやり方は、他の人があなたに与えたいものを、与えさせてあげることです。',
                        '自分が肯定的な方に歩いて行きたいと思ったら、まず自分に肯定的な行動をさせてあげてください。そうすると、肯定的な結果が戻ってきます。絶対に100％保証できます。例外は、ありません。どんな小さな例外も、ありません。',
                        '「未知なものは怖い」と、誰が決めたのでしょう？それは否定的な定義づけです。定義づけを変えれば、自分がやるべきことを、やりたいときに、自分で知ることができます。',
                        '自分が魅かれるエネルギーを信頼するとき「ワクワク」になります。自分が魅かれるエネルギーを疑うとき、それは「怖れ」になります。',
                        'もし人に強いる必要があるとしたら、あなたは自分の中にある力を本当に信頼していない、ということになります。自分が人に教えようとしているものを、信頼していないのです。',
                        'でも皆さんもよく知っているように、こういう（ハンディキャップなどを持って生まれてきた）人達の中には皆さんの文明の平均的な考え方をはるかに超えている人がたくさんいます。ですからそういう人に同情したり、憐れみを持つことはその人達を助けていることにはなりません。そうすると、更に否定的な部分を強調して相手に押しつけてしまいます。その代わりに、こういった見方をしたらどうでしょう。「こんなに制限のキツイ人生を自分で選択してきたなんて、あなたはなんて強い人なんでしょう」と',
                        '一番簡単なのは、本当の自分になってしまうことです。逆に一番むずかしいのは、自分以外の自分になろうとすることです。',
                        'すべての痛み、苦しみ、病気は、自然な本来の自分になることに抵抗することから生まれてきます。自分自身が非常に疲れるのは、本来の自然な自分自身に一所懸命抵抗しているからです。',
                        'この世界では、小さい頃から何々しなればならない、「ねばならない」ということをたくさん与えられてきました。自然に自分に流れ込んできたアイディアに耳を傾けないで、社会の要請にちょうど合うようなものを探します。社会の期待に添うものを見つけても、それは必ずしも自然なあなたと一致するとは限りません。なぜなら根本的に、あなた以外の人から与えられた答えだからです。合うはずがありません。しかし、だからといって人からのアドバイスを無視していいということではありません。他の人からもらったアドバイスを、自分で、自分のために選ぶことができ>るということです。',
                        '自分がワクワクすることを始めるとき､二つのことが起こります。第一に、非常に素晴らしい偶然が次々と起こります。常に魔法のように、あるべき所に、あるべき時に、あるべきことが起こります。そして第二に、自分のやることが、努力なしに進むようにな>ります。「自分自身が誰か」を示すことを自然にやっているからです。皆さんが、自然な、本来の自分であるとき､宇宙は非常に楽に皆さんをサポートすることができます。',
                        '皆さんの「自分は誰か」という存在の表現、波動が「ワクワク」です。',
                        '混乱や困難を創り出すのは「期待」です。こうあるべきだという期待の部分です。',
                        '判断をすると、その判断をした人自身が、同じレベルまで波動が落ちててきてしまいます。',
                        'いま現在の自分を楽しめば楽しむほど、本当になりたい自分にすぐなれます。',
                        '自分でこれはあまり良くないと思っているライフスタイルがあったら、こう聞いてみてください。「誰かに教えられたからといって、自動的に、否定的なものだと信じ込んではいないだろうか？」と。もしそれがどうしても否定的なものだと思えたら、「こんな否定的なものを自分に引き寄せるためには、どんな観念を持っていなければならないのだろう？」と自分に聞いてみてください。それがあなたが学ぶべきレッスンなのです。',
                        'すべての状況は、いい意味にも悪い意味にも、どちらにも捉えることができるのです。自分がその中から、どんな肯定的なものを引き出せるか、という姿勢を持てば、そこから肯定的な結果を生み出すことができます。もし他人が否定的な意図をもってあなたに何かをしても、自分がそこから肯定的にものしか見ないと決めていれば、肯定的な結果しか得られません。自分の波動でない体験をすることはできないのです。',
                        'すべてのものを肯定的に学ぶことができます。すべてのものは本質的には中立だ、ということを理解してください。たくさんのものを否定的に感じるのは、今までこういうことが起きたらこれは悪いことだ、否定的なものなのだ、と教えられてきたからです。',
                        'いまを生きてください。あなたが存在するのは、いま以外にありません。永遠の生命を持っていても、これからどんな人生を生き、生まれ変わっても、結局、いまを生き続けるだけです。ですから自分が生きたい「いま」を創ってください。',
                        'もし違う人間になりたければ、その違う人間になったかのように行動してください。自分が新しい人間になったとしたら、古い自分が与えるような意味を与えるようなことはしないでしょう。どんなことが起きても、どんな状況でも、自分がその中に見たいものを見てください。これは哲学ではありません。実際に使えるのです。覚えておいてください。自分が与えるものが、受け取るものです。',
                        '今やってください。なぜなら、皆さんは今以外には存在し得ないからです。ワクワクすることをいつやろうかと考えているときには、いまワクワクする人生を歩んではいけないのだといっていることになります。いま自分が考えていることよりも、もっとワクワクすることが来るのではないかと考えるのは、自分自身の人生を創造できないと考えているときです。あなたに起きていることは、必ず理由があります。ですから、起きてくることを、自然にあなたに起こさせてあげてください。いま起きていること全部を好きになれ、ということではありません。ただそこか>ら学ぶものがあるということです。そしてそれを学ぶことによって、自分で自分が思っているものを創り出すことができるようになります。',
                        'あなたが充実していないとき､あなたがハッピーでないとき､他の人にとっても良い影響を与えられません。自分がワクワクすることによって、自分自身にもいいことができますし、まわりにいる人たちにも本当にいいことができます。',
                        '私が力強く見えるのは、自分自身を完璧に信頼しているからです。あなたはただ「確信」というものを感じているだけです。',
                        '自然の怒りというものは10秒～15秒しかもちません。',
                        '本当はひとつの感情しかありません。それは愛です。その他の感情は「愛」の変化したものです。それ以外の肉体からでてくる表現ですね。その表現は個人個人の観念からでてきます。自分の中心が中心にあるとき、そういう感情というものの必要性が減ります。',
                        'すべての状況は、すべて意味があるということを理解して、意味のある人生を送ってください。',
                        'ワクワクするというのと、恐れというのは、全く反対のものです。片方は肯定的、片方は否定的に見たものです。',
                        '何も恐れるものがないと分かった時､戦争がなくなります。そして一緒に働き始めることができます。肯定的なものの考え方、この地球はもっと良くなるんだ、他の人からも学べることがあるんだ。考え方の違いだけなんだとということが分かった時､もっとこの変化が早まります。悲観的に考えることによって、否定的なものに、さらにエネルギーを与えてしまって、これを遅らせます。すべての一人一人の人間が地球上の変化に寄与しています。あなた自身がすでに心に平和を持っているとして、行動を始めた時､まわりの人達もそれに感化されます。そしてそういう世界が来るのが早くなります。ですから、否定的なものに目を向ける代わりに、まわりにある肯定的な面に目を向けてください。あなたのまわりにあるものの中にすべて光を見出してください。',
                        'あなたは存在するというだけで、すべてのものに値しています。',
                        'あなたに会う人はすべてソウルメイトです。',
                        'あなたが、今生きている生活様式を選んで来たのには、それなりの理由があります。あなたは自分自身に、ある程度の制限をつけていますけれども、それは必ずしも否定的なことではなくて、人生の中で自分で自然に発見することができるようにするためです。あなたが自然に発見した方があなたが学ぶためにいい場合があるからです。',
                        'すべての感情というものは、もうすでにこれが真実であるとあなたが信じている先入観念、固定観念に対する反応なのです。',
                        'すべての感情というのは、固定観念に対する反応です。すべての感情が単なる反応です。',
                        'あなた方がエキサイトメントと呼んでいるものは、あなたが選んだ道を実行するときの、バイブレーションのエネルギーのことです。ですから、あなたが一番やりたいことをやっている時に、あなたは自分の目的の部分を行っています。',
                        'あなたどういう人になりたいのですか？あなたのなりたい人間になってください。自分のなりたくない人間を自分の目の前に見て、その人を裁くことによってあなたはただ単に、なりたくないもののイメージをあなたの中で強化しているだけです。そして自分の中の否定的なエネルギーを強めているだけです。ですから、あなたはただ、自分がどういう人間になりたいのかを決めて、その人間になればいいのです。',
                        '自分が感じるままに動いてください。自分の体が必要なものを否定して、いわゆる精神性を高める必要もありません。自分が必要だと感じるままに動いてください。',
                        'ある状況から学ぶ用意があれば、たとえ自分に対して正直でないやり方で行動していたとしても、そこから学ぼうという意志があれば、肯定的に方向に変えることができます。自分に対して正直な方向に変えることができます。そしてその概念、そのエネルギーを肯定的な方向に持っていって、罪悪感なしに悔やむことなしに先に進むことができます。',
                        '罪悪感という概念は、自分に正直でないときに起こってきます。つまり自分にとって真実でない行動をする時に感じるわけです。',
                        '無条件の愛というのは、絶対の価値を理解するということであり、内面的にも外面的にもすべてのレベルにおいて自分が価値のある人間だということを認めることなのです。',
                        '地獄も天国も心の状態にすぎません。悪魔はあなた方の否定的な集合意識の表現です。地獄はすべての否定的な制限された意識が創り上げるものです。あなた方は天使なのです。天国を創ってください。',
                        '選択権はいつもあなた方の方にあるのです。',
                        'あなた方の星の中に犯罪というのがあるのは、自分の中にある力というものを自分で信じていないからです。自分の創造性というものを信じていない、知らないからです。自分自身の中に力がないと思っているので、自分のまわりをコントロールすることによって、自分が救われると思っているのです。でも本当は自分の中をコントロールすることによって、本当の幸せがくるのです。',
                        '自分を鍛錬するというのは、自分の中の何らかのものに焦点を合わせて、それに向かって努力するということですね。あなたが本当に自分がやりたいと思っていることをやっている時には、あなた自身、自ら進んで鍛錬している状態にあると思います。そのとき､あなたは自分が>やりたいことをやっているのだから、そのやりたいことが苦しいとは感じないと思います。しかし、あなたが本当にやりたいことではないことを、あなたの道に外れることをやっているとすると、そこに焦点を合わせるためには、おそらくあなたは苦労しなければならないし、大変な努力をしなければならない>わけです。そういう後者の場合には、同じ鍛錬でもやりたくないことをやっているということで、無理な力、すなわち苦しみ、もしくはつらさのようなものを味わうようになると思います。あなたが本当にやりたいことをやっていれば、その過程はちゃんと訓練、もしくは鍛錬になっていて、しかもス>ムーズにまったく苦しみを感じないでいられます。訓練、鍛錬というのは、ただ単純に焦点を合わせるということなのです。',
                        'バランスが取れて、統合ができた人は、ネガティブやポジティブや感情を激しく出さなくなるということは実際にあります。地球上の社会の中には、肯定的もしくは否定的感情を思い切り出すのが本当の素直さ、誠実さだと思っているところがありますが、本当はそういう感情というものは相手を判断したり、説得したりしようというところからきているのです。',
                        'すべての人が平等で対等で、そしてみんな無条件で愛していれば、なにも摩擦や抵抗は起きません。自分の中の女性的な部分、そして男性的な部分、この両極をひとつに統合できれば、この世の中から病気をなくすこともできます。そして痛みも、そして、すべての戦いや争いもなくすことができます。',
                        'あなたが存在しているとしたら、あきらかに創造の部分というものは、あなたが存在する価値があるということを信じています。それでなければ、あなたはここに存在していません。創造主があなたを創造したのと同じことを、どうして自分で受け入れて、それを信じてあげないんでしょう。無条件の愛を受け入れるのに、自分にそれを受け入れる価値があるということを証明する必要はなんにもありません。ただ自由に受け入れていいじゃないですか？あなたが存在していること自体がその証明です。すべてのものが、ただ「愛｣から創られています。わかりますか？',
                        '私が観察したところによると、みなさんの文明でよくやるのは、幸せになる「理由｣を探して人生を歩いて行くんですけれど、それが見つからないと、幸せになってはいけないと思っている、ということがあるようです。でも理由がなくても幸せになっていいんだとわかれば、も>うその結果だけを自分で得ることができます。理由は要らないんですね。',
                        '退屈な状況というものはまったくありません。退屈なマインドというものはあります。すべてどんな質問をしていても、どんな人が質問していても、どんな人が、何を聞いても、必ずあなたが学ぶものはあります。',
                        '宇宙はあなたに充分価値があると思っています。ただあなたが自分で受け取らないだけです。自分で自分にそれだけの価値があると思えることが、実際にそれを創り出すパスポートとなります。自分でそれが信じられたら、今度は自分でそれを信じている人間として、行動に移せばいいだけです。',
                        '人生というのはすべてあなたが一番やるべきことをやっているとき、みんな必要な場所に、そして必要な時間にタイミングよく配置されているんですね。それを受け取ることによって今度はまわりの人にもちょうどいいものを与えることが出来ます。',
                        '豊かさの定義とは「自分のやりたいことを、やる必要のあるときにやること」',
                        '一番大切なことは、今自分ができる事ですね。自分に与えられていること。それに行動を起こすことによって、現在自分にはできないところが出てきます。そしてできるようになってきます。',
                        'ポジティブエネルギー、ネガティブエネルギーという言葉を使います。正しいとか間違っているとか、邪悪であるというような言葉ではなくて。いいとか、悪いとかいうのは主観的な価値判断だからです。例えば、ポジティブなことをしている個人が悪いことをしてると考えるかもしれません。あるいはネガティブな行動をしている人が正しいことをしていると思うかもしれません。正しいとか悪いとかいうことは、ネガティブなエネルギーを使っているか、ポジティブなエネルギーを使っているかの説明にはなりません。',
                        'ネガティブな行動とは、「分離してしまう行動」です。部分部分にしてしまうような行動をいいます。ポジティブ(肯定的)な行動とは、「統合する行動」です。統合する、統一するそういうことです',
                        'カルマとはバランスのことです。たとえば、ひとつの生の中で人を殺したとします。次の生で殺される必要はありません。例えば殺人を犯そうとする人を助けて、その人が殺人をしないように防ぐこともできます。そうすると同じバランスが作られます',
                        '同じ魂の延長であるということが、ソウルメイトということです。ソウルメイトというのは、自分の人生の適切な時に出会います。自分が見る必要がある時に、見る必要のあるものを反映して見せてくれる人がソウルメイトです。そういう意味では、あなたが交流をもつすべての人がソウルメイトであるということができます。つまり、あなたの人生の中で現れる人はすべて偶然ではなく現れるのです',
                        '宇宙は無意味なことはしません。宇宙をそのまま信頼してあげて、今の生活をそのまま続けていれば、この生活に必要なものはすべて、必要なときに知ることができます。一瞬後に情報が来るときもありますが、必要な時、まさにまさにそのときに答えが来ます。情報が来る時は本当に必要なその時にやってくるのです。タイミングは完璧にできています。それを早くすることができないということではありません。でも、必要なものが、早く来るようにする方法は、今現在に生きることです。',
                        '今生きているところに生きる、ということから始めてください。現在に生きることです。これは大切なことです。過去や未来に生きようとすると、今必要な情報を見つけようと思っても、今現在、ここにいないということになりますので、手に入りません。一番必要なことは何かということを思い出すためには、１００パーセント信頼することです。今現在やっていることを信頼することです。',
                        '今まで聞いたことがないように思うかも知れません。あるいは今まで思ったこともないような考え方を使うかも知れません。しかし、あなた方が本質的に知らないことは何も話していないのです。あなたたちの文化の中では、それぞれ意識の隔離というのをお互いの間で作ってきました。日常の意識と、その下の潜在意識と言うもの。またその下には無意識というものがありますが、この３つの意識のレベルというのも幻想なのです。ひとつの意識しかありません。',
                        '恐れを信じる人は、自分の人生も恐れに満ちたものになります。愛と光だけを信じる人は、人生の中で愛と光しか体験しません。私は哲学の話をしているのではありません。創造の基本的なメカニズムの話をしているのです。自分が体験する物理的な現象というのは、あなたが何を信じるかによって決まります。というのは、物理的な現実というのは幻想だからです。あなたが信じていることが創り出した幻想なのです。幻想というのは、あなたがその中にいるうちは、それはれっきとした現実なのです。',
                        '個人というのは、一人一人が宝石の一面をなしているようなものです。宝石の全体というのはすべての創造されたもののことです。',
                        'そして、あなたの銀行口座残高も、大きくなっていくんです。わかりますか？'
                    ];
                    Game.TickerAge = Game.fps*10;
                    Game.Ticker = '<q>' + choose(list) + '</q><sig>瀬戸内寂聴</sig>';
                    Game.TickerN++;
                    l('commentsText').style.backgroundImage = 'url(http://www.city.kyoto.jp/sogo/hisyo/pic_setouchi.jpg)';
                    l('comments').style.backgroundImage = 'url(http://www.city.kyoto.jp/sogo/hisyo/pic_setouchi.jpg)';
                };
                Game.getNewTicker();
                
                // Upgrades, phas per second, milk, cookie shower and zaa
                Game.TempDraw = Game.Draw;
                Game.Draw = function(){
                    Game.TempDraw();
                    var upgrades = document.getElementsByClassName('crate');
                    for (i in upgrades) {
                        if (typeof upgrades[i].style !== 'undefined') {
                            upgrades[i].style.backgroundImage = 'url(http://negineesan.com/kukki/pha_store.png)';
                            upgrades[i].style.backgroundSize = '48px 48px';
                            upgrades[i].style.backgroundPosition = '6px 6px';
                        }
                    }
                    var unit=(Math.round(Game.cookiesd) == 1 ? ' pha' : ' phas');
                    if (Math.round(Game.cookiesd).toString().length > 11) unit = '<br>phas';
                    l('cookies').innerHTML = Beautify(Math.round(Game.cookiesd))+unit+'<div style="font-size:50%;">per second : '+Beautify(Game.cookiesPs,1)+'</div>';
                    l('milkLayer1').style.backgroundImage = 'url(https://pbs.twimg.com/profile_banners/2158391/1368278781/web)';
                    l('milkLayer2').style.backgroundImage = 'url(https://pbs.twimg.com/profile_banners/2158391/1368278781/web)';
                    /*
                    if (Game.elderWrathD<=1.5) {
                        if (Game.cookiesPs>=1000) l('cookieShower').style.backgroundImage='url(http://negineesan.com/kukki/cookieShower3.png)';
                        else if (Game.cookiesPs>=500) l('cookieShower').style.backgroundImage='url(http://negineesan.com/kukki/cookieShower2.png)';
                        else if (Game.cookiesPs>=50) l('cookieShower').style.backgroundImage='url(http://negineesan.com/kukki/cookieShower1.png)';
                        else l('cookieShower').style.backgroundImage='none';
                        l('cookieShower').style.backgroundPosition='0px '+(Math.floor(Game.T*2)%512)+'px';
                        if (Game.elderWrathD>=1 && Game.elderWrathD<1.5) l('cookieShower').style.opacity=1-((Game.elderWrathD-1)/0.5);
                    }
                    */
                    if (typeof Game.oldCookies === 'undefined') {
                        Game.oldCookies = Game.cookies;
                    }
                    if (Math.floor(Game.cookies).toString().length > Math.floor(Game.oldCookies).toString().length) {
                        var audio = new Audio("http://negineesan.com/kukki/zoomin.wav");
                        audio.setAttribute('class', 'zoomin');
                        audio.setAttribute('id', Game.cookies);
                        l('game').appendChild(audio);
                        audio.addEventListener('canplaythrough', function() { audio.play(); });
                        audio.addEventListener('ended', function() { l('game').removeChild(audio); });
                        var screen = l('game').getBoundingClientRect();
                        for (var i = 0; i < (Math.floor(Game.cookies).toString().length - 1); i++) {
                            var img = document.createElement('img');
                            img.setAttribute('src', 'http://negineesan.com/kukki/zaa_deca.gif');
                            img.setAttribute('class', 'zaa');
                            img.style.position = 'absolute';
                            img.style.zIndex = '100000000005';
                            var width = 337;
                            var height = 337;
                            var x = Math.floor(Math.random()*(screen.right-screen.left-width)+screen.left+width)-width;
                            var y = Math.floor(Math.random()*(screen.bottom-screen.top-height)+screen.top+height)-height;
                            img.style.left = x+'px';
                            img.style.top = y+'px';
                            l('game').appendChild(img);
                            setTimeout(function() {
                                var zaas = document.getElementsByClassName('zaa');
                                for (it in zaas) {
                                    if (typeof zaas[it] === 'object') {
                                        l('game').removeChild(zaas[it]);
                                    }
                                }
                            }, 10000);
                        }
                    }
                    Game.oldCookies = Game.cookies;
                }
                
                Game.TempLogic = Game.Logic;
                Game.Logic = function() {
                    Game.TempLogic();
                    if ((Game.T-1)%(Game.fps) == 0) document.title = Beautify(Game.cookies)+' '+(Game.cookies == 1 ? 'pha' : 'phas')+' - Cookie Clicker phaize';
                }
                
                // moving cursor
                Game.Objects['Cursor'].tempDrawFunction = Game.Objects['Cursor'].drawFunction;
                Game.Objects['Cursor'].drawFunction = function() {
                    Game.Objects['Cursor'].tempDrawFunction();
                    var cursors = document.getElementsByClassName('cursor');
                    for (i in cursors) {
                        if (cursors[i].style) {
                        	cursors[i].style.backgroundImage = 'url(http://negineesan.com/kukki/zaa_mini.gif)';
                        }
                    }
                }
                Game.Objects['Cursor'].drawFunction();
                
                // YouTube goukaku
                Game.goldenCookie.tempClick = Game.goldenCookie.click;
                Game.goldenCookie.click = function() {
                    Game.goldenCookie.tempClick();
                    if (Game.goldenCookie.last == 'frenzy') {
                        var width = 320;
                        var height = 172;
                        var r = Math.floor(Math.random()*360);
                        var screen = l('game').getBoundingClientRect();
                        var x = Math.floor(Math.random()*(screen.right-screen.left-width)+screen.left+width)-width;
			            var y = Math.floor(Math.random()*(screen.bottom-screen.top-height)+screen.top+height)-height;
                        var o = document.createElement('object');
                        o.setAttribute('width', width);
                        o.setAttribute('height', height);
                        o.setAttribute('type', 'application/x-shockwave-flash');
                        o.setAttribute('id', 'greatestYouTube');
                        o.setAttribute('data', 'http://www.youtube.com/v/SFBh73d5BRI?loop=1&autoplay=1&playlist=SFBh73d5BRI');
                        o.style.position = 'absolute';
                        o.style.zIndex = '100000000000';
                        o.style.transform = 'rotate('+r+'deg)';
                        o.style.mozTransform = 'rotate('+r+'deg)';
                        o.style.webkitTransform = 'rotate('+r+'deg)';
                        o.style.msTransform = 'rotate('+r+'deg)';
                        o.style.oTransform = 'rotate('+r+'deg)';
                        o.style.left = x+'px';
                        o.style.top = y+'px';
                        o.style.display='block';
                        var p;
                        p = document.createElement('param');
                        p.setAttribute('name', 'movie');
                        p.setAttribute('value', 'http://www.youtube.com/v/SFBh73d5BRI?loop=1&autoplay=1&playlist=SFBh73d5BR');
                        o.appendChild(p);
                        p = document.createElement('param');
                        p.setAttribute('name', 'allowFullScreen');
                        p.setAttribute('value', 'false');
                        o.appendChild(p);
                        p = document.createElement('param');
                        p.setAttribute('name', 'allowScriptAccess');
                        p.setAttribute('value', 'always');
                        o.appendChild(p);
                        var e = document.createElement('embed');
                        e.setAttribute('src', 'http://www.youtube.com/v/SFBh73d5BRI?loop=1&autoplay=1&playlist=SFBh73d5BR');
                        e.setAttribute('type', 'application/x-shockwave-flash');
                        e.setAttribute('allowScriptAccess', 'always');
                        e.setAttribute('allowFullScreen', 'false');
                        e.setAttribute('width', width);
                        e.setAttribute('height', height);
                        o.appendChild(e);
                        l('game').appendChild(o);
                        var rest = setInterval(function() {
                            var o = l('greatestYouTube');
                            if (Game.frenzy <= 0) {
                                l('game').removeChild(o);
                                clearInterval(rest);
                            } else {
                                var screen = l('game').getBoundingClientRect();
                                if (Math.random() < 0.1) {
                                    var width = 360;
                                    var height = 240;
                                    var i = document.createElement('img');
                                    i.setAttribute('src', 'http://31.media.tumblr.com/tumblr_lyjbagKMV81qzezhmo1_400.gif');
                                    i.style.position = 'absolute';
                                    i.style.zIndex = '100000000001';
                                    var x = Math.floor(Math.random()*(screen.right-screen.left-width)+screen.left+width)-width;
		        	                var y = Math.floor(Math.random()*(screen.bottom-screen.top-height)+screen.top+height)-height;
                                    i.style.left = x+'px';
                                    i.style.top = y+'px';
                                    l('game').appendChild(i);
                                   setTimeout(function() {
                                        l('game').removeChild(i);
                                    }, 2000);
                                }
                                if (Math.random() < 0.5) {
                                    var x = Math.floor(Math.random()*(screen.right-screen.left-width)+screen.left+width)-width;
		        	                var y = Math.floor(Math.random()*(screen.bottom-screen.top-height)+screen.top+height)-height;
                                    var r = Math.floor(Math.random()*360);
                                    o.style.transform = 'rotate('+r+'deg)';
                                    o.style.mozTransform = 'rotate('+r+'deg)';
                                    o.style.webkitTransform = 'rotate('+r+'deg)';
                                    o.style.msTransform = 'rotate('+r+'deg)';
                                    o.style.oTransform = 'rotate('+r+'deg)';
                                    o.style.left = x+'px';
                                    o.style.top = y+'px';
                                }
                            }
                        }, 1000);
                    }
                }
                l('goldenCookie').onclick=Game.goldenCookie.click;
                
                // phapocalypse
                Game.TempDrawGrandmapocalypse = Game.DrawGrandmapocalypse;
                Game.DrawGrandmapocalypse = function() {
                    Game.TempDrawGrandmapocalypse();
                    Game.defaultBg = 'http://negineesan.com/kukki/defaultBG.png';
                    if (Game.elderWrathD < 1) {
                        if (Game.bg != Game.defaultBg || Game.bgFade != Game.defaultBg) {
                            Game.bg = Game.defaultBg;
                            Game.bgFade = Game.defaultBg;
                            l('backgroundLayer1').style.background='url('+Game.bg+')';
                            l('backgroundLayer2').style.background='url('+Game.bgFade+')';
                            l('backgroundLayer1').style.backgroundSize = 'auto';
                            l('backgroundLayer2').style.backgroundSize = 'auto';
                        }
                    } else if (Game.elderWrathD >= 1 && Game.elderWrathD < 2) {
                        if (Game.bg != Game.defaultBg || Game.bgFade != 'http://negineesan.com/kukki/phapocalypse01.png') {
                            Game.bg = Game.defaultBg;
                            Game.bgFade = 'http://negineesan.com/kukki/phapocalypse01.png';
                            l('backgroundLayer1').style.background='url('+Game.bg+')';
                            l('backgroundLayer2').style.background='url('+Game.bgFade+')';
                            l('backgroundLayer1').style.backgroundSize = 'auto';
                            l('backgroundLayer2').style.backgroundSize = '512px';
                        }
                    } else if (Game.elderWrathD >= 2 && Game.elderWrathD < 3) {
                        if (Game.bg != 'http://negineesan.com/kukki/phapocalypse01.png' || Game.bgFade != 'http://negineesan.com/kukki/phapocalypse02.png') {
                            Game.bg = 'http://negineesan.com/kukki/phapocalypse01.png';
                            Game.bgFade = 'http://negineesan.com/kukki/phapocalypse02.png';
                            l('backgroundLayer1').style.background='url('+Game.bg+')';
                            l('backgroundLayer2').style.background='url('+Game.bgFade+')';
                            l('backgroundLayer1').style.backgroundSize = '512px';
                            l('backgroundLayer2').style.backgroundSize = '512px';
                        }
                    } else if (Game.elderWrathD >= 3 && Game.elderWrathD < 4) {
                        if (Game.bg != 'http://negineesan.com/kukki/phapocalypse02.png' || Game.bgFade != 'http://negineesan.com/kukki/phapocalypse03.png') {
                            Game.bg = 'http://negineesan.com/kukki/phapocalypse02.png';
                            Game.bgFade = 'http://negineesan.com/kukki/phapocalypse03.png';
                            l('backgroundLayer1').style.background='url('+Game.bg+')';
                            l('backgroundLayer2').style.background='url('+Game.bgFade+')';
                            l('backgroundLayer1').style.backgroundSize = '512px';
                            l('backgroundLayer2').style.backgroundSize = '512px';
                        }
                    }
                }
                
                clearInterval(fuck);
            }
        } catch (e) {
        }
    }, 1000);
})();