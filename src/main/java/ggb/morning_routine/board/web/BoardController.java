package ggb.morning_routine.board.web;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
@Slf4j
@RequestMapping("/board")
public class BoardController {

    /**
     * 게시글 조회 화면
     * @param mv
     * @return
     */
    @GetMapping("/list")
    public ModelAndView selectboardList(ModelAndView mv) {
        mv.setViewName("pages/board/list");
        return mv;
    }

}
