package ggb.morning_routine.main.web;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
@Slf4j
public class MainController {

    @GetMapping("")
    public ModelAndView main(ModelAndView mv) {
        mv.setViewName("pages/main");
        return mv;
    }

}
