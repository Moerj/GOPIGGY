<style lang="scss" scoped>
    @import '~src/sass/layout/public.scss';
    .article {
        padding-bottom: 60px !important;

        .head {
            $h: 60px;
            height: $h;
            min-height: $h;
            .imgbox {
                @include img-circle($h);
            }
        }

        .body {
            .text-content {
                color: rgba(black, .6);
            }
            .created-time {
                text-align: right;
                &::before {
                    content: '创建日期: '
                }
            }
        }

        .footer {
            .fa-eye {
                color: dodgerblue
            }
            .fa-share {
                color: mediumpurple
            }
            .fa-heart {
                color: hotpink
            }
            .fa-money {
                color: orange
            }
        }

        .buttons {
            display: inline-flex;
            position: absolute;
            z-index: 1;
            bottom: 15px;
            right: 15px;
        }
    }

    .interactive {
        height: 100%;
        overflow: hidden;
        >.content {
            line-height: 1.5;
            .user {
                margin-bottom: 10px;
            }
            .imgbox {
                $size: 30px;
                width: $size;
                height: $size;
                @include img-circle($size);
            }
            .quote {
                color: deepskyblue;
                &:before {
                    content: '@'
                }
            }
            .comment,
            .reply {
                padding-left: 40px;
                &.comment {
                    margin-bottom: 10px;
                }
            }
        }
    }
</style>
<template>
    <el-row class="flex" style="height:100%">
        <!--文章区域-->
        <el-col :span="16" class="article ui-card m-r-15 p-20 relative flex column">

            <!--head-->
            <div class="head flex">
                <div class="imgbox">
                    <img src="~src/images/zhifubao-logo.png">
                </div>
                <span class="p-l-15 flex column flex-center">
                    <h3 class="m-0 m-b-5">文章标题</h3>
                    <span class="f-color-grey">id: xxxxx</span>
                </span>
            </div>

            <!--body-->
            <div class="body grow-1 overflow-auto">
                <h2>文章的大标题,balablabalblablabalal</h2>
                <div class="text-content">
                    <p>
                        Kite brings the web's programming knowledge—intelligently sorted completions, all the documentation, and thousands of great
                        examples—right into your favorite editor. With Kite, you'll write better code faster.
                    </p>
                    <p>
                        Screenshot Ranked completions keep you in flow Kite's code completions are powered by the best Python type inference engine
                        available. Kite analyzes all the code on the web and gives you fast, smart completions ordered by
                        popularity data, not the alphabet.
                    </p>
                    <p>
                        Screenshot Popular Patterns Common tasks should be the easiest to perform. Kite shows you how functions are typically used,
                        so you can get the job done without wading through documentation.
                    </p>
                    <p>
                        Kite brings the web's programming knowledge—intelligently sorted completions, all the documentation, and thousands of great
                        examples—right into your favorite editor. With Kite, you'll write better code faster.
                    </p>
                    <p>
                        Screenshot Ranked completions keep you in flow Kite's code completions are powered by the best Python type inference engine
                        available. Kite analyzes all the code on the web and gives you fast, smart completions ordered by
                        popularity data, not the alphabet.
                    </p>
                    <p>
                        Screenshot Popular Patterns Common tasks should be the easiest to perform. Kite shows you how functions are typically used,
                        so you can get the job done without wading through documentation.
                    </p>
                    <p>
                        Kite brings the web's programming knowledge—intelligently sorted completions, all the documentation, and thousands of great
                        examples—right into your favorite editor. With Kite, you'll write better code faster.
                    </p>
                    <p>
                        Screenshot Ranked completions keep you in flow Kite's code completions are powered by the best Python type inference engine
                        available. Kite analyzes all the code on the web and gives you fast, smart completions ordered by
                        popularity data, not the alphabet.
                    </p>
                    <p>
                        Screenshot Popular Patterns Common tasks should be the easiest to perform. Kite shows you how functions are typically used,
                        so you can get the job done without wading through documentation.
                    </p>
                    <p>
                        Kite brings the web's programming knowledge—intelligently sorted completions, all the documentation, and thousands of great
                        examples—right into your favorite editor. With Kite, you'll write better code faster.
                    </p>
                    <p>
                        Screenshot Ranked completions keep you in flow Kite's code completions are powered by the best Python type inference engine
                        available. Kite analyzes all the code on the web and gives you fast, smart completions ordered by
                        popularity data, not the alphabet.
                    </p>
                    <p>
                        Screenshot Popular Patterns Common tasks should be the easiest to perform. Kite shows you how functions are typically used,
                        so you can get the job done without wading through documentation.
                    </p>
                    <p>
                        Kite brings the web's programming knowledge—intelligently sorted completions, all the documentation, and thousands of great
                        examples—right into your favorite editor. With Kite, you'll write better code faster.
                    </p>
                    <p>
                        Screenshot Ranked completions keep you in flow Kite's code completions are powered by the best Python type inference engine
                        available. Kite analyzes all the code on the web and gives you fast, smart completions ordered by
                        popularity data, not the alphabet.
                    </p>
                    <p>
                        Screenshot Popular Patterns Common tasks should be the easiest to perform. Kite shows you how functions are typically used,
                        so you can get the job done without wading through documentation.
                    </p>
                </div>
                <p class="created-time">2012-09-11</p>
            </div>

            <!--footer-->
            <div class="footer">
                <p>
                    <span class="m-r-15"><icon name="eye" class="text"></icon>阅读:<span class="m-l-5 m-r-5">0</span>次</span>
                    <span class="m-r-15"><icon name="share" class="text"></icon>分享:<span class="m-l-5 m-r-5">0</span>次</span>
                    <span class="m-r-15"><icon name="heart" class="text"></icon>获赞:<span class="m-l-5 m-r-5">0</span>次</span>
                    <span class="m-r-15"><icon name="money" class="text"></icon>佣金:<span class="m-l-5 m-r-5">0</span></span>
                </p>
                <p>
                    <b class="m-r-10">Tags:</b>
                    <el-tag>标签一</el-tag>
                    <el-tag type="gray">标签二</el-tag>
                    <el-tag type="primary">标签三</el-tag>
                    <el-tag type="success">标签四</el-tag>
                    <el-tag type="warning">标签五</el-tag>
                    <el-tag type="danger">标签六</el-tag>
                </p>
            </div>

            <div class="buttons">
                <el-button type="primary">推广此内容</el-button>
                <el-button @click="$router.go(-1)">返回</el-button>
                <el-button>投诉</el-button>
            </div>
        </el-col>

        <!--用户互动-->
        <el-col :span="8" class="interactive ui-card flex column">
            <h3>用户互动 (<span>12</span>)</h3>
            <div class="content grow-1 overflow-auto">
                <div class="user" v-for="comment in commentData">
                    <!--名称-->
                    <div class="flex align-center m-b-5">
                        <div class="imgbox">
                            <img :src="comment.headImg">
                        </div>
                        <b class="p-l-10">{{comment.name}}</b>
                    </div>
                    <!--评论-->
                    <div class="comment">
                        <b class="quote">{{comment.quote}}</b>
                        <span class="f-color-text" v-html="comment.content"></span>
                        <el-button type="text" class="f-color-green block" size="mini">Reply</el-button>
                    </div>

                    <!--回复-->
                    <div class="reply" v-for="reply in comment.replyData">
                        <div class="user">
                            <!--名称-->
                            <div class="flex align-center m-b-5">
                                <div class="imgbox">
                                    <img :src="reply.headImg">
                                </div>
                                <b class="p-l-10">{{reply.name}}</b>
                            </div>
                            <!--评论-->
                            <div class="comment">
                                <b class="quote">{{reply.quote}}</b>
                                <span class="f-color-text" v-html="reply.content"></span>
                                <el-button type="text" class="f-color-green block" size="mini">Reply</el-button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </el-col>
    </el-row>
</template>
<script>
    export default {
        data() {
            return {
                commentData: [{
                    headImg: 'http://img.mukewang.com/564c3f1f000126a711111111-100-100.jpg',
                    name: 'Moer',
                    content: `Kite brings the web's programming knowledge—intelligently sorted completions, all the documentation, and thousands of great
                    examples—right into your favorite editor. With Kite, you'll write better code faster.`,
                    quote: 'yiyi',
                    replyData: [{
                        headImg: 'http://ww1.sinaimg.cn/mw690/a7b9e78fgw1f7woe5rw0ij20qo0qo7c4.jpg',
                        name: 'EvieEvie-K',
                        content: `hey this is first reply.You'll write better code faster.`,
                        quote: 'Moer',
                    }, {
                        headImg: 'http://img.mukewang.com/564c3f1f000126a711111111-100-100.jpg',
                        name: 'Moer',
                        content: `you are right`,
                        quote: 'yiyi',
                    }]
                }]
            }
        }
    }
</script>