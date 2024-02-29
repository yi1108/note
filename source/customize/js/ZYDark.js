/**
 * 监听系统主题
 * @type {MediaQueryList}
 */
var OSTheme = window.matchMedia('(prefers-color-scheme: dark)');
OSTheme.addListener(e => {
    if (window.localStorage.getItem('ZYI_Theme_Mode') === 'Moss') {
        ThemeChange('Moss');
    }
})
/**
 * 修改博客主题
 * @param theme 亮为light,暗为dark,自动为auto
 * @constructor
 */
const ThemeChange = (theme) => {
    if(document.querySelector("#start > aside > footer > div > a:nth-child(2)") != 'undefined' && document.querySelector("#start > aside > footer > div > a:nth-child(2)") != null){
        if (theme === 'light' || (theme === 'Moss' && !OSTheme.matches)) {
            document.querySelector("html").id = "ZYLight";
            document.querySelector("#start > aside > footer > div > a:nth-child(2)").style.filter = 'grayscale(0%)';
            document.querySelector("#start > aside > footer > div > a:nth-child(1)").style.filter = 'grayscale(100%)';
        } else {
            document.querySelector("html").id = "ZYDark";
            document.querySelector("#start > aside > footer > div > a:nth-child(1)").style.filter = 'grayscale(0%)';
            document.querySelector("#start > aside > footer > div > a:nth-child(2)").style.filter = 'grayscale(100%)';
        }
        //if (theme === 'Moss') { document.querySelector("#start > aside > footer > div > a:nth-child(7)").style.filter = 'grayscale(0%)'; }
        //else { document.querySelector("#start > aside > footer > div > a:nth-child(7)").style.filter = 'grayscale(100%)'; }
        window.localStorage.setItem('ZYI_Theme_Mode', theme);
        commentChange(theme);
    }
}
// /**
//  * 修改评论主题
//  * @param theme
//  */
// const commentChange = (theme) => {
//     try {
//         let commentSrc = document.querySelector("#comments > section.body.cmt-body.giscus > iframe").src;
//         if (theme === "Moss") {
//             theme = OSTheme.matches? 'dark' : 'light';
//         }
//         commentSrc = commentSrc.replace(theme === 'dark' ? 'theme=light' : 'theme=dark', theme === 'dark' ? 'theme=dark' : 'theme=light');
//         commentSrc = commentSrc.replace('theme=preferred_color_scheme', theme === 'dark' ? 'theme=dark' : 'theme=light');
//         document.querySelector("#comments > section.body.cmt-body.giscus > iframe").src = commentSrc;
//     } catch (e) {
//     }
// }
/**
 * 初始化博客主题
 */
switch (window.localStorage.getItem('ZYI_Theme_Mode')) {
    case 'light':
        ThemeChange('light');
        break;
    case 'dark':
        ThemeChange('dark');
        break;
    default:
        ThemeChange('Moss');
}

if(document.querySelector("#start > aside > footer > div > a:nth-child(2)") != 'undefined' && document.querySelector("#start > aside > footer > div > a:nth-child(2)") != null){
    /**
     * 切换主题模式
     */
    document.querySelector("#start > aside > footer > div > a:nth-child(1)").onclick = () => {
        ThemeChange('dark');
    }
    document.querySelector("#start > aside > footer > div > a:nth-child(2)").onclick = () => {
        ThemeChange('light');
    }
    //document.querySelector("#start > aside > footer > div > a:nth-child(7)").onclick = () => {
    //    ThemeChange('Moss');
    //}
}
