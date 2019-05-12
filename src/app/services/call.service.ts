import {Call} from '../call/Call';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable()
export class CallService {

  private calls: Call[] = [
    new Call('00666a74-8187-4b98-822b-ad30b1c08188', '0033184201648', '0033160172203', 'FILE_COM_SOD',
      '2019-05-10T10:02:39.041Z', '0033184201621', 5, 15,
      '99612BMMAT', 'Adrien', 'FERRE', 'MEMBER_QUEUE_END'),

    new Call('007a2bfd-72c5-4324-84c4-c2ea5c8edc07', '0033278775733', '0033614174148', 'TR_DALKIA_Belib',
      '2019-04-29T19:50:25', '0033235596086', 8, 58,
      '0542BMMAT', 'Guillaume', 'BOLTON', 'MEMBER_QUEUE_END'),

    new Call('0109a554-1085-47a9-a98d-5f55d5b59556', '0033184201645', '0033660495536', 'FILE_COM_SOD',
      '2019-04-25T14:46:00', '0033184201645', 97, 124,
      '74512BMMAT', 'Adrien', 'FERRE', 'BRIDGE_AGENT_FAIL'),
    new Call('0122fc0a-c7d2-4490-bee7-410dde637df3', '0033188329095', '0033613626348', 'PE_AUTOLIB',
      '2019-05-02T12:01:55', '0033677559437', 14, 134,
      '05612BMMAT', 'Charlie', 'MADISON', 'BRIDGE_AGENT_END'),
    new Call('0263d082-8078-4404-85da-63a308041539', '0033184201645', '0033160172203', 'TR_DALKIA_OUEST',
      '2019-05-10T10:02:39.041Z', '0033184201621', 41, 70,
      '58612BMMAT', 'Jean', 'NGUYEN', 'MEMBER_QUEUE_END'),
    new Call('02bfebe8-f383-4c76-b595-9a58cacfe0d0', '0033184201648', '0033611442981', 'TR_DALKIA_Belib',
      '2019-05-07T13:44:40', '0033626371279', 0, 6,
      '49712BMMAT', 'Alice', 'KHAN', 'BRIDGE_AGENT_END')
  ];


  constructor(private httpClient: HttpClient) {
  }

  findAllCalls(): Call [] {
    return this.calls;
  }

  findById(idMember: string): Call {
    console.log("id : " + idMember)
    const call = this.calls.find(
      (callObject) => {
        return callObject.memberSessionUUID === idMember;
      }
    );
    return call;
  }

}
